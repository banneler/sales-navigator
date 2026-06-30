import { betterAuth } from 'better-auth';
import { createAuthMiddleware, APIError } from 'better-auth/api';
import { magicLink } from 'better-auth/plugins';
import { createPool } from '@vercel/postgres';
import {
  ALLOWED_EMAIL_DOMAIN_MESSAGE,
  assertAllowedEmail,
  isAllowedEmail,
} from './auth-email-domain.js';

const AUTH_EMAIL_PATHS = new Set([
  '/sign-up/email',
  '/sign-in/email',
  '/sign-in/magic-link',
]);

const trustedOrigins = () => {
  const raw = process.env.BETTER_AUTH_TRUSTED_ORIGINS;
  const fromEnv = raw
    ? raw.split(',').map((s) => s.trim()).filter(Boolean)
    : [];
  const base = process.env.BETTER_AUTH_URL;
  return [...new Set([...(base ? [base] : []), ...fromEnv])];
};

function createDatabasePool() {
  const url = process.env.POSTGRES_URL;
  if (!url) {
    throw new Error(
      'POSTGRES_URL is not set. Link Vercel Postgres or set POSTGRES_URL for local dev.',
    );
  }
  return createPool({ connectionString: url });
}

export const auth = betterAuth({
  database: createDatabasePool(),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: trustedOrigins(),
  session: {
    expiresIn: 60 * 60 * 24,
    updateAge: 60 * 60,
  },
  emailAndPassword: {
    enabled: true,
  },
  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (!AUTH_EMAIL_PATHS.has(ctx.path)) return;
      const email = ctx.body?.email;
      if (!isAllowedEmail(email)) {
        throw new APIError('BAD_REQUEST', {
          message: ALLOWED_EMAIL_DOMAIN_MESSAGE,
        });
      }
    }),
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          assertAllowedEmail(user.email);
          return { data: user };
        },
      },
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url: magicUrl }) => {
        // Wire to Resend, Postmark, etc. in production; until then the link is logged for testing.
        console.warn('[magic link]', email, magicUrl);
      },
    }),
  ],
});
