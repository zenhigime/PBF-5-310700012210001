import React from 'react'; // Mengimpor React
import useInput from '../hooks/useInput'; // Mengimpor custom hook useInput dari direktori hooks

export default function UserForm() { // mendefinisikan dan mengekspor komponen fungsi bernama UserForm

  const [firstName, bindFirstName, resetFirstName] = useInput('Hendra');
  // Menggunakan custom hook useInput untuk firstName:
  // - firstName: nilai input saat ini
  // - bindFirstName: properti yang akan di-spread ke <input>
  // - resetFirstName: fungsi untuk mereset input ke default
  const [lastName, bindLastName, resetLastName] = useInput('Permana')
  // Menggunakan custom hook useInput untuk lastName: *sama seperti diatas
  const [title, setTitle] = React.useState('')
  // State biasa React untuk menyimpan teks hasil setelah submit

  const submitHandler = e => { // Fungsi untuk menangani submit form
    e.preventDefault(); // Mencegah reload halaman saat form disubmit

    setTitle(`Hello ${firstName} ${lastName}`)   // Menyusun pesan sapaan dari input dan menyimpannya ke state title
    resetFirstName();
    resetLastName();
    // Mereset kedua input setelah submit
  }

  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={submitHandler}> {/* Form dengan event handler submit */}
        <div>
          <label>First Name</label> {/* Label untuk input firstName */}
          <input
            {...bindFirstName}
            type='text' />  {/* Menghubungkan input ke hook useInput untuk firstName */}
        </div>

        <div>
          <label>Last Name</label>
          <input
            {...bindLastName}
            type='text' />  {/* Menghubungkan input ke hook useInput untuk lastName */}
        </div>

        <button>Submit</button> {/* Tombol submit form */}
      </form>
    </>
  )
}