const person1 = {
  name: 'Rahul',
  age: null,
  studies: 'computer science',
  place: 'Pune',
  hobbies: ['playing chess', 'gardening '],
  weekEnd: ['trips'],
  employment: {
    occupation: 'software engineer',
    isCurrentlyEmployed: true
  },
  hadCar: true,
  pets: [
    {
      name: 'Max',
      animalType: 'dog',
      breed: 'golden retriever',
      age: 4,
      isFullyVaccinated: true,
      favoriteActivities: ['playing']
    }
  ]
};

const person2 = {
  name: 'Ananya',
  age: 30,
  place: 'Banglore',
  hobbies: ['cooking'],
  studies: 'computer science',
  employment: {
    occupation: 'graphic design',
    isCurrentlyEmployed: true
  },
  hadCar: false,
  pets: [{
    name: 'Kiwi',
    animalType: 'parrot',
    breed: null,
    favoriteActivities: ['mimicry'],
    isFullyVaccinated: false
  }]
};

const person3 = {
  name: 'Ramesh',
  age: 45,
  place: 'Jaipur',
  hobbies: ['playing chess', 'cooking'],
  weekEnd: ['rose Garden', 'reads historical fiction'],
  employment: {
    occupation: 'business owner',
    isCurrentlyEmployed: true
  },
  hadCar: false,
  pets: [
    {
      name: 'Bella',
      animalType: 'cat',
      age: 3,
      isFullyVaccinated: true,
      breed: 'Persian',
      favoriteActivities: ['lounging']
    },
    {
      name: 'Leo',
      animalType: 'cat',
      age: 3,
      isFullyVaccinated: true,
      breed: 'Persian',
      favoriteActivities: ['lounging']
    }
  ]
};

const person4 = {
  name: 'Kavya',
  age: 28,
  place: 'Chennai',
  hobbies: ['reading fantacy novels', 'binge-watching sci-fi shows'],
  employment: {
    occupation: 'professional dancer',
    isCurrentlyEmployed: false,
  },
  hadCar: false,
  pets: [
    {
      name: 'Snowy',
      age: 2,
      isFullyVaccinated: false,
      favoriteActivities: ['hopping', 'nibbling'],
      breed: null,
      animalType: 'rabbit'
    }
  ]
};

const people = [
  person1, person2, person3, person4
];

const getPet = (person) => person.pets;

// 1. How many individuals are currently employed?
const getNumberOfEmployedPeople = function (people) {
  return people.filter((person) => person.employment.isCurrentlyEmployed).length;
};

// 2. How many people own a car?
const numOfHadCar = function (people) {
  return people.filter((person) => person.hadCar).length;
};

// 3. How many pets are fully vaccinated?
const numOfFullyVacinatedPets = function (people) {
  return people.flatMap(getPet).filter((pet) => pet.isFullyVaccinated).length;
};

// What are the names of all the pets, and what type of animal is each?
const getPetsBreif = function (people) {
  return people.flatMap(getPet).map((pet) => [pet.name, pet.animalType]);
};

// 5. Which cities do the individuals live in?
const getPeopleBreif = function (people) {
  return people.map((person) => [person.name, person.place]);
};

// 6. How many hobbies are shared across the group? What are they?
const getAllHobbies = function (people) {
  return people.flatMap((person) => person.hobbies);
};

// 7. How many pets belong to people who are currently unemployed?
const numberOfpetsOfunemployed = function (people) {
  const unEmployed = people.filter((person) => !person.employment.isCurrentlyEmployed);
  return unEmployed.flatMap(getPet).length;
};

// 8. What is the average age of the individuals mentioned in the passage?
const getAvgAge = function (people) {
  const ages = people.map((person) => person.age);
  return ages.reduce((num1, num2) => num1 + num2) / ages.length;
};

// 9. How many individuals have studied computer science, and how many of them have pets?
const individualsOfcomputerscience = function (people) {
  return people.filter((person) => person.studies === 'computer science').length;
};

// 10. How many individuals own more than one pet?
const getPersonHasMorePets = function (people) {
  return people.filter((person) => person.pets.length > 1).length;
};

// 11. Which pets are associated with specific favorite activities?
const getPetLikes = function (people) {
  const pets = people.flatMap(getPet);
  return pets.map((pet) => [pet.name, pet.favoriteActivities]);
};

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
const petsInCity = function (people, city) {
  const peopleInCity = people.filter((person) => person.place === city);
  return peopleInCity.flatMap(getPet);
};

const petsInBLRAndChennai = function (people) {
  return petsInCity(people, 'Banglore').concat(petsInCity(people, 'Chennai'));
};

// 13. How many vaccinated pets belong to people who do not own a car?
const petsOfNonCarowners = function (people) {
  const noCarPeople = people.filter((person) => !person.hadCar);
  return noCarPeople.flatMap(getPet).filter((pet) => pet.isFullyVaccinated);
};

//15. How many individuals have more than two hobbies?
const getIndividualsHasMoreHobbies = function (people) {
  return people.filter((person) => person.hobbies.length > 1).length;
};

// 17. Which pet is the youngest, and what is its name?

const GetYoungestPet = function (people) {
  const pets = people.flatMap(getPet);
  return pets.reduce((pet1, pet2) => pet1.age > pet2.age ? pet2 : pet1);
};
// 19. How many individuals live in cities starting with the letter "B"?

const individualsInBstartCity = function (people) {
  return people.filter((person) => person.place.startsWith('B'));
};

// 20. Which individuals do not own any pets?

const noPetIndividual = function (people) {
  return people.filter((person) => person.pets.length < 1);
};
