# TypeScript Generic
* Generic adalah fitur dimana kita bisa membuat kode yang sama, dan bisa digunakan berulang kali dengan menggunakan tipe data yang berbeda.
* Sebelumnya, saat kita ingin menggunakan tipe data yang bisa berbeda untuk variabel atau parameter, kita menggunakan tipe data any.
* Dengan menggunakan generic, kita bisa melakukan perubahan tipe data ketika digunakan, sehingga lebih aman karena tidak perlu menggunakan tipe data seperti any.

# Membuat Project
* Buat folder belajar-typescript-generic
* ``` npm init ```
* Buka package.json dan tambah type module

# Menambah Library Jest untuk Unit Test
* ``` npm install --save-dev jest @types/jest ```
* [https://www.npmjs.com/package/jest](https://www.npmjs.com/package/jest)

# Menambah Library Babel
* ``` npm install --save-dev babel-jest @babel/preset-env ```
* [https://babeljs.io/setup#installation](https://babeljs.io/setup#installation)

# Menambah TypeScript
* ``` npm install --save-dev typescript ```
* [https://www.npmjs.com/package/typescript](https://www.npmjs.com/package/typescript)

# Setup TypeScript Project
* ``` npx tsc --init ```
* Semua konfigurasi akan dibuat di file tsconfig.json
* Ubah ``` "module" ``` dari ``` "commonjs" ``` menjadi ``` "ES6" ```

# Setup TypeScript untuk Jest
* ``` npm install --save-dev @babel/preset-typescript ```
* ``` npm install --save-dev @jest/globals ```
* [https://jestjs.io/docs/getting-started#using-typescript](https://jestjs.io/docs/getting-started#using-typescript)

