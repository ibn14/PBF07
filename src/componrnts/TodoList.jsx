// Mengimpor library React
import React from 'react';

// Mengimpor komponen List dari Material UI
import List from '@mui/material/List';

// Mengimpor komponen ListItem untuk setiap item todo
import ListItem from '@mui/material/ListItem';

// Mengimpor komponen aksi di sebelah kanan ListItem
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

// Mengimpor komponen untuk menampilkan teks todo
import ListItemText from '@mui/material/ListItemText';

// Mengimpor Checkbox Material UI
import Checkbox from '@mui/material/Checkbox';

// Mengimpor tombol icon Material UI
import IconButton from '@mui/material/IconButton';

// Mengimpor icon Delete (tidak digunakan pada file ini)
import DeleteIcon from '@mui/icons-material/Delete';

// Mengimpor icon DeleteOutlined
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

// Membuat komponen TodoList
// todos berisi daftar todo
// deleteTodo adalah fungsi untuk menghapus todo
const TodoList = ({ todos, deleteTodo }) => (

  // Pembungkus utama
  <div>

    {/* Menampilkan daftar todo */}
    <List>

      {/* Melakukan perulangan untuk setiap todo */}
      {todos.map((todo, index) => (

        // Setiap todo menjadi satu ListItem
        <ListItem

          // key digunakan agar React dapat membedakan setiap item
          key={index.toString()}

          // Membuat tampilan lebih rapat
          dense

          // Menjadikan ListItem bisa diklik
          button
        >

          {/* Checkbox hanya sebagai tampilan */}
          <Checkbox
            tabIndex={-1}
            disableRipple
          />

          {/* Menampilkan isi todo */}
          <ListItemText
            secondary={todo}
          />

          {/* Tempat tombol aksi */}
          <ListItemSecondaryAction>

            {/* Tombol untuk menghapus todo */}
            <IconButton

              // Label untuk aksesibilitas
              aria-label="Delete"

              // Dijalankan ketika tombol diklik
              onClick={() => {

                // Menghapus todo berdasarkan index
                deleteTodo(index);

              }}
            >

              {/* Icon Delete */}
              <DeleteOutlinedIcon
                stroke="red"
                fill="red"
              />

            </IconButton>

          </ListItemSecondaryAction>

        </ListItem>

      ))}

    </List>

  </div>
);

// Mengekspor komponen agar dapat digunakan oleh App.jsx
export default TodoList;