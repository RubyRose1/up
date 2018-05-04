function toogle(id) {
    var choose = document.getElementById('choose');
    choose.classList.add('animate__choose');

    var tab = document.getElementById(id);
    tab.classList.add('active__tab');

    var type = document.getElementById('type');
    type.classList.add('animate__type');
}

function toogleMenu(id, arrow) {

    var choose = document.getElementById(id);

    if (choose.classList.contains('animate__mobileOpen')) {
        choose.classList.add('animate__mobileClose');
        choose.classList.remove('animate__mobileOpen');
    } else {
        choose.classList.add('animate__mobileOpen');
        choose.classList.remove('animate__mobileClose');
    }

    var arrw = document.getElementById(arrow);

    if (arrw.classList.contains('arrow__open')) {
        arrw.classList.remove('arrow__open');
    } else {
        arrw.classList.add('arrow__open');
    }

    var bgrd = document.getElementById('choose');

    if (bgrd.classList.contains('animate__toogleBg')) {
        bgrd.classList.remove('animate__toogleBg');
    } else {
        bgrd.classList.add('animate__toogleBg');
    }
}

