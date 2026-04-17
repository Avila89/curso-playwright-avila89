describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  // afterAll es lo mismo pero después XD.
  afterAll(() => {
    console.log('afterAll');
    // down db
  });
  // beforeEach corre antes de cada caso de prueba hasta el último.
  beforeEach(() => {
    console.log(beforeEach);
  });
  // afterEach es lo mismo pero después XD.
  afterEach(() => {
    console.log(afterEach);
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1+1).toBe(2);
    });
  test('case 2', () => {
    console.log('case 2');
    expect(1+3).toBe(4);
  });
});
