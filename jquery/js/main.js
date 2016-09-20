$(function() {

	// index01のデモ
	$('#btn1').click(function(event) {
		var str = $('#text1').val();
		$('#msg').text('you typed:' + str + '.');
	});

	// index02のデモ
	$('#btn2').click(function(event) {
		$.get('data.txt',function(response,status,xhr){
			var ol = $('<ol></ol>');
			var arr = response.split('\n');
			for (var item in arr){
				ol.append('<li>' + arr[item] + '</li>');
			}
			$('#msg02').append(ol);
		})
	});


});
