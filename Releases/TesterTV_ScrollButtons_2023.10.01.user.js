// ==UserScript==
// @name         TesterTV_ScrollButtons
// @namespace    https://github.com/testertv/TesterTV_ScrollButtons
// @version      2023.10.01
// @description  Buttons for quick scrolling in different directions.
// @author       TesterTV
// @match        *://*/*
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==

(function() {

//********************************************************************************************************************
//***                                              Variables 🇻​🇦​🇷                                              ***
//********************************************************************************************************************
    // General variables
    var ButtonsOpacityDefault = '0.05';
    var ButtonsOpacityMouseOver = '1';
    var PositionHorizontalRight = (document.documentElement.clientWidth - 81) + 'px';
	var PositionHorizontalLeft= '15px';
    var ButtonSize = '66px';
    var FontSize = '50px';

    // Check if current window is an iframe
    var isInIframe = window !== window.top;

//********************************************************************************************************************
//***                                                Button ⬆️                                                    ***
//********************************************************************************************************************

    // Create the button element
    var button1 = document.createElement('button');
    button1.innerHTML = '⬆️';
    button1.style.height = ButtonSize;
    button1.style.width = ButtonSize;
    button1.style.fontSize = FontSize;
    button1.style.position = 'fixed';
    button1.style.left = PositionHorizontalRight;
    button1.style.top = 'calc(50% - 60px)';
    button1.style.transform = 'translateY(-50%)';
    button1.style.opacity = ButtonsOpacityDefault;
    button1.style.background = 'transparent';
    button1.style.border = 'none';
    button1.style.outline = 'none';
    button1.style.zIndex = '9996';
    button1.id="button1";

    // Hide the button if in an iframe
    if (isInIframe) {
        button1.style.display = 'none';
    }

    document.body.appendChild(button1);

//********************************************************************************************************************
//***                                     Button - Functionality ⬆️⚙️                                             ***
//********************************************************************************************************************

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

//********************************************************************************************************************
//***                                                Button ⏺️                                                    ***
//********************************************************************************************************************

    // Create the button element
    var button2 = document.createElement('button');
    button2.innerHTML = '⏺️';
    button2.style.height = ButtonSize;
    button2.style.width = ButtonSize;
    button2.style.fontSize = FontSize;
    button2.style.position = 'fixed';
    button2.style.left = PositionHorizontalRight;
    button2.style.top = '50% ';
    button2.style.transform = 'translateY(-50%)';
    button2.style.opacity = ButtonsOpacityDefault;
    button2.style.background = 'transparent';
    button2.style.border = 'none';
    button2.style.outline = 'none';
    button2.style.zIndex = '9997';
    button2.id="button2";

    // Hide the button if in an iframe
    if (isInIframe) {
        button2.style.display = 'none';
    }

    document.body.appendChild(button2);

//********************************************************************************************************************
//***                                     Button - Functionality ⏺️⚙️                                             ***
//********************************************************************************************************************

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

//********************************************************************************************************************
//***                                                Button ⬇️                                                    ***
//********************************************************************************************************************

    // Create the button element
    var button3 = document.createElement('button');
    button3.innerHTML = '⬇️';
    button3.style.height = ButtonSize;
    button3.style.width = ButtonSize;
    button3.style.fontSize = FontSize;
    button3.style.position = 'fixed';
    button3.style.left = PositionHorizontalRight;
    button3.style.top = 'calc(50% + 60px)';
    button3.style.transform = 'translateY(-50%)';
    button3.style.opacity = ButtonsOpacityDefault;
    button3.style.background = 'transparent';
    button3.style.border = 'none';
    button3.style.outline = 'none';
    button3.style.zIndex = '9998';
    button3.id="button3";

    // Hide the button if in an iframe
    if (isInIframe) {
        button3.style.display = 'none';
    }

    document.body.appendChild(button3);

//********************************************************************************************************************
//***                                     Button - Functionality ⬇️⚙️                                             ***
//********************************************************************************************************************

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

//********************************************************************************************************************
//***                                       Load buttons options 🔄                                                ***
//********************************************************************************************************************

    GM.getValue("SideButtonsOption", "").then(function(value) {
		// Check if the script is running in an iframe
		if (window.self !== window.top) {
			// Hide the buttons in iframes
			button1.style.display = 'none';
			button2.style.display = 'none';
			button3.style.display = 'none';
		} else {

			GM.getValue("SideButtonsOption", "").then(function(value) {
				if (value === '1') {
					button1.style.left = PositionHorizontalLeft;
					button2.style.left = PositionHorizontalLeft;
					button3.style.left = PositionHorizontalLeft;
					button1.style.display = 'block';
					button2.style.display = 'block';
					button3.style.display = 'block';
				} else if (value === '2') {
					button1.style.display = 'none';
					button2.style.display = 'none';
					button3.style.display = 'none';
				} else {
					button1.style.left = PositionHorizontalRight;
					button2.style.left = PositionHorizontalRight;
					button3.style.left = PositionHorizontalRight;
					button1.style.display = 'block';
					button2.style.display = 'block';
					button3.style.display = 'block';
				}
			});
		}
    });

//********************************************************************************************************************
//***                                             Bottom button ⬆️                                                 ***
//********************************************************************************************************************

    // Create the button element
    var button4 = document.createElement('button');
    button4.innerHTML = '⬆️';
    button4.style.height = ButtonSize;
    button4.style.width = ButtonSize;
    button4.style.fontSize = FontSize;
    button4.style.position = 'fixed';
    button4.style.left = '50%';
    button4.style.top = 'calc(100% - 40px)';
    button4.style.transform = 'translateY(-50%)';
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

//********************************************************************************************************************
//***                                     Bottom button - Functionality ⬆️⚙️                                       ***
//********************************************************************************************************************

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

//********************************************************************************************************************
//***                                               Options 🎛️                                                     ***
//********************************************************************************************************************

function handleRightClick(event) {
  event.preventDefault(); // Prevent the default right-click context menu

//*************************
//*** DropDownMenu 1  🎚️ ***
//*************************

// Create the dropdown menu
    var dropdown1 = document.createElement('select');
    dropdown1.id = 'dropdown1';
    dropdown1.style.fontSize = '15px';

// Define the options for the dropdown menu
    var options1 = [
        { value: 'option0', text: 'Right' },
        { value: 'option1', text: 'Left' },
        { value: 'option2', text: 'Disable' }
    ];

// Create the option elements and append them to the dropdown menu
options1.forEach(function(option) {
  var optionElement = document.createElement('option');
  optionElement.value = option.value;
  optionElement.text = option.text;
  dropdown1.appendChild(optionElement);
});

// Load/create dropdown1 options
 GM.getValue("SideButtonsOption", "").then(function(value) {
    if (value === '1') {
    dropdown1.selectedIndex = "1";
  } else if (value === '2') {
    dropdown1.selectedIndex = "2";
  } else {
    dropdown1.selectedIndex = "0";
  }
 });

// Add an event listener to save options change
dropdown1.addEventListener('change', function() {
  var selectedValue = dropdown1.value;
  if (selectedValue === 'option0') {

      GM.setValue("SideButtonsOption", "0");

      const button1 = document.getElementById('button1');
      if (button1) {
          button1.style.display = 'block';
          button1.style.left = (document.documentElement.clientWidth - 81) + 'px';
      }
      const button2 = document.getElementById('button2');
      if (button2) {
          button2.style.display = 'block';
          button2.style.left = (document.documentElement.clientWidth - 81) + 'px';
      }
      const button3 = document.getElementById('button3');
      if (button3) {
          button3.style.display = 'block';
          button3.style.left = (document.documentElement.clientWidth - 81) + 'px';
      }

  } else if (selectedValue === 'option1') {

      GM.setValue("SideButtonsOption", "1");

      const button1 = document.getElementById('button1');
      if (button1) {
          button1.style.display = 'block';
          button1.style.left = '15px';
      }
      const button2 = document.getElementById('button2');
      if (button2) {
          button2.style.display = 'block';
          button2.style.left = '15px';
      }
      const button3 = document.getElementById('button3');
      if (button3) {
          button3.style.display = 'block';
          button3.style.left = '15px';
      }

  } else if (selectedValue === 'option2') {

      GM.setValue("SideButtonsOption", "2");

       const button1 = document.getElementById('button1');
       if (button1) {button1.style.display = 'none';}
       const button2 = document.getElementById('button2');
       if (button2) {button2.style.display = 'none';}
       const button3 = document.getElementById('button3');
       if (button3) {button3.style.display = 'none';}
  }

});

//*************************
//*** DropDownMenu 2 🎚️ ***
//*************************

// Create the dropdown menu
    var dropdown2 = document.createElement('select');
    dropdown2.id = 'dropdown2';
    dropdown2.style.fontSize = '15px';

// Define the options for the dropdown menu
    var options2 = [
        { value: 'option4', text: 'Enable' },
        { value: 'option5', text: 'Disable' }
    ];

// Create the option elements and append them to the dropdown menu
options2.forEach(function(option) {
  var optionElement = document.createElement('option');
  optionElement.value = option.value;
  optionElement.text = option.text;
  dropdown2.appendChild(optionElement);
});

//*************************
//***      Labels 🎚️    ***
//*************************

    // Create labels
    var label0 = document.createElement('label');
    label0.innerHTML = 'Options';
    label0.style.color = 'white';
    label0.style.fontWeight = 'bold';
    label0.style.textDecoration = 'underline';
    label0.style.fontSize = '20px';

    var label1 = document.createElement('label');
    label1.innerHTML = 'Side buttons: ';
    label1.style.color = 'white';
    label1.style.fontSize = '15px';

//*************************
//***      Panel 🎚️     ***
//*************************

    // Create the panel
    var panel = document.createElement('div');
    panel.id = 'OptionPanel';
    panel.style.position = 'fixed';
    panel.style.top = '50%';
    panel.style.left = '50%';
    panel.style.transform = 'translate(-50%, -50%)';
    panel.style.backgroundColor = '#303236';
    panel.style.padding = '10px';
    panel.style.border = '1px solid grey';
    panel.style.zIndex = '9999';

    // Append the labels to the panel
    panel.appendChild(label0);
    panel.appendChild(document.createElement('br'));
    panel.appendChild(label1);
    panel.appendChild(dropdown1);

    // Append the panel to the body
    document.body.appendChild(panel);

}

//********************************************************************************************************************
//***                                             Listener event 👂                                                ***
//********************************************************************************************************************

//*************************
//***  Right click 🖱️   ***
//*************************
button1.addEventListener('contextmenu', handleRightClick);
button2.addEventListener('contextmenu', handleRightClick);
button3.addEventListener('contextmenu', handleRightClick);
button4.addEventListener('contextmenu', handleRightClick);

//*************************
//***   Left click 🖱️   ***
//*************************

// Add event listener to hide panel when clicking on the webpage
document.addEventListener('click', function(event) {
  // Check if the clicked element is the panel or its child elements
  var panel = document.getElementById('OptionPanel');
  var clickedElement = event.target;
  if (panel && !panel.contains(clickedElement)) {
    // Remove the panel from the DOM
    document.body.removeChild(panel);
  }
});

})();
