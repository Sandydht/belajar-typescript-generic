# Generic Constraint
* Secara default, saat menggunakan generic type, kita bisa bebas menggunakan tipe data apapun.
* Namun, kadang kita ingin membatasi jenis tipe data yang diperbolehkan.
* Kita bisa menggunakan perintah ``` extends ``` TipeData pada operator ``` < > ```, yang artinya tipe data yang boleh digunakan hanyalah tipe data TipeData dan turunannya.
* Kode: Employee Inheritance
  ```TSX
  interface Employee {
    id: string;
    name: string;
  }

  interface Manager extends Employee {
    totalEmployee: number;
  }

  interface VP extends Manager {
    totalManager: number;
  }
  ```
* Kode: Generic Constraint
  ```TSX
  class EmployeeData<T extends Employee> {
    constructor(public T) {

    }
  }
  ```
* Kode: Menggunakan Generic Constraint
  ```TSX
  it('should support constraint', async () => {
    const data1 = new EmployeeData<Employee>({
      id: '100',
      name: 'Sandy'
    });

    const data2 = new EmployeeData<Manager>({
      id: '100',
      name: 'Sandy',
      totalEmployee: 10,
    });

    const data3 = new EmployeeData<string>('Sandy');
    const data4 = new EmployeeData<number>(1234);
  });
  ```