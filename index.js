const { match } = require("sinon");

// Code your solution here
function findMatching(drivers, string) {
    const matchingDrivers = drivers.filter(function(driver) {
        return driver.toUpperCase() === string.toUpperCase();
    });
    return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
    const endIndex = string.length;
    const matchingDrivers = drivers.filter(function(driver) {
        console.log(driver.slice(0, endIndex));
        return driver.slice(0, endIndex) === string;
    });
    return matchingDrivers;
}

function matchName(drivers, string) {
    const matchingDrivers = drivers.filter((driver) => {
        return driver.name === string;
    })
    return matchingDrivers;
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']