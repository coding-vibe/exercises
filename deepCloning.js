function deepCopy(obj) {
    const objCopy = {};

    for (const key in obj) {
      const value = obj[key];

      if (Array.isArray(value)) {
        objCopy[key] = value.slice();
      } else if (!!value && typeof value === 'object') {
        objCopy[key] = deepCopy(value);
      } else {
        objCopy[key] = value;
      }
    }

    return objCopy;
  };

const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  address: {
    city: 'New York',
    country: 'USA',
    zipCode: '10001'
  },
  isStudent: true,
  subjects: ['Math', 'History', 'English'],
};

console.log(deepCopy(student));
