import { betterAuth } from 'better-auth';
import { magicLink } from 'better-auth/plugins';
import { createPool } from '@vercel/postgres';

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
  emailAndPassword: {
    enabled: true,
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
