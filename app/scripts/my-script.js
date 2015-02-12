define([
        'jquery',
        'jquery-ui',
        'jQuery-switchButton'
    ], function ($) {

    $(function () {
        $("#slider").slider({
            value: 100,
            animate: "fast",
            orientation: "horizontal"
        });
    });

    $("input[type=checkbox]").switchButton({
        on_label: 'Tomorrow',
        off_label: 'Today',
        checked: false,
        width: 50,
        height: 15,
        button_width: 25,
    });

    $("#tabstrip").switchButton({
        on_label: 'TAB',
        off_label: 'STRIP',
        checked: false,
        width: 50,
        height: 15,
        button_width: 25,
    });


    function divClicked() {
        var divHtml = $(this).html();
        var editableText = $("<textarea />");
        editableText.val(divHtml);
        $(this).replaceWith(editableText);
        editableText.focus();
        // setup the blur event for this new textarea
        editableText.blur(editableTextBlurred);
    }

    function editableTextBlurred() {
        var html = $(this).val();
        var viewableText = $("<div>");
        viewableText.html(html);
        $(this).replaceWith(viewableText);
        // setup the click event for this new div
        viewableText.click(divClicked);
    }

    $(document).ready(function () {
        $(".prescription-notes").click(divClicked);
    });
}); //Define function ends..