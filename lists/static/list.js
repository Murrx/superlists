jQuery(document).ready(function () {
    $('input').on('focus', function () {
        $('.has-error').hide();
    });
    $('input').on('keypress', function () {
        $('.has-error').hide();
    });
});
