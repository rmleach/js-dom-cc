// EXAMINE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.all[10].textContent = "hello");
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images)

//  SELECTORS //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASS NAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4'; //Doesn't work

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GET ELEMENT BY TAG NAME ??

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERY SELECTOR ALL //

// var titles = document.querySelectorAll('.title')
// console.log(titles);

// titles[0].textContent = 'Butts'
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4'
// };

// for (var i = 0; i < odd.length; i++) {
//   even[i].style.backgroundColor = '#ccc'
// };

// TRAVERSING THE DOM //

var itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#ccc';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#ccc';
// console.log(itemList.parentElement.parentNode.parentElement);

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //firstChld
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "yo";
// //lastChild
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "yo yo";

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'orange';

// // CREATING DOM ELEMENTS // //

// // Create a div
// var newDiv = document.createElement('div');
// newDiv.className = 'hello'
// newDiv.id = 'hello1'
// newDiv.setAttribute('title', 'Hello Div');

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 =  document.querySelector('header h1')

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// //EVENTS AND EVENT LISTENERS // //
// const button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
// console.log("I clicked your button");
// document.getElementById("header-title").textContent = "changed";
// document.querySelector("#main").style.backgroundColor = "#f4f4f4";
// console.log(e)

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>'

// console.log(e.type);

// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }
const button = document.getElementById("button");
// .addEventListener("click", runEvent);
// .addEventListener('dblclick', runEvent);
// .addEventListener('mousedown', runEvent);
// .addEventListener('mouseup', runEvent);

// const box = document.getElementById('box')
// .addEventListener('mouseenter', runEvent);
// .addEventListener('mouseleave', runEvent);
// .addEventListener('mouseover', runEvent);
// .addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//   console.log('EVENT TYPE: '+e.type)

//   // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY +' </h3>';

//   // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
// }

// INPUT EVENTS //

const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
const select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
// itemInput.addEventListener("input", runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("EVENT TYPE: " + e.type);
//   // console.log(e.target.value);
//   document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
// }



