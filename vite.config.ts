import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/quieres_ser_mi_cita_de_san_valentin",
  plugins: [react()],
});
