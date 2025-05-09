import React from 'react'; // Mengimpor library React
import useInput from '../hooks/useInput'; // Mengimpor custom hook useInput dari folder hooks

export default function UserForm() { // Mendefinisikan dan mengekspor komponen fungsi bernama UserForm

  const [firstName, bindFirstName, resetFirstName] = useInput('Hendra');
  // Menggunakan custom hook useInput untuk firstName:
  // - firstName: nilai input saat ini
  // - bindFirstName: properti yang akan di-spread ke <input>
  // - resetFirstName: fungsi untuk mereset input ke default

  const [lastName, bindLastName, resetLastName] = useInput('Permana')
  // Menggunakan custom hook useInput untuk lastName

  const [title, setTitle] = React.useState('')  // State biasa React untuk menyimpan teks hasil setelah submit

  const submitHandler = e => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit

    setTitle(`Hello ${firstName} ${lastName}`) // Menyusun pesan sapaan dari input dan menyimpannya ke state title
    resetFirstName(); // Mereset input setelah submit
    resetLastName(); // Mereset input setelah submit
  }

  return (
    <>
      <h3>{title}</h3>  {/* Menampilkan hasil sapaan di sini */}
      <form onSubmit={submitHandler}>  {/* handle event submit */}
        <div>
          <label>First Name</label> {/* menyediakan teks label di atas (atau di samping) input form */}
          <input
            {...bindFirstName}
            type='text' /> {/* Menghubungkan input ke hook useInput untuk firstName */}
        </div>

        <div>
          <label>Last Name</label>
          <input
            {...bindLastName}
            type='text' /> {/* Menghubungkan input ke hook useInput untuk lastName */}
        </div>

        <button>Submit</button> {/* Tombol untuk submit form */}
      </form>
    </>
  )
}