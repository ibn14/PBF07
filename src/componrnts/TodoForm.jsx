// Mengimpor library React
import React from 'react';

// Mengimpor komponen TextField dari Material UI
import TextField from '@mui/material/TextField';

// Mengimpor custom hook untuk mengelola nilai input
import useInputState from '../hooks/useInputState';

// Membuat komponen TodoForm
// saveTodo diterima dari App.jsx melalui props
const TodoForm = ({ saveTodo }) => {

  // Mengambil value, reset, dan onChange dari custom hook
  const { value, reset, onChange } = useInputState();

  // Mengembalikan tampilan komponen
  return (

    // Form akan dijalankan ketika tombol Enter ditekan
    <form

      // Event onSubmit dijalankan saat form disubmit
      onSubmit={event => {

        // Mencegah browser melakukan refresh halaman
        event.preventDefault();

        // Mengirim isi input ke fungsi saveTodo
        saveTodo(value);

        // Mengosongkan kembali isi input
        reset();
      }}
    >

      {/* Input menggunakan komponen Material UI */}
      <TextField

        // Menggunakan style outlined
        variant="outlined"

        // Placeholder yang ditampilkan saat input kosong
        placeholder="Add todo"

        // Memberikan margin bawaan Material UI
        margin="normal"

        // Menjalankan fungsi ketika isi input berubah
        onChange={onChange}

        // Menampilkan nilai input dari state
        value={value}
      />

    </form>
  );
};

// Mengekspor komponen agar dapat digunakan oleh file lain
export default TodoForm;