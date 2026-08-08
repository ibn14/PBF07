// Mengimpor hook useState dari React
import { useState } from "react";

// Membuat custom hook useInputState
const useInputState = (initialValue = "") => {

  // Membuat state untuk menyimpan nilai input
  const [value, setValue] = useState(initialValue);

  // Fungsi dijalankan ketika isi input berubah
  const onChange = (event) => {

    // Mengambil nilai dari input lalu menyimpannya ke state
    setValue(event.target.value);
  };

  // Fungsi untuk mengembalikan nilai input ke kondisi awal
  const reset = () => {

    // Mengisi kembali state dengan nilai awal
    setValue(initialValue);
  };

  // Mengembalikan object yang berisi state dan fungsi-fungsinya
  return {
    // Nilai input saat ini
    value,

    // Fungsi untuk menangani perubahan input
    onChange,

    // Fungsi untuk mengosongkan atau mengembalikan input
    reset
  };
};

// Mengekspor custom hook agar dapat digunakan pada file lain
export default useInputState;