# Generic Promise
* Saat kita menggunakan JavaScript Async, kita akan sering bertemu dengan Promise.
* TypeScript menggunakan generic sebagai representasi untuk tipe data Promise<T>.
* Oleh karena itu, ketika membuat function yang mengembalikan promise, kita bisa menentukan tipe data apa yang akan dikembalikan oleh promise tersebut.
* Kode: Promise Function
  ```TSX
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value === 'Sandy') {
          resolve('Hello ' + value);
        } else {
          reject('Not Found');
        }
      }, 1000);
    });
  }
  ```
* Kode: Menggunakan Promise
  ```TSX
  it('should support promise', () => {
    const result = await fetchData('Sandy');
    expect(result.toUpperCase()).toBe('HELLO SANDY');

    try {
      await fetchData('Budi');
    } catch (e) {
      expect(e).toBe('Not Found');
    }
  });
  ```