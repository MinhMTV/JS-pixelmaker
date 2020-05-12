var i;
const pixetab = document.getElementById('pixelCanvas');

pixetab.addEventListener('click', function changeColor(event) {

    let values = getValues();
    if(event.target.nodeName == 'TD') {
         event.target.style.backgroundColor = values[2];
    }
});

function makeGrid(heigth, width) {
    for (i = 0; i < width; ++i) {
        var tr = pixetab.appendChild(document.createElement('tr'));
        for (var c = 0; c < heigth; ++c) {
            var cell = tr.appendChild(document.createElement('td'));
        }
    }
    return pixetab;
}

function getValues() {
    let inputHeight = document.getElementById('inputHeight').value,
        inputWidth = document.getElementById('inputWidth').value,
        inputcolor = document.getElementById("colorPicker").value;
    console.log(inputcolor);
    return [inputHeight, inputWidth, inputcolor]
}

var form = document.getElementById('sizePicker');
form.addEventListener('submit', function createGrid(event) {
    event.preventDefault();
    pixetab.innerHTML = "";
    let values = getValues();
    makeGrid(values[0], values[1], values[2])
});



