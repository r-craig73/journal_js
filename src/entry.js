export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numOfWords = function() {
  var arr = this.body.split(" ");
  var counter = 0;
  arr.forEach(function() {
    counter += 1;
  });
  return counter;
}

Entry.prototype.numOfVowels = function () {
  var counter = 0;
  var arr = this.body.split("");
  var vowels = /[aeiou]/i;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].match(vowels)) {
      counter++;
    }
  }
  return counter;
};

Entry.prototype.numOfConsonants = function () {
  var counter = 0;
  var arr = this.body.split("");
  var consts = /[bcdfghjklmnpqrstvxzwy]/i;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].match(consts)) {
      counter++;
    }
  }
  return counter;
};

Entry.prototype.getTeaser = function () {
  var words = this.body.split(" ");
  var output = words.splice(0, 8);
  for (var i = 0; i < output.length; i++) {
    if(output[i].indexOf('.') !== -1) {
      output = output.splice(0, i+1);
    }
  }
  return output.join(' ');
}
