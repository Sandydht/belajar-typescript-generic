# Generic Parameter Default
* Saat kita menggunakan generic data type, kita bisa menentukan tipe data default jika tidak menyebutkan tipe data.
* Kita bisa gunakan ``` = ``` tipe data di dalam operator ``` < > ```
* Kode: Generic Parameter Default
  ```TSX
  class SimpleGeneric<T: string> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }
  ```
* Kode: Menggunakan Generic Parameter Default
  ```TSX
  it('should create simple generic', () => {
    const simple = new SimpleGeneric();
    simple.setValue('Sandy');
    expect(simple.getValue()!.toUpperCase()).toBe('SANDY');
  });
  ```