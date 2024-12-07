# Generic Collection
* Sebelumnya kita pernah menggunakan tipe data Array, dimana Array sebenarnya adalah tipe data generic, oleh karena itu kita bisa menggunakan Array<tipe> ketika membuat Array.
* Selain Array, ada tipe data collection (kumpulan data) yang berupa tipe data generic, yaitu:
* ``` Set<T> ```, yaitu tipe data collection yang berisi data unique dan tidak ada jaminan urutan data
* ``` Map<K, V> yaitu tipe data collection yang berisi data key-value.

## Array<T>
* Generic type Array<T> sebenarnya merupakan representasi dari tipe data array di JavaScript.
* Oleh karena itu, cara penggunaannya sama seperti array di JavaScript.
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global Object/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global Objects/Array)
* Kode: Array<T>
  ```TSX
  it('should support array', () => {
    const array = new Array<string>();
    array.push('Sandy');
    array.push('Dwi');

    expect(array[0].toUpperCase()).toBe('SANDY');
    expect(array[1].toUpperCase()).toBe('DWI');
  });
  ```

## Set<T>
* Generic type Set<T> sebenarnya merupakan representasi dari tipe data Set di JavaScript.
* Oleh karena itu, cara penggunannya sama seperti Set di JavaScript.
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global Objects/Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global Objects/Set)
* Kode: Set<T>
  ```TSX
  it('should support set', () => {
    const set = new Set<string>();
    set.add('Sandy');
    set.add('Dwi');
    set.add('Handoko');
    set.add('Trapsilo');

    expect(set.size).toBe(2);
    expect(set.has('Sandy')).toBe(true);
    expect(set.has('Dwi')).toBe(true);
  });
  ```

## Map<K, V>
* Generic tipe ``` Map<K, V> sebenarnya merupakan representasi dari tipe data Map di JavaScript.
* Oleh karena itu, cara penggunaannya sama seperti Map di JavaScript.
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global Objects/Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global Objects/Map)
* Kode: Map<K, V>
  ```TSX
  it('should support map', () => {
    const map = new Map<string, number>();
    map.set('Sandy', 1);
    map.set('Dwi', 2);

    expect(map.get('Sandy')).toBe(1);
    expect(map.get('Dwi')).toBe(2);
  });
  ```
