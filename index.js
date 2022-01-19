// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(multi) {
        return multi * num;
    }
}

function fareDoubler(double) {
    return double * 2;
}

function fareTripler(triple) {
    return triple * 3;
}

function selectDifferentDrivers(array, func) {
     return func(array);
}