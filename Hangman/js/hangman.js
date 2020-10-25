
function setImage(number) {
    $('#hangman_img').removeAttr("class").addClass("image" + number);
}

function loadWordlist() {
    var word = '';
    $.ajax({
        url: 'assets/wordlist.json'
    })
}