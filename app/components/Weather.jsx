var React =require('react');
var WeatherForm =require('WeatherForm');
var WeatherMessage =require('WeatherMessage');
var OpenWeatherMap =require('OpenWeatherMap');

var Weather = React.createClass({

getInitialState:function(){
    return {
        isLoading:false

    };

},

handleSearch: function (location){

debugger;
    this.setState({isLoading:true});
    var that=this;

    OpenWeatherMap.getTemp(location).then( function(temp){
        that.setState({
            location: location,
            temp:temp,
            isLoading:false

        })

    }, function(err) {
       that.setState({isLoading:false});
       alert(err);


    })

},

    render: function() {

        var{isLoading,temp,location} =this.state;

         function renderMessage(){
             if(isLoading){
                 return <h3> Fetching Weather..</h3>
             }else if(temp && location){
                return <WeatherMessage location={location} temp={temp} />
             }
            
         }

        return(
            <div>
            <h2> This is Weather App </h2>
            <WeatherForm  onSearch={this.handleSearch}/> <br />
            {renderMessage()}
            </div>
        )
    }



});

module.exports =Weather;