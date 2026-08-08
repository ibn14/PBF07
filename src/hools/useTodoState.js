// Mengimpor hook useState dari React
import { useState } from 'react';

// Membuat custom hook dan menerima nilai awal todo
export default initialValue => {

  // Membuat state untuk menyimpan daftar todo
  const [todos, setTodos] = useState(initialValue);

  // Mengembalikan object yang berisi data dan fungsi
  return {

    // Mengembalikan daftar todo saat ini
    todos,

    // Fungsi untuk menambahkan todo baru
    addTodo: todoText => {

      // Menambahkan todo baru ke array lama menggunakan spread operator
      setTodos([...todos, todoText]);
    },

    // Fungsi untuk menghapus todo berdasarkan index
    deleteTodo: todoIndex => {

      // Membuat array baru tanpa todo yang dipilih
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      // Menyimpan array baru ke dalam state
      setTodos(newTodos);
    }
  };
};