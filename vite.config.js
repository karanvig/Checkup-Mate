// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from key.env file
dotenv.config({ path: './key.env' });

export default defineConfig({
  plugins: [react()],
});
