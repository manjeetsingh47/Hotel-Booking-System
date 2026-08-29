import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["hotel-booking-frontend-qva1.onrender.com"],
  },
});