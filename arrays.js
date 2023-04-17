var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all"); //https://restcountries.com/v2/all
request.send();
request.onload = function(){
    var result = JSON .parse(request.response);
    console.log(result);
    //Q.1 Get all the countries from the Asia continent /region using the Filter function

    var countries = result.filter((ele) => ele.region == "Asia") 
    console.log(countries);

    //Q.2 Get all the countries with a population of less than 2 lakhs using Filter function

    var population = result.filter((ele) => ele.population < 100000);
    console.log(population);

    // Q.5 Print the country which uses US Dollars as currency.
    var country = result.filter((item) => item?.currencies?.USD?.name === "United States dollar");
    console.log(country);

    //Q.4 Print the total population of countries using reduce function

    var population = result.reduce(function (acc,item){
        return (acc + item.population)
    },0);
    console.log(population);

    // Q.3 Print the following details name, capital, flag using forEach function

    result.forEach((element) =>{
        console.log("Country name :",element.name, "Capital :",element.capital,"flag :", element.flag);
    })

}
