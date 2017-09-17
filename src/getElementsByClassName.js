// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here

  /*You should use document.body, element.childNodes, and element.classList
	Returns an array-like object of all child elements which have all of the 
	given class names. When called on the document object, the complete document 
	is searched, including the root node. You may also call getElementsByClassName() 
	on any element; it will return only elements which are descendants of the specified 
	root element with the given class names.
  */
  //Returns the <body> or <frameset> node of the current document, or null if no such element exists.
  var result = [];
  var helper = function(node) {
  	if (node.classList.contains(className)) {
  		result.push(node);
  	}
  	
  	var childrenList = node.children;
  	for (var i = 0; i < childrenList.length; i++) {
  		helper(childrenList[i]);
  	}
  	
  }
  helper(document.body);
  return result;
};
