
/* Aparecer o nome da imagem selecionada*/
jQuery(function ($) {
	$('input[type="file"]').change(function () {
		if ($(this).val()) {
			var filename = $(this).val();
			$(this).closest('.file-upload').find('.file-name').html(filename);
		}
	});
});

/**/

$('#clicavel').click(function () {
	console.log("Clicked");
});

/**/
