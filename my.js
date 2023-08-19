$(document).ready(function() {
    // ...

    $("#searchPriceInput").autocomplete({
        // ...
    });

    $("#filterPriceSelect").change(function() {
        var selectedPrice = $(this).val();
        if (selectedPrice === "all") {
            $("tr").show();
        } else {
            $("tr").hide();
            $('td:contains(' + selectedPrice + ')').parent('tr').addClass('price-match').show();
        }
    });
});

function scrollToItem(itemId) {
    var item = document.getElementById(itemId);
    if (item) {
        item.scrollIntoView({ behavior: 'smooth' });
        item.classList.add('highlighted');
        setTimeout(function() {
            item.classList.remove('highlighted');
        }, 3000);
    }
}
