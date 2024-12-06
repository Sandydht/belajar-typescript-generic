# Generic Function
* Saat kita membuat tipe data generic di class, tipe data tersebut bisa digunakan diseluruh bagian class.
* Namun, kadang kita tidak membuat class, kita hanya membuat function misalnya.
* Generic juga bisa digunakan pada function, kita bisa menggunakan cara yang sama dengan menempatkan tanda ``` < > ``` setelah nama function.
* Kode: Generic Function
  ```TSX
  function create<T>(value: T): T {
    return value;
  }

  it('should support', () => {
    const result = create<string>('Hello');
    expect(result).toBe('Hello');

    const result2 = create<number>(42);
    expect(result2).toBe(42);
  });
  ```