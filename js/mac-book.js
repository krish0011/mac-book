
function getPreviousValue(extraItems, primaryTotal, finalTotal, extraItemPrice) {
    const updateValueText = document.getElementById(extraItems);
    const updateValue = updateValueText.innerText;
    updateValueText.innerText = parseInt(updateValue) + extraItemPrice;

    const totalPriceText = document.getElementById(primaryTotal);
    const totalPrice = totalPriceText.innerText;
    totalPriceText.innerText = 1299 + parseInt(updateValueText.innerText);

    const grandTotalText = document.getElementById(finalTotal);
    const grandTotal = grandTotalText.innerText;
    grandTotalText.innerText = 1299 + parseInt(updateValueText.innerText);
}

document.getElementById('btn-8gb').addEventListener('click', function () {
    getPreviousValue('extra-memory', 'total-price', 'grand-total', 0);

});
document.getElementById('btn-16gb').addEventListener('click', function () {
    getPreviousValue('extra-memory', 'total-price', 'grand-total', 100);

});
document.getElementById('btn-256gb').addEventListener('click', function () {
    getPreviousValue('extra-storage', 'total-price', 'grand-total', 0);

});
document.getElementById('btn-512gb').addEventListener('click', function () {
    getPreviousValue('extra-storage', 'total-price', 'grand-total', 150);

});
document.getElementById('btn-1tb').addEventListener('click', function () {
    getPreviousValue('extra-storage', 'total-price', 'grand-total', 225);

});
