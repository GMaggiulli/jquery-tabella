import { defineConfig } from 'vite';
import { join } from 'path';

export default defineConfig({
	root: join(__dirname, 'src'),
	server: {
		port: 8000
	}
});