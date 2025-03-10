const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const jsonFirst=JSON.stringify(person);
  const convertObj=JSON.parse(jsonFirst);