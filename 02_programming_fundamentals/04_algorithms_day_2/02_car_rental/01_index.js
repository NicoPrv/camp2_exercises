const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(aDriver){
  const boolCanDrive=(aDriver.driverLicense==="B")
  && (new Date().getFullYear()-aDriver.licenseIssued >= 2)
  &&(aDriver.numberOfAccident===0 || aDriver.bonus >=0.7);

  return boolCanDrive;

}

console.log(canRentACar(driver));




// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
