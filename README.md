# Movie App Backend

Backend REST API sederhana untuk aplikasi film, dibangun menggunakan Node.js, Express, dan Sequelize dengan database MySQL.

## Fitur

* **Autentikasi Pengguna**: Registrasi dan Login pengguna.
* **Password Hashing**: Penyimpanan password aman menggunakan bcrypt.
* **Manajemen Film**: Operasi CRUD (Create, Read, Update, Delete) penuh untuk film.
* **Manajemen Episode**: Operasi CRUD penuh untuk episode, yang terhubung dengan film bertipe "series".
* **Daftar Saya (Movie List)**: Kemampuan bagi pengguna untuk menambah, melihat, dan menghapus film dari daftar pribadi mereka.
* **Relasi Model**: Penggunaan Sequelize ORM untuk mengelola relasi antar User, Movie, Episode, dan MovieList.

## Teknologi yang Digunakan

* **Node.js**: Lingkungan eksekusi JavaScript sisi server.
* **Express.js**: Framework web untuk membangun REST API.
* **Sequelize**: ORM (Object-Relational Mapper) berbasis Promise untuk Node.js.
* **MySQL2**: Driver MySQL untuk Node.js.
* **Bcrypt**: Library untuk hashing password.
* **Dotenv**: Modul untuk memuat variabel lingkungan dari file `.env`.
* **Nodemon**: Utilitas untuk me-restart server secara otomatis saat pengembangan.
* **Sequelize-CLI**: Antarmuka baris perintah untuk Sequelize (untuk migrasi).

## Prasyarat dan Instalasi

Pastikan Anda memiliki Node.js dan server database MySQL yang terinstal dan berjalan di sistem Anda.

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/rizki-kudeng/movie-app-backend.git](https://github.com/rizki-kudeng/movie-app-backend.git)
    cd movie-app-backend
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Konfigurasi Database:**
    * Buka file `config/config.json`.
    * Sesuaikan kredensial (username, password, host) untuk lingkungan `development` agar sesuai dengan pengaturan MySQL Anda.
    * Pastikan Anda telah membuat database (misalnya `movie_app`) di MySQL Anda.

4.  **Jalankan Migrasi Database:**
    Perintah ini akan membuat tabel (`users`, `movies`, `episodes`, `movie_lists`) di database Anda berdasarkan file di folder `migrations/`.
    ```bash
    npx sequelize-cli db:migrate
    ```

5.  **Jalankan Server:**
    Server akan berjalan di `http://localhost:3000` menggunakan `nodemon`.
    ```bash
    npm start
    ```

## Susunan Proyek