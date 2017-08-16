function log() {
  console.log.apply(console,arguments)
}

function random(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min)
}

var a = 1
document.onreadystatechange = function() {
  var loading = document.getElementById('loading')
  var line = document.getElementById('loading-line')
  var num = document.getElementById('num')
  log(document.readyState)

  if(document.readyState!='complete') {
    line.className+= " " + "loading-interactive"

  function onprogress() {
    var timeout = random(1,5)
    var timer = setTimeout(function() {
      if(num.innerHTML>=100) {
        num.innerHTML= '99'
        clearTimeout(timer)
        return
      }
      num.innerHTML = a++
      onprogress()
    },timeout)
  }
  onprogress()
}
  if(document.readyState=='complete') {
    line.className+=  " " + "loading-completed"
    loading.style.display = 'none'
    num.innerHTML= '100'
    setTimeout(function() {
      document.getElementById('loading-num').style.display = 'none'
    },100)
  }
}
