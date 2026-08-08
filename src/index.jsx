// Mengimpor React
import React from "react";

// Mengimpor ReactDOM untuk menampilkan aplikasi React ke browser
import ReactDOM from "react-dom/client";

// Mengimpor komponen utama App
import App from "./App";

// Mengimpor file CSS utama
import "./App.css";

// Mencari elemen HTML yang memiliki id "root"
// lalu membuat React Root
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Merender aplikasi React ke dalam elemen root
root.render(

  // StrictMode membantu mendeteksi potensi masalah
  // selama proses development
  <React.StrictMode>

    {/* Menampilkan komponen utama aplikasi */}
    <App />

  </React.StrictMode>
);