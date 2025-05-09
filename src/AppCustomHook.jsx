import './App.css' // Mengimpor file CSS untuk styling aplikasi
import UserForm from './components/UserForm' // Mengimpor komponen UserForm dari folder components

export default function AppCustomHook() { // Mendefinisikan dan mengekspor komponen fungsi utama bernama AppCustomHook

  return (
    <main>
      <h1>Belajar React Custom Hook</h1>  {/* Menampilkan judul pada halaman */}

      <UserForm />  {/* Merender komponen UserForm yang diimpor di atas */}
    </main>
  )
}
