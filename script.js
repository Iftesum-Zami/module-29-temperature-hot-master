var button = document.getElementById('search') ;
var inputValue = document.getElementById('inputValue') ;
var cityName = document.getElementById('cityName');
var temp = document.getElementById('temp');
var description = document.getElementById('description');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=66ca299c813645272b470653970ea17b')
    .then(response => response.json())
    .then(data => {

        var nameValue = data.name ;
        var tempValue = data.main.temp ;
        var descValue = data.weather[0].description ;

        cityName.innerText = nameValue;
        temp.innerText = tempValue;
        description.innerText = descValue;
    }) 
    .catch(error => alert("wrong city name!"))
}) 