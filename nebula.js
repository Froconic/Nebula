// TODO add a way to automatically count img folder items and add to list of random choices
// TODO integrate into webpage
// TODO Create a way to dynamically look thru img folder and randomly select
var points = []
// The lower the multiplier the less random and more like stars streaking across the sky
// Works better below .1 range
var multiplier, frameCount
var red, orange, yellow, green, blue, purple, saturation, brightness
var red2, orange2, yellow2, green2, blue2, purple2
var hue, sat, bright
var colors1, colors2 = []
var color, color2
// var choice = random(0,6)
// var option = random(1,14)

// todo create function to control mode
//  todo create function to control color
//  todo create function to control speed
// todo create function to control density
// todo play with different shapes
// todo play with thickness
// todo play with this as a scrying interface
// todo play with random choice between plain background and watercolor
// Todo Play with mode changes
// Todo play with alpha range
// TODO add a function to gENERate and choose a random background from the watercolor generator

function preload() {
  roll = Math.floor(random(0, 273))
  console.log(roll)
  // roll = 274
  imgNumber = "img/" + roll + ".png"
  img = loadImage(imgNumber)
  }

function setup() {
  // The below code controls the color more precisely
  colorMode(HSB)
  red = 0
  red2 = 40
  orange = 30
  orange2 = 60
  yellow = 50
  yellow2 = 90
  green = 80
  green2 = 150
  blue = 140
  blue2 = 260
  purple = 250
  purple2 = 300
  colors = [red, orange, yellow, green, blue, purple]
  colors2 = [red2, orange2, yellow2, green2, blue2, purple2]
  saturation = random(100)
  brightness = random(100)
  // color = random(colors)
  // color2 = random(colors2)

  createCanvas(1910, 1070)
  h = hour()
  m = minute()
  s = second()
  time = (h * 100) + (m) + (s * .001)
  image(img, 0, 0, width, height)
  background(img)
  // background(0)
  // frameRate(120)
  // noiseDetail(1)
  angleMode(DEGREES)
  // With current hardware < 200 is better
  var density = 1331
  var space = (width / density) * 1.5
  size = random(1)
  // size = randomGaussian(1, 10)
  // size = noise(10)
  // size = 20

    // Works better below .1 range
  //  larger = less smooth output
  // multiplier = random(100)
  // multiplier = randomGaussian(.000000001, .001)
  // multiplier = random(.0000001, .1)
  multiplier = random(.00000618, .00618)
  // multiplier = .0618
  // multiplier = randomGaussian(.000001, .1)
  // multiplier = random(.000000001, 1)
  // multiplier = randomGaussian(.000000001, 1)
  // randomSeed(5)



  // TODO create function to control randomness
  // Todo create function to control density, space, multiplier and angle mode
  // TODO add a way to choose the shape
  // TODO create a way to randomize based on day, month and year
  //  TODO Monochrome color palette
  // Todo break this into objects


  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var point = createVector(x * (random(-10, 10)), y * (random(-10, 10)))
      // var point = createVector(x * (randomGaussian(0, 10)), y * (randomGaussian(0, 10)))
      points.push(point)
    }
  }

  shuffle(points, true)


  option = random(1, 14)
  option = Math.round(option)
  //  option = 8
  if (option === 1) {
    color1 = red
    color2 = yellow2
  }
  if (option === 2) {
    color1 = orange
    color2 = green2
  }
  if (option === 3) {
    color1 = yellow
    color2 = blue2
  }
  if (option === 4) {
    color1 = blue
    color2 = red2
  }
  if (option === 5) {
    color1 = purple
    color2 = orange2
  }
  if (option === 6) {
    color1 = red
    color2 = orange2
  }
  if (option === 7) {
    color1 = orange
    color2 = yellow2
  }
  if (option === 8) {
    color1 = yellow
    color2 = green2
  }
  if (option === 9) {
    color1 = green
    color2 = blue2
  }
  if (option === 10) {
    color1 = blue
    color2 = purple2
  }
  if (option === 11) {
    color1 = purple
    color2 = red2
  }
  if (option === 12) {
    color1 = orange
    color2 = blue2
  }
  if (option === 13) {
    color1 = red
    color2 = green2
  }
  if (option === 14) {
    color1 = yellow
    color2 = purple2
  }

}

function draw() {
  // translate(width/2, height/2)

  // background(20)
  // multiplier = random(.000001, .1)
  noStroke()
  var mode = "normal"
  if (frameCount * 5 <= frameCount) {
    var max = frameCount
  } else {
    var max = points.length
  }


  // for (var i = 0; i < max; i++) {
  for (var i = 0; i < points.length; i++) {

    // size = random(1,3)
    // size = noise(10)
    // size = randomGaussian(1, 10)

    // TODO Play with map function with new knowledge from code train
    // Color sequences
    // hue = map(points[i].x, 0, width, color1, color2)
    // sat = map(points[i].y, 0, height, 50, 80)
    // bri = map(points[i].y, 0, height, 50, 80)

    // Color picker
    // hue = map(points[i].x, 0, width, 155, 155)
    // sat = map(points[i].y, 0, height, 90, 70)
    // bri = map(points[i].y, 0, height, 90, 60)


    // Black
    hue = map(points[i].x, 0, width, 0, 0)
    sat = map(points[i].y, 0, height, 100, 100)
    bri = map(points[i].y, 0, height, 0, 0)
    // White
    // hue = map(points[i].x, 0, width, 0, 0)
    // sat = map(points[i].y, 0, height, 0, 0)
    // bri = map(points[i].y, 0, height, 100, 100)
    // Grey
    // hue = map(points[i].x, 0, width, 0, 0)
    // sat = map(points[i].y, 0, height, 0, 0)
    // bri = map(points[i].y, 0, height, 0, 100)

    var normalAlpha = map(points[i].x, 0, width, .5, .5)
    // var normalAlpha = map(dist(width, height, points[i].x, points[i].y), 0, width, 0, 1)
    var circleAlpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 200, 255, 0)
    if (mode == "normal") {
      alpha = normalAlpha
    } else if (mode == "circle") {
      alpha = circleAlpha
    }
    // gen = randomGaussian(0, 1)
    gen = random(0, 1)
    gen = gen * .5
    // gen = gen + .1
    // fill(hue, sat, bri, gen)
    fill(hue, sat, bri, alpha)

    var angle = map(noise(points[i].x * multiplier, points[i].y * multiplier, 0), 0, 1, 0, 720)

    points[i].add(createVector(cos(angle), sin(angle)))
    if (mode == "circle") {
      if (dist(width / 2, height / 2, points[i].x, points[i].y) < 200) {
        ellipse(points[i].x, points[i].y, 1)

      }
    }
    if (mode == "normal") {
      // arc(points[i].x, points[i].y, 5, 3, 0, 360)
      ellipse(points[i].x, points[i].y, size, size)
    }
  }
}