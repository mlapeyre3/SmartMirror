(function() {

	var DigitalClock = {

		init: function() {
			moment.locale(lang);
			setInterval(this.refreshClock.bind(this), 1000);
		},

		refreshClock: function() {
			this.now = moment();//.format("dddd D MMMM YYYY, k:mm:ss");
			this.date = this.now.format("dddd D MMMM YYYY");
			this.time = this.now.format("k:mm:ss");
			this.displayDate();
			this.displayClock();
		},

		displayDate: function() {
			document.getElementById("date").innerHTML =
				"<b>" + this.date + "</b>";
		},

		displayClock: function() {
			$("#digitalClock").html(this.time);


			// Draw the current time table
		document.getElementById("digitalClock").innerHTML = 																			// Ugly table here, but it gets the job done
		    '<table>' +
			    '<tr>' +
				    '<td class="time"' +								// Apply the color
					    'rowspan=4 cellpadding=0>' + "h:mm" +'</td>' +							// Time cell is four rows tall
					'<td> </td>' + 																	// Empty cell next to it
				'</tr><tr>' +
					'<td class="sec">'   + this.now.format('ss') + '</td>' +								// Seconds cell is pushed down a bit to line up with the top of the time
				'<tr>' +
				'</tr><tr><td></td>' +
				'</tr>' +
			'</table>';

			document.getElementById("digitalClock").innerHTML = "<b>" + this.time + "</b>";


		},
	}

	DigitalClock.init();

})();