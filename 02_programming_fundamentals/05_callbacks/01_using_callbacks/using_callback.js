const thisIsThePlayer = (callback) => {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
  callback(player);
};

// Write a function sayHello that greets: "Hello, Spartacus". (Where "Spartacus" is the player name)

function sayHello (object) {
  //.log("ça passe");

  console.log("Hello, " + object.name);
  return ("Hello, " + object.name);
}

thisIsThePlayer(sayHello);
