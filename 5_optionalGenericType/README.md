# Optional Generic Type
* Saat kita menggunakan generic type di class, lalu kita menggunakan generic type tersebut di constructor, kita tidak wajib menyebutkan tipe generic nya.
* TypeScript bisa secara otomatis mendeteksi tipe yang kita gunakan pada parameter constructor.
* Namun jika kita tidak menggunakan tipe tersebut pada constructor, maka TypeScript tidak bisa menggunakan secara otomatis.
* Kode: Optional Generic Type
  ```TSX
  it('should optional type', () => {
    const entry = new Entry(1, 'Hello');
    expect(entry.key).toBe(1);
    expect(entry.value.toUpperCase()).toBe('HELLO');
  });
  ```
* Kode: Generic Class Tanpa Constructor Parameter
  ```TSX
  class SimpleGeneric<T> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }
  ```
* Kode: Menggunakan Generic Class
  ```TSX
  it('should create simple generic', () => {
    const simple = new SimpleGeneric();
    simple.setValue('Sandy');
    expect(simple.getValue()!.toUpperCase()).toBe('SANDY');
  });
  ```