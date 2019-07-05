


// data remove to localstorage 

export const removeToLocalStorage = (key = "testItem") => {
    if (localStorage) {
        var getToLocalStorage = localStorage.getItem(key);
        if (getToLocalStorage) {
            localStorage.removeItem(key);
            let removeSuccessToLocalstorage = "remove Success To Localstorage";
            return removeSuccessToLocalstorage;
        }
    } else {
        console.log("Sorry! Your Browser is  Not Web Storage support..");
    }
}





export const setToStore = (key, value) => {
    // window.memoryStorage[key] = value;
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromStore = (key) => {
    let stringData = localStorage.getItem(key);
    if (stringData) {
        let parseData = JSON.parse(stringData);
        return parseData;
    }
}


// const initializeMemoryStore = (key) => {
//     var stringData = localStorage.getItem(key);
//     if (stringData) {
//       //  window.memoryStorage[key] = JSON.parse(stringData);
//     }
// }


// if (localStorage.getItem('hasData')) {
//     initializeMemoryStore('questions');
// } else {

//     setToStore("questions", jsonResponse);
//     localStorage.setItem("hasData", "true");
// }