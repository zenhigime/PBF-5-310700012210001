import './App.css' // Mengimpor file CSS untuk styling aplikasi
import React, { useState } from 'react'; // Mengimpor React dan hook useState untuk mengelola state lokal
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'; // Mengimpor fungsi generator dan 3 jenis kata untuk membentuk nama acak


const customConfig = { // Konfigurasi generator nama:
  dictionaries: [adjectives, colors, animals], // - Menggunakan 3 kamus kata: sifat, warna, hewan
  separator: ' ', // - Dipisahkan dengan spasi
  length: 3, // - Total 3 kata per nama.
};

export default function AppState() { // Komponen utama React bernama AppState

  const [randomName, setRandomName] = useState();  // State 'randomName' menyimpan nama acak, awalnya undefined


  function generateRandomName() {
    const generatedName = uniqueNamesGenerator(customConfig); // Fungsi untuk membuat nama acak berdasarkan konfigurasi,
    setRandomName(generatedName) // memperbarui state 'randomName' dengan nama yang baru dibuat
  }

  return (
    <main>
      <h1>Belajar React Hook</h1> {/* Judul */}
      <p>Random Name Generator</p> {/* Deskripsi */}
      {
        randomName && <h3>{randomName}</h3> // Jika 'randomName' tidak kosong, tampilkan dalam elemen <h3>
      }
      <button
        style={{ alignSelf: 'center' }} // Styling tombol agar berada di tengah
        onClick={generateRandomName} // Memanggil fungsi generateRandomName saat tombol diklik
      >
        Generate Random Name {/* Tombol untuk memicu pembuatan nama acak saat diklik */}
      </button>
    </main>
  )
}
