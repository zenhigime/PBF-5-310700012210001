import { useState } from 'react'; // Mengimpor hook useState dari React

export default function useInput(initialValue) { // Mendefinisikan custom hook bernama useInput yang menerima nilai awal sebagai argumen

  const [value, setValue] = useState(initialValue); // State 'value' menyimpan nilai input saat ini, awalnya sama dengan nilai awal

  const reset = () => { // Fungsi untuk mereset input ke nilai awal
    setValue(initialValue); // Memperbarui state 'value' dengan nilai awal
  }

  const bind = { // Objek yang berisi properti-properti yang akan di-spread ke <input>
    value, // Nilai input saat ini
    onChange: e => { // Event handler untuk menangani perubahan nilai input
      setValue(e.target.value) // Memperbarui state 'value' dengan nilai input terbaru
    }
  };

  return [value, bind, reset]; // Mengembalikan array yang berisi nilai input saat ini, properti-properti untuk <input>, dan fungsi reset
}