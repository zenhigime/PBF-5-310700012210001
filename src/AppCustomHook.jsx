import './App.css' // Mengimpor file CSS untuk styling aplikasi
import UserForm from './components/UserForm' // Mengimpor komponen UserForm dari direktori components

export default function AppCustomHook() { {/* Komponen utama React bernama AppCustomHook */}

  return (
    <main>
      <h1>Belajar React Custom Hook</h1> {/* menampilkan judul pada halaman */}

      <UserForm /> {/* menampilkan komponen UserForm */}
    </main>
  )


}
