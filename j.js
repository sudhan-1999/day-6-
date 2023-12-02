// 1)get all countries form asia continent /region filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    let a = "Asia";
    let regin = res.filter((ele)=>ele.region === a);
    console.log(regin);
    /*let coname = regin.map((ele)=>ele.name.common);
    console.log(coname);*/
}

//2)all countries with a population of less than 2 lakhs using filter 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var rs = JSON.parse(request.response);
    console.log(rs);
    let pop = rs.filter((ele)=>ele.population<200000 );
    console.log(pop);
}
//3)print details name ,capital,flag,using foreach 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var re = JSON.parse(request.response);
    console.log(re);
    let nam = re.forEach((ele)=> console.log(ele.name.common ,ele.capital,ele.flags.png ));
}
//4)total population of countries using reeduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var r = JSON.parse(request.response);
    console.log(r);
    let pop = r.reduce((acc,acv)=>acc+acv.population,0);
    
    console.log(pop);
}

