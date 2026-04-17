const Person = require('./06-person');

  describe('Test for Person', () => {

  let person;
  beforeEach(() => {
    person = new Person('Ismael', 78, 1.73);
  });
    test('should return down', () => {

      person.weight = 45;
      const imc = person.calcIMC();
      expect(imc).toBe('down');

    });

    test('should return up', () => {

      person.weight = 120;
      const imc = person.calcIMC();
      expect(imc).toBe('overweight level 3');
  });
});

