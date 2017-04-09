var axios = require('axios')

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=2aff34929facb70f53f8bdf684f1a092&units=metric';


module.exports= {
    
    getTemp: function(location){
        debugger;

        var encodedLocation =encodeURIComponent(location);
        var requestURL=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then( function(res){
            

            return res.data.main.temp;

        }, function(res) {
            throw new Error(res.data.message);

        })

    }
}