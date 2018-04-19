const orangeTree = require ("./03_orange_tree.js")

function getRandomIntUpTo(number){
  return (Math.floor(Math.random()*number))+1;
}

describe("Check seed function is working properly", function() {

  test("Check tree is alive when we seed it", function() {
    const result = orangeTree.seed();
    expect(orangeTree.alive).toEqual(true);
  });

  test("Check tree age is 0 when we seed it", function() {
    const result = orangeTree.seed();
    expect(orangeTree.age).toEqual(0);
  });

  test("Check tree height is 0 when we seed it", function() {
    const result = orangeTree.seed();
    expect(orangeTree.height).toEqual(0);
  });

  test("Check tree oranges is 0 when we seed it", function() {
    const result = orangeTree.seed();
    expect(orangeTree.oranges).toEqual(0);
  });

});


describe("Check the pick orange function", function() {

  test("check the pick orange function", function(){
    orangeTree.oranges = 0;
    let result = orangeTree.pickAnOrange();
    expect(result).toBe(false);
    orangeTree.oranges = 1;
    result = orangeTree.pickAnOrange();
    expect(result).toBe(true);
    orangeTree.oranges = 12;
    expect(result).toBe(true);

  });
});


describe("Check age one year function", function() {
  test(`check function ageOneYear with age`, function(){
    for(let i=0;i<100;i++){
      expect(orangeTree.age).toEqual(i);
      orangeTree.ageOneYear();
      expect(orangeTree.age).toEqual(i+1);
    }
  });
});


describe("Check height grows normally", function() {

  test(`check function grow at year 9`, function(){
    orangeTree.seed();

    for (let i=0;i<10;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.height).toEqual(235);
  });


  test(`check function grow at year 10`, function(){
    orangeTree.seed();

    for (let i=0;i<11;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.height).toEqual(245);
  });



  test(`check function grow at year 19`, function(){
    orangeTree.seed();

    for (let i=0;i<20;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.height).toEqual(9*25+10*10);
  });


  test(`check function grow at year 20`, function(){
    orangeTree.seed();

    for (let i=0;i<21;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.height).toEqual(9*25+10*10);
  });

});


describe("Check the tree might die one day", function() {

  let randomAgeUpTo49 = getRandomIntUpTo(49);
  let randomAgeUpTo50 = getRandomIntUpTo(50);


  test("Check if the tree is alive untill age 49", function(){
    orangeTree.seed();
    for (let i=0;i<50;i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.alive).toBe(true);
  });



  test(`Check if the tree is alive at random age ${randomAgeUpTo49}`, function(){
    orangeTree.seed();
    for (let i=0;i<randomAgeUpTo49;i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.alive).toBe(true);
  });



  test("Check if the tree is dead after 100", function(){
    orangeTree.seed();
    for (let i=0;i<=101;i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.alive).toBe(false);
  });



});





describe("Check the orange production is OK", function() {

  test("Tree should not produce oranges before age 5", function(){
    orangeTree.seed();
    for (let i=0;i<4;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.oranges).toEqual(0);
  });


  test("Tree should produce 10 oranges between age 5 and 10", function(){
    orangeTree.seed();
    for (let i=0;i<9;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.oranges).toEqual(10);
  });

  test("Tree should produce 20 oranges at age 15", function(){
    orangeTree.seed();
    for (let i=0;i<15;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.oranges).toEqual(20);
  });

  test("Tree should produce 10 oranges between age 5 and 10", function(){
    orangeTree.seed();
    for (let i=0;i<15;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.oranges).toEqual(20);
  });

  test("Tree should produce 5 oranges between age 20 and 40", function(){
    orangeTree.seed();
    for (let i=0;i<30;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.oranges).toEqual(5);
  });

  test("Tree should produce no orange after 40", function(){
    orangeTree.seed();
    for (let i=0;i<50;i++){
      orangeTree.ageOneYear();
    }

    expect(orangeTree.oranges).toEqual(0);
  });



});
