var inputs = document.getElementsByTagName('input')

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i]

  if (input.type == 'text') {
    inputs[i].setAttribute('x-webkit-speech', 'speech')
  }
}
