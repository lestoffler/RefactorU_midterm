$(document).ready(function() {

	//=====================================
	//User Information
	//=====================================

	//Validate user name and email	

	$('.form-container').on('click', '.submit', function(event) {
		event.preventDefault();
		var name = $('#input-name').val();
		var email = $('#input-email').val();


		var checkName = (function() {
			var name = $('#input-name').val();
			if (name.length < 4) {
				alert("Please enter a valid name.");
				return false;
			}
			if (name.indexOf(' ') === -1) {
				alert("Please enter a valid name.");
				return false;
			} else {
				return true;
			}
		})();

		var checkEmail = (function() {
			var email = $('#input-email').val();
			if (email.indexOf('.') === -1) {
				alert('Please provide a valid email address');
				return false;
			} else if (email.indexOf('@') === -1) {
				alert('Please provide a valid email address');
				return false;
			} else {
				return true;
			}
		})();

		//Appending the name and email to RSVP list	
		var eraseEntries = (function() {
			if ((checkName === true) && (checkEmail === true)) {
				var $listOfNames = ('<div class="list"><p class="name"></p><a href="mailto:' + email + '"><p class="email"></p></a></div>');
				$('input').val('');
				$('.name-email-list').append($listOfNames);
				$('.name').last().append(name);
				$('.email').last().append(email);
			} else {
				$('#input-name').val('');
				$('#input-email').val('');
			}
		})();

	});

	// // 	// //=====================================
	// // 	// // Survey Information
	// // 	// //=====================================


	//Survey responses are pushed into an array and that array is sent to the database
	var Trip = function(date, cruise) {
		this.date = date;
		this.cruise = cruise;	
	};

		$('.survey-form').on('click', '.submit-results', function(event) {
			event.preventDefault();

			var responses = [];	

			var d = $('#dates').find('input[type=radio]').val();
			var c = $('#cruises').find('input[type=radio]').val();

			var trip = new Trip(d, c);

			responses.push(trip);


			console.log(responses[0]);
		});

});

