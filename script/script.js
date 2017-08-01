'use strict'

//MOBILE TOGGLER
//Toggles the mobile dropdown menu open and closed

document.querySelector('.flexnav__toggler').addEventListener('click', () => {
    document.querySelector('.flexnav__toptab-ul').classList.toggle('mobile-nav-revealer');
    toggleButton();
});


//Changes the toggle button icon between a '+' and an 'x'

const toggleButton = () => {
    let toggle = document.querySelector('.flexnav__toggler').innerHTML
    if (toggle === '+') {
        document.querySelector('.flexnav__toggler').innerHTML = '&times;';
    } else {
        document.querySelector('.flexnav__toggler').innerHTML = '&#43;';
    }
}



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
//Submenu Reset: on click outside navbar.
//
//Closes Mobile view dropdown menu if anywhere outside of the navbar (.flexnav) is clicked.

let flexNavUnorderedList = document.querySelector('.flexnav');

document.addEventListener('click', function (event) {
    let isClickInside = flexNavUnorderedList.contains(event.target);
    if (!isClickInside) {
        document.querySelector('.flexnav__toggler').innerHTML = '&#43;';
        document.querySelector('.flexnav__toptab-ul').classList.remove('mobile-nav-revealer');
    }
});



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//Submenu Reset: on changing browser/screen size.
//
//javaScript Media Query to reset toggle button to a + when screen size enlarges.
//Also it removes the '.mobile-nav-revealer' class from the '.flexnav__toptab-ul'.
//By doing this the state of the submenu and toggle button are 'reset' so it's not left open if someone is e.g. dragging the side of the browser window between small and large width repeatedly while the mobile submenu is open (now it will close automatically on screen resize).

let mq = window.matchMedia('(min-width: 1024px)');

mq.addListener((changed) => {
    if (changed.matches) {
        document.querySelector('.flexnav__toggler').innerHTML = '&#43;';
        document.querySelector('.flexnav__toptab-ul').classList.remove('mobile-nav-revealer');
    }
});



/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
