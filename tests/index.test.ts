import { Data } from '../src/index';

describe('Tanpa Generic', () => {
  it('should can accept number', () => {
    const data = new Data(123);
    data.value = 'Sandy';
    data.value = true;

    console.log(data);
  });
});
