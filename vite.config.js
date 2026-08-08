// Mengimpor fungsi defineConfig dari Vite
import { defineConfig } from "vite";

// Mengimpor plugin React agar Vite dapat menjalankan project React
import react from "@vitejs/plugin-react";

// Mengekspor konfigurasi Vite
export default defineConfig({

  // Mendaftarkan plugin React
  plugins: [
    react()
  ],

  // Konfigurasi development server
  server: {

    // Mengizinkan server diakses dari semua alamat IP
    // Contohnya agar bisa diakses dari jaringan lokal atau Replit
    host: "0.0.0.0"
  }
});