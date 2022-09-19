function resize(len, width, choice) {
    switch (choice) {
        case 1:
            var resizeButton = function () {
                var btn = document.getElementById('btnMy')
                btn.setAttribute('style', `width:${width}px;height:${len}px`)
            }
            return resizeButton;

        case 2:
            var resizeText = function () {
                var txt = document.getElementById('txtVal')
                txt.setAttribute('style', `width:${width}px;height:${len}px`)
            }
            return resizeText;

        default:
            break;
    }
}

function rdBtnChanged() {
    var rdBtn = document.getElementById('rdBtn')
    if (rdBtn.checked) {
        var resizeBtnFnRef = resize(50, 100, 1)
        resizeBtnFnRef();
    }
}

function rdTxtChanged() {
    var rdTxt = document.getElementById('rdTxt')
    if (rdTxt.checked) {
        var resizeTxtFnRef = resize(60, 150, 2)
        resizeTxtFnRef();
    }
}