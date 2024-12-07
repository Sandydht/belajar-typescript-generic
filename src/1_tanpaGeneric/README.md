# Tanpa Generic
* Tanpa generic, saat kita ingin membuat Class yang berisi tipe data yang bisa berbeda - beda.
* Maka kita harus menggunakan tipe data any.
* Kode: Data Class
  ```TSX
  export class Data {
    value: any;

    constructor(value: any) {
      this.value = value;
    }
  }
  ```
* Kode: Test Data Class
  ```TSX
  import { Data } from '../src/simple';

  describe('Tanpa Generic', () => {
    it('should can accept number', () => {
      const data = new Data(123);
      data.value = 'Sandy';
      data.value = true;

      console.info(data);
    });
  });
  ```