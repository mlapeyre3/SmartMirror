(function() {

	var WeatherCanvas = {

		init: function() {
			this.refreshWeather();
			setInterval(this.refreshWeather.bind(this), 15*60000);
		},

		refreshWeather: function() {
			function getForecastData(callback) {
				$.ajax({
					url: 'https://api.forecast.io/forecast/' + forecastAPIkey + '/' + latitude + ',' + longitude + '?units=ca',
					data: "",
					dataType: 'json',
					success: callback
				});
			}

			getForecastData(function(data){
				var currently = data.currently;
				var daily = data.daily;
				var hourly = data.hourly;
				displayWeather(currently, daily, hourly);
			});

			function displayWeather(currently, daily, hourly){
				console.log(currently);
				console.log(daily);
				console.log(hourly);

				// Prepare Icons
				var skycons = new Skycons({"color": "white"});

				// Wind and sunrise/sunset elements
				$(".wind").html(Math.round(currently.windSpeed) + "km/h");
				skycons.add("weatherIconWind", "wind");


				// Temperature elements
				$(".temp").html(Math.round(currently.temperature) + "°C");
				skycons.add("weatherIconCurrent", currently.icon);

				// Start skycons
				skycons.play();
			}
		},
	}

	WeatherCanvas.init();

})();