import React from 'react' // Mengimpor React
import ReactDOM from 'react-dom/client' // Mengimpor ReactDOM untuk rendering komponen React ke DOM
import AppState from './AppState' // Mengimpor komponen AppState dari direktori src
import AppEffect from './AppEffect' // Mengimpor komponen AppEffect dari direktori src
import AppCustomHook from './AppCustomHook' // Mengimpor komponen AppCustomHook dari direktori src

ReactDOM.createRoot(document.getElementById('root')).render( // Membuat root ReactDOM dan merender komponen ke elemen dengan id 'root'
  <React.StrictMode>
    <AppCustomHook /> {/*Mengganti komponen yang akan dirender*/}
  </React.StrictMode>
)