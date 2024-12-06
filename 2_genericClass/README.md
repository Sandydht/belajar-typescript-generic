# Generic Class
* Generic bisa ditambahkan ketika kita membuat class, caranya bisa menggunakan tanda ``` < > ``` (diamond) setelah nama class, lalu tentukan tipe data generic nya.
* Tipe data generic tersebut bisa digunakan pada class, dan bisa diubah tipenya ketika kita membuat object dari generic class tersebut.
* Saat kita membuat object dari generic class, kita wajib menentukan tipe data yang ingin kita gunakan untuk mengganti tipe data generic nya.
* Kode: Generic Class
  ```TSX
  export class GenericData<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }
  }
  ```
* Kode: Membuat Object
  ```TSX
  import { GenericData } from '../src/generic';

  describe('Generic Class', () => {
    it('should can only accept one type', () => {
      const data = new GenericData<number>(123);
      data.value = 'Sandy';
      data.value = true;
    });
  });
  ```
* Kode: Menggunakan Data di Generic
  ```TSX
  describe('Generic Class', () => {
    it('should can only accept one type', () => {
      const data = new GenericData<number>(123);
      expect(data.value).toBe(123);

      const dataString = new GenericData<string>('Sandy Dwi Handoko Trapsilo');
      const firstName = dataString.value.substring(0, 3);
      expect(firstName).toBe('Sandy Dwi Handoko Trapsilo');
    });
  });
  ```