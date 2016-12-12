/*
We're building a web game where everybody wins and we are all friends forever.
It's simple—you click on one of three boxes to see what nice thing you've won. You always win something nice. Because we love you.

Here's what we have so far. Something's going wrong though. Can you tell what it is?

<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
HTML
The syntax is just fine—the problem is some unexpected behavior.
 */

/*
Answer:
This is a closure problem!
The code should instead be written as follows:
 */

var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
  // for each of our buttons, when the user clicks it...
  document.getElementById('btn-' + btnNum).onclick = function(i) {
  // tell her what she's won!
  	alert(prizes[i]);
  }(btnNum);
}


/*
NOTES:
A closure is a function that accesses a variable "outside" itself.
For example:
var message = 'The British are coming.';
function sayMessage(){
  alert(message); // here we have access to message,
  // even though it's declared outside this function!
}

One useful thing to do with a closure is to create something like an "instance variable" that can change over time and can affect the behavior of a function.

// function for getting the id of a dom element,
// giving it a new, unique id if it doesn't have an id yet
var getUniqueId = (function(){
	var nextGeneratedId = 0;
	return function(element) {
	    if (!element.id) {
	        element.id = 'generated-uid-' + nextGeneratedId;
	        nextGeneratedId++;
	    }
	    return element.id;
	};
})();

We can also use closures to keep variables private to prevent accidental changes in the outside world.

Primitives vs. Objects

btnNum is a number, which is a primitive type in JavaScript.

Primitives are "simple" data types (string, number, boolean, null, and undefined in JavaScript). Everything else is an object in JavaScript (functions, arrays, Date() values, etc).
 */