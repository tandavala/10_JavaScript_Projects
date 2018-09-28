$(document).ready(function(){
   var fahrenheit, celsius;
   var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather";
   var apiKey = "b53263de161a4f9910603a87dffb0592";
   getLatLong();

   /* function to get user's location */
   function getLatLong(){
     $.ajax({
       url: "https://geoip-db.com/json/",
       type: 'GET',
       dataType: 'json',
       success: function(data){
         var lat= data.latitude;
         var long = data.longitude;
         $('.city').html(data.city);
         $('.country').html(data.country_name);
         weatherApiUrl += "?lat="+lat+"&lon="+long+"&APPID="+apiKey+"&units=metric";
         getWeatherData();
       },
       error: function(err){
         alert('Ops something went wrong, Please try again');
         console.log(err);
       }
     });
   }
   /* function to get weather data from user location */
   function getWeatherData(){
     $.ajax({
        url: weatherApiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data){
          var tempratura=data.main.temp;
          celsius=tempratura;
          fahrenheit=celsius*1.8+32;
          var icon=data.weather[0].icon;
          var weatherDetail=data.weather[0].main+", "+data.weather[0].description;
          $('.weatherDetail').html(weatherDetail);
          $('.iconpic>img').attr('src','http://openweathermap.org/img/w/'+icon+'.png');
          $('.temp').html(tempratura+"&#8451;"); //update the temprature
        }
     });
   }
});
