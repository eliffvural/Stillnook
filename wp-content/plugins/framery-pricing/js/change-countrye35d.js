jQuery(document).ready(function($) {

	$('#override_language').on('change', function(e) {

		// Get countrycode from the selected option
		var countrycode = $('option:selected', this).val(),
			prod_id     = $('.framery-pricing').attr('id'),
			loading_div = $('.price-loading'),
			price_div   = $('.framery-pricing-container .framery-pricing');

		// Hide old price, show loading animation
		price_div.css('display', 'none');
		loading_div.css('display', 'block');
		
		// Ajax call to get the price
		$.ajax({
			url: ajax_object.ajaxurl,
			type: 'POST',
			data:{ 
				action: 'country_override',
				nonce: ajax_object.nonce,
				product_id: prod_id,
				override_language: countrycode,
			},
			success: function( data ){
				// Hide loading animation and replace price text
				loading_div.css('display', 'none');
				price_div.css('display', 'block');
				price_div.text(data);
			}
		});
		
		// Set first option to show used language, and set it as the selected option to show the used language
		$('option[value=used_language]').text(countrycode);
		this.selectedIndex = 0;
	});

});