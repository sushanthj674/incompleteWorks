export const areEqual = (value1, value2) => {
  if (typeof (value1) !== 'object' || typeof (value2) !== 'object') {
    return value1 === value2 || Object.is(value1, value2);
  }

  const object1Keys = Object.keys(value1);
  const object2Keys = Object.keys(value2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  return object1Keys.every((key) => areEqual(value1[key], value2[key]));
};
