import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Backend server
        changeOrigin: true, // Changes the `Host` header to match the target
        secure: false, // Disable SSL verification if using HTTP
      },
    },
  },
});
