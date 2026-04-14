import { auth } from '../../lib/auth-server.js';
import { toNodeHandler } from 'better-auth/node';

export const config = {
  runtime: 'nodejs',
};

export default toNodeHandler(auth);
