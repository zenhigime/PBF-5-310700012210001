import './App.css' // Mengimpor file CSS untuk styling aplikasi
import React, { useState, useEffect } from 'react'; // Mengimpor React dan hook useState, useEffect untuk mengelola state lokal dan efek samping
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'; // Mengimpor fungsi generator nama unik dan 3 jenis kata untuk membentuk nama acak


const customConfig = { 
  dictionaries: [adjectives, colors, animals], // Konfigurasi generator nama: sifat, warna, hewan
  separator: ' ', // Dipisahkan dengan spasi
  length: 3, // Total 3 kata per nama
};

export default function AppEffect() { // Komponen utama React bernama AppEffect

  const [randomName, setRandomName] = useState(); // State 'randomName' menyimpan nama acak, awalnya undefined
  const [generateCount, setGenerateCount] = useState(0); // State 'generateCount' menyimpan jumlah nama yang telah digenerate, awalnya 0

  useEffect(() => { // Hook useEffect untuk menjalankan efek samping setiap kali 'randomName' berubah
    if (randomName) { // Jika 'randomName' tidak kosong, tambahkan 1 ke 'generateCount'
      setGenerateCount(generateCount + 1)
    }
  }, [randomName]) // Efek samping hanya dijalankan jika 'randomName' berubah


  function generateRandomName() { // Fungsi untuk membuat nama acak berdasarkan konfigurasi, dan memperbarui state 'randomName' dengan nama yang baru dibuat
    const generatedName = uniqueNamesGenerator(customConfig);
    setRandomName(generatedName)
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
        Generate Random Name {/* Tombol untuk memicu pembuatan nama acak saat diklik... */}
      </button>
      <p>Digenerate sebanyak {generateCount} kali</p> {/* Menampilkan jumlah nama yang telah digenerate */}
    </main>
  )


}
