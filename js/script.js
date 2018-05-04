$(function(){
	console.log('DOM loaded - you can have fun');

	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');

	$('#search').click(searchCountries);

	function searchCountries() {
		countriesList.empty();
  		var countryName = $('#country-name').val();
  		if(!countryName.length) countryName = 'Poland';
  		$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  		});
	}
	
	

	function showCountriesList(resp) {
    	countriesList.empty();
    	resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);
    	});
	}
	  
});