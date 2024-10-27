"use strict";
{
    //nullable types
    const searchName = (name) => {
        if (name) {
            console.log(name);
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    //unknown typeof
    const searchName2 = (name) => {
        if (typeof name === 'string') {
            console.log(name);
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName2(123);
    //never---> when the situation is not return any value or result then never type is used
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("Something went wrong");
}