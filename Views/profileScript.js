document.getElementById('editProfileButton').addEventListener('click', function() {
    var editElements = document.getElementsByClassName('editInfo');
    for (var i = 0; i < editElements.length; i++) {
        editElements[i].style.display = 'block';
    }
    var elements = document.getElementsByClassName('userInfo');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
});
