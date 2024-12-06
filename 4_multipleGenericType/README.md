# Multiple Generic Type
* Tipe data generic bisa kita tambahkan lebih dari satu, baik itu di class ataupun di function.
* Kita bisa tambahkan pemisah ``` , ``` (koma) di dalam ``` < > ``` jika ingin menambahkan tipe data generic lebih dari satu.
* Kode: Multiple Generic Type
  ```TSX
  class Entry<K, V> {
    constructor(public key: K, public value: V) {

    }
  }

  class Triple<K, V, T> {
    constructor(public first: K, public second: V, public third: T) {

    }
  }
  ```
* Kode: Menggunakan Multiple Generic Type
  ```TSX
  it('should support', () => {
    const entry = new Entry<number, string>(1, 'Hello');
    expect(entry.key).toBe(1);
    expect(entry.value).toBe('Hello');

    const triple = new Triple<number, string, boolean>(1, 'Hello', true);
    expect(triple.first).toBe(1);
    expect(triple.second).toBe('Hello');
    expect(triple.third).toBe(true);
  });
  ```