var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

var fibnumbers = [0, 1]
var colors = []
var scale = 1

CreateColors()
addFibonaccinumber()
draw()

function draw() {

    c.clearRect(0 , 0 , canvas.width , canvas.height)

    c.save()
    c.translate(canvas.width / 2, canvas.height / 2)

    for (var i = 0; i < fibnumbers.length; i++) {

        //draw the rectangle
        c.beginPath()
        c.strokeStyle = "rgba(255,255,255,1)"
        c.lineWidth = 1
        c.fillStyle = colors[i]
        c.rect(0, 0, fibnumbers[i] * scale, fibnumbers[i] * scale)
        c.stroke()
        c.fill()
        c.closePath()
       
        //draw the spiral
        c.save()
        c.beginPath()
        c.strokeStyle = "rgba(255,255,255,1)"
        c.lineWidth = 1
        c.arc(fibnumbers[i] * scale, 0, fibnumbers[i] * scale , -Math.PI, Math.PI/2, true)
        c.stroke()
        c.closePath()
        c.restore()


        //draw fibonacci fibnumbers
        c.save()
        c.translate(fibnumbers[i] * scale / 2, fibnumbers[i] * scale / 2)
        c.rotate(Math.PI/4)
        c.beginPath()
        c.fillStyle =  "rgba(255,255,255,1)"
        c.font = fibnumbers[i] * scale / 6 + "px arial"
        c.textAlign = "center"
        c.textBaseline = "middle"
        c.fillText(fibnumbers[i] ,  0 , 0)
        c.closePath()
        c.restore()

        c.translate(fibnumbers[i] * scale, fibnumbers[i] * scale)
        c.rotate(-Math.PI / 2)


    }


    c.restore()

    scale *= 0.996

    requestAnimationFrame(draw)
}

function addFibonaccinumber() {

    var len = fibnumbers.length
    var newNumber = fibnumbers[len - 2] + fibnumbers[len - 1]
    fibnumbers.push(newNumber)

    colors.push("hsla(" + Math.floor(Math.random() * 360) + ",100%,25%,.3)")

    setTimeout(addFibonaccinumber, 100)
}

function CreateColors() {

    for (var i = 0; i < fibnumbers.length; i++) {

        colors.push("hsla(" + Math.floor(Math.random() * 360) + ",100%,25%,.3)")
    }
}
