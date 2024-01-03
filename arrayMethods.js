let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.response);
    console.log(asianCountries(data)); 
    console.log(populationLessThan2lakhs(data));
    printingNameCapitalFlag(data);
    console.log(countriesUsingUSD(data));

    //Calculating total population by using reduce function and printing it 
    const totalPopulation = data.reduce((accumulator, currentCountry) => {
        return accumulator + currentCountry['population'];
      }, 0);
    console.log(`Total Population = ${totalPopulation}`);
}
//Getting all the countries from Asia by using filter function
const asianCountries = function(arr){
    return arr.filter((country) => country['continents'][0] === 'Asia');
};

//Getiing all the countries which population is lessthan 2 lakhs by using filter function
const populationLessThan2lakhs = function(arr){
    return arr.filter((country) => country['population'] > 200000);
};

//Printing Name, capital, flag of all the countries as it is by using for each function
const printingNameCapitalFlag = function(arr){
    arr.forEach(country => {
        let name = country['name']['common'];
        console.log(name);
    });
    arr.forEach(country => {
        let capital = country?.['capital'];
        console.log(capital);
    });
    arr.forEach(country => {
        let flag = country['flag'];
        console.log(flag);
    });
};

//Getting all the countries which have cuurency as USD by using filter function
const countriesUsingUSD = function(arr){
    return arr.filter((country) => country['currencies']?.['USD']?.['name'] === 'United States dollar');
};