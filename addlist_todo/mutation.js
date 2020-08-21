var elList, addLink, newEl, newText, counter, listItems; // Declare variables

elList  = document.getElementById('list');               // Get list
addLink = document.querySelector('a');                   // Get add item button
counter = document.getElementById('counter');            // Get item counter

var addList = document.getElementById('addlist');        // 코드 추가

function addItem(e) {                                    // Declare function
  e.preventDefault();                                    // Prevent link action
  newEl = document.createElement('li');                  // New <li> element
  addListItem = addList.value;
  newText = document.createTextNode(addListItem);    // New text node
  newEl.appendChild(newText);                            // Add text to <li>
  elList.appendChild(newEl);                             // Add <li> to list
  addList.value = "";                                    // 코드 추가
  addList.focus();                                       // 코드 추가
}

function updateCount() {                                 // Declare function
  listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
  counter.innerHTML = listItems;                         // Update counter
}

addLink.addEventListener('click', addItem, false);       // Click on button
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM updated
window.addEventListener('load', addList.focus());        // 코드 추가