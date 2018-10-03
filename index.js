function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push (musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push('I Love the Beatles!')
  } while ()
  return array
}