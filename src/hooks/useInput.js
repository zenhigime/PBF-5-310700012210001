import { useState } from 'react'; // Mengimpor hook useState dari React

export default function useInput(initialValue) {
  // Mendefinisikan custom hook bernama useInput
  // Menerima parameter awal untuk nilai input (initialValue)

  const [value, setValue] = useState(initialValue);
  // Membuat state 'value' untuk menyimpan nilai input,
  // dan 'setValue' untuk mengubahnya

  const reset = () => {
    setValue(initialValue); // Fungsi reset: mengembalikan nilai input ke nilai awalnya
  }

  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  };
  // Objek 'bind' yang akan digunakan untuk "mengikat" input:
  // - 'value': agar input selalu sinkron dengan state
  // - 'onChange': agar input bisa diubah dan memperbarui state

  return [value, bind, reset];
  // Mengembalikan tiga hal:
  // - value (nilai saat ini)
  // - bind (properti input yang siap di-spread)
  // - reset (fungsi untuk mengatur ulang nilai)
}