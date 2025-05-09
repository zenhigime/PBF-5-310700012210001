import './App.css' // Mengimpor file CSS untuk styling aplikasi
import React, { useState, useEffect } from 'react'; // Mengimpor React dan dua hook: useState untuk state, useEffect untuk efek samping
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'; // Mengimpor fungsi dan daftar kata dari library untuk membuat nama acak


const customConfig = { // Konfigurasi generator nama:
  dictionaries: [adjectives, colors, animals], // - menggunakan 3 jenis kata (sifat, warna, hewan)
  separator: ' ', // - dipisahkan spasi
  length: 3, // - panjang nama = 3 kata
};

export default function AppEffect() { // Komponen utama React bernama AppEffect

  const [randomName, setRandomName] = useState();  // State untuk menyimpan nama acak yang dihasilkan
  const [generateCount, setGenerateCount] = useState(0);  // State untuk menghitung berapa kali nama digenerate

  useEffect(() => { // useEffect dijalankan setiap kali randomName berubah Jika randomName tidak kosong, maka generateCount akan ditambah 1
    if (randomName) {
      setGenerateCount(generateCount + 1)
    }
  }, [randomName])


  function generateRandomName() { // Fungsi untuk membuat nama acak menggunakan konfigurasi, lalu memperbarui randomName
    const generatedName = uniqueNamesGenerator(customConfig);
    setRandomName(generatedName)
  }

  return (
    <main>
      <h1>Belajar React Hook</h1> {/* judul */}
      <p>Random Name Generator</p> {/* deskripsi */}
      {
        randomName && <h3>{randomName}</h3> // Menampilkan nama acak jika sudah tersedia
      }
      <button
        style={{ alignSelf: 'center' }}
        onClick={generateRandomName} // Memanggil fungsi generateRandomName saat tombol diklik
      >
        Generate Random Name
      </button> {/* Tombol untuk memicu pembuatan nama acak */}
      <p>Digenerate sebanyak {generateCount} kali</p> {/* Menampilkan berapa kali tombol diklik (nama digenerate) */}
    </main>
  )
}
