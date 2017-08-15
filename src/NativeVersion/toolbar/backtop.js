function log() {
  console.log.apply(console,arguments)
}

function backTop() {
  var initX = document.body.scrollTop || document.documentElement.scrollTop
  var speed = Math.ceil(initX/5)
  var timer = window.setInterval(function() {
    var x = document.body.scrollTop || document.documentElement.scrollTop
    if(x<=0) {
      clearInterval(timer)
    }
    // window.scrollTo(speed,0)
    // x = x-speed
    document.documentElement.scrollTop=document.body.scrollTop=x-speed
    log(x)
  },20)
}

function toggleBtn(el) {
  var x = document.body.scrollTop || document.documentElement.scrollTop
  // var display = el.style.display
  el.style.display = x>100?'block':'none'
}

window.onload = function() {
  var top = document.getElementById('top')
  window.onscroll = function() {
    toggleBtn(top)
  }
  top.onclick = function() {
    backTop()
  }

}
