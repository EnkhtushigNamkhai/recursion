// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'boolean') {
  	return String(obj);
  } else if (typeof obj === 'number') {
  	return String(obj);
  } else if (obj === null) {
  	return 'null';
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  var result = [];
  var stringify;
  if (Array.isArray(obj)) {
  	//if undefined in an Array, it becomes null
  	for (var i = 0; i < obj.length; i++) {
  		if (obj[i] === undefined || typeof obj[i] === 'function') {
  			result.push('null');
  		} else {
  			result.push(stringifyJSON(obj[i]));
  		}
  	}
  	stringify = "[" + result.join(",") + "]";
  } else if (typeof obj === 'object') {
  	//if the value of the key is undefined, skip over it
  	for (var key in obj) {
  		var keyValuePair = '"' + key + '"' + ":";
  		var value = obj[key];
  		if (typeof value === 'String') {
  			keyValuePair += value;
  		} else if (value === undefined || typeof value === 'function') {
  			continue;
  		} else {
  			keyValuePair += stringifyJSON(value);
  		}
  		result.push(keyValuePair);
  		//result will be a list of strings of key: value
  	}
  	stringify = "{" + result.join(",") + "}"
  }
  return stringify;
};
