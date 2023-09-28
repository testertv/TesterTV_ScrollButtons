// ==UserScript==
// @name         TesterTV_ScrollButtons
// @namespace    https://github.com/testertv/
// @version      2023.09.29
// @description  Buttons for quick scrolling in different directions.
// @author       TesterTV
// @match        *://*/*
// ==/UserScript==


(function() {
    'use strict';

    // General variables
        var ButtonsOpacityDefault = '0.05';
        var ButtonsOpacityMouseOver = '1';
        var PositionHorizontal = '10px';
        var ButtonSize = '50px';

    // Check if current window is an iframe
    var isInIframe = window !== window.top;

    // Create the button element
    var button1 = document.createElement('button');
    button1.innerHTML = '⬆️';
    button1.style.position = 'fixed';
    button1.style.right = PositionHorizontal;
    button1.style.top = 'calc(50% - 50px)';
    button1.style.transform = 'translateY(-50%)';
    button1.style.fontSize = ButtonSize;
    button1.style.opacity = ButtonsOpacityDefault;
    button1.style.background = 'transparent';
    button1.style.border = 'none';
    button1.style.outline = 'none';
    button1.style.zIndex = '9996';
    // Hide the button if in an iframe
    if (isInIframe) {
        button1.style.display = 'none';
    }

    document.body.appendChild(button1);

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    // Add event listener to scroll when button is clicked
    button1.addEventListener('click', scrollToTop);

    // Show button1 when mouse cursor is over it
    button1.addEventListener('mouseenter', function() {
        button1.style.opacity = ButtonsOpacityMouseOver;
    });

    // Hide button1 when mouse cursor leaves it
    button1.addEventListener('mouseleave', function() {
        button1.style.opacity = ButtonsOpacityDefault;
    });








    // Create the button element
    var button2 = document.createElement('button');
    button2.innerHTML = '⏺️';
    button2.style.position = 'fixed';
    button2.style.right = PositionHorizontal;
    button2.style.top = '50% ';
    button2.style.transform = 'translateY(-50%)';
    button2.style.fontSize = ButtonSize;
    button2.style.opacity = ButtonsOpacityDefault;
    button2.style.background = 'transparent';
    button2.style.border = 'none';
    button2.style.outline = 'none';
    button2.style.zIndex = '9997';
    // Hide the button if in an iframe
    if (isInIframe) {
        button2.style.display = 'none';
    }

    document.body.appendChild(button2);

    // Function to scroll to the center of the page
    function scrollToCenter() {
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight;
        var centerOffset = (documentHeight - windowHeight) / 2;
        window.scrollTo(0, centerOffset);
    }

    // Add event listener to scroll when button is clicked
    button2.addEventListener('click', scrollToCenter);

    // Show button2 when mouse cursor is over it
    button2.addEventListener('mouseenter', function() {
        button2.style.opacity = ButtonsOpacityMouseOver;
    });

    // Hide button2 when mouse cursor leaves it
    button2.addEventListener('mouseleave', function() {
        button2.style.opacity = ButtonsOpacityDefault;
    });







    // Create the button element
    var button3 = document.createElement('button');
    button3.innerHTML = '⬇️';
    button3.style.position = 'fixed';
    button3.style.right = PositionHorizontal;
    button3.style.top = 'calc(50% + 50px)';
    button3.style.transform = 'translateY(-50%)';
    button3.style.fontSize = ButtonSize;
    button3.style.opacity = ButtonsOpacityDefault;
    button3.style.background = 'transparent';
    button3.style.border = 'none';
    button3.style.outline = 'none';
    button3.style.zIndex = '9998';
    // Hide the button if in an iframe
    if (isInIframe) {
        button3.style.display = 'none';
    }

    document.body.appendChild(button3);

    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Add event listener to scroll when button is clicked
    button3.addEventListener('click', scrollToBottom);

    // Show button3 when mouse cursor is over it
    button3.addEventListener('mouseenter', function() {
        button3.style.opacity = ButtonsOpacityMouseOver;
    });

    // Hide button3 when mouse cursor leaves it
    button3.addEventListener('mouseleave', function() {
        button3.style.opacity = ButtonsOpacityDefault;
    });





        // Create the button element
    var button4 = document.createElement('button');
    button4.innerHTML = '⬆️';
    button4.style.position = 'fixed';
    button4.style.right = PositionHorizontal;
    button4.style.top = 'calc(100% - 20px)';
    button4.style.left = '50%';
    button4.style.transform = 'translateY(-50%)';
    button4.style.fontSize = ButtonSize;
    button4.style.opacity = ButtonsOpacityDefault;
    button4.style.background = 'transparent';
    button4.style.border = 'none';
    button4.style.outline = 'none';
    button4.style.zIndex = '9999';
    // Hide the button if in an iframe
    if (isInIframe) {
        button4.style.display = 'none';
    }

    document.body.appendChild(button4);

    // Function to scroll to the top of the page
    function scrollToTop2() {
        window.scrollTo(0, 0);
    }

    // Add event listener to scroll when button is clicked
    button4.addEventListener('click', scrollToTop2);

    // Show button4 when mouse cursor is over it
    button4.addEventListener('mouseenter', function() {
        button4.style.opacity = ButtonsOpacityMouseOver;
    });

    // Hide button4 when mouse cursor leaves it
    button4.addEventListener('mouseleave', function() {
        button4.style.opacity = ButtonsOpacityDefault;
    });
})();