// Mengimpor library React
import React from 'react';

// Mengimpor ReactDOM (pada file ini sebenarnya tidak digunakan)
import ReactDOM from 'react-dom';

// Mengimpor komponen Typography dari Material UI
import Typography from '@mui/material/Typography';

// Mengimpor komponen form untuk menambah todo
import TodoForm from './components/TodoForm';

// Mengimpor komponen daftar todo
import TodoList from './components/TodoList';

// Mengimpor custom hook untuk mengelola data todo
import useTodoState from './hooks/useTodoState';

// Mengimpor file CSS
import './App.css';

// Mengimpor Button Material UI (belum digunakan pada file ini)
import Button from '@mui/material/Button';

// Mengimpor TextField Material UI (belum digunakan pada file ini)
import TextField from '@mui/material/TextField';

// Membuat komponen utama aplikasi
export default function App() {

  // Mengambil data dan fungsi dari custom hook
  // todos      : menyimpan daftar todo
  // addTodo    : menambahkan todo baru
  // deleteTodo : menghapus todo
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  // Mengembalikan tampilan komponen
  return (

    // Container utama aplikasi
    <div className="App">

      {/* Menampilkan judul aplikasi */}
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      {/* Komponen form untuk menambah todo */}
      <TodoForm

        // Mengirim fungsi saveTodo ke TodoForm melalui props
        saveTodo={todoText => {

          // Menghapus spasi di awal dan akhir input
          const trimmedText = todoText.trim();

          // Memastikan input tidak kosong
          if (trimmedText.length > 0) {

            // Menambahkan todo ke state
            addTodo(trimmedText);
          }
        }}
      />

      {/* Menampilkan seluruh daftar todo */}
      <TodoList

        // Mengirim daftar todo
        todos={todos}

        // Mengirim fungsi hapus todo
        deleteTodo={deleteTodo}
      />

    </div>
  );
}