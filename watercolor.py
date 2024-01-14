import cairo, sys, argparse, copy, math, random, os

float_gen = lambda a, b: random.uniform(a, b)

# todo Colors must be in 0 -1 range for RGB
# todo Add colors by name with Copilot
# todo play with variables in main function
# todo play with monochrome  and analagous palletes
# TODO Play with the size of the octagons and the number of shapes to scale for larger prints

color1 = (84/255, 220/255, 245/255)
color2 = color1
color3 = (204/255, 104/255, 213/136)
color4 = color3
color5 = (84/255, 220/255, 245/255)
color6 = color5
colors = [ color1, color2, color3, color4, color5, color6 ]

# Color
bg1 = 58/255
bg2 = 68/255
bg3 = 93/255

# White
# bg1 = 255/255
# bg2 = 255/255
# bg3 = 255/255

# Black
# bg1 = 0/255
# bg2 = 0/255
# bg3 = 0/255

randColors = []
for i in range(15):
    randColors.append((float_gen(.4,.8), float_gen(.4,.8), float_gen(.4,.8)))

def octagon(x_point, y_point, length):
  x = x_point
  y= y_point
  diagonal = length / math.sqrt(2)
  
  oct = []
  
  oct.append((x,y))
  
  x += length
  
  oct.append((x, y))

  x += diagonal
  y += diagonal
  oct.append((x, y))

  y += length
  oct.append((x, y))

  x -= diagonal
  y += diagonal
  oct.append((x, y))

  x -= length
  oct.append((x, y))

  x -= diagonal
  y -= diagonal
  oct.append((x, y))

  y -= length
  oct.append((x, y))

  x += diagonal
  y -= diagonal
  oct.append((x, y))

  return oct

def deform(shape, steps, variance):
  for i in range(steps):
    for j in range(len(shape)-1,0,-1):
      midpoint = ((shape[j-1][0] + shape[j][0])/2 + float_gen(-variance, variance), (shape[j-1][1] + shape[j][1])/2 + float_gen(-variance, variance))
      shape.insert(j, midpoint)

  return shape

def main():
  # parser = argparse.ArgumentParser()
  # parser.add_argument("--width", default=8000, type=int)
  # parser.add_argument("--height", default=8000, type=int)
  # parser.add_argument("--initial", default=2222, type=int)
  # parser.add_argument("--deviation", default=1111, type=int)
  # parser.add_argument("--baseforms", default=1, type=int)
  # parser.add_argument("--finalforms", default=5, type=int)
  # parser.add_argument("--minshapes", default=22, type=int)
  # parser.add_argument("--maxshapes", default=33, type=int)
  # parser.add_argument("--shapealpha", default=.1, type=float)
  # args = parser.parse_args()

  parser = argparse.ArgumentParser()
  parser.add_argument("--width", default=1000, type=int)
  parser.add_argument("--height", default=1000, type=int)
  parser.add_argument("--initial", default=120, type=int)
  parser.add_argument("--deviation", default=50, type=int)
  parser.add_argument("--baseforms", default=1, type=int)
  parser.add_argument("--finalforms", default=3, type=int)
  parser.add_argument("--minshapes", default=25, type=int)
  parser.add_argument("--maxshapes", default=50, type=int)
  parser.add_argument("--shapealpha", default=.02, type=float)
  args = parser.parse_args()

  width, height = args.width, args.height
  initial = args.initial
  deviation = args.deviation
  baseforms = args.baseforms
  finalforms = args.finalforms
  minshapes = args.minshapes
  maxshapes = args.maxshapes
  shapealpha = args.shapealpha
  
  canvas = cairo.ImageSurface(cairo.FORMAT_ARGB32, width, height)
  cr = cairo.Context(canvas)
  
  cr.set_source_rgb(bg1,bg2,bg3)
  cr.rectangle(0,0,width,height)
  cr.fill()
  
  cr.set_line_width(1)
  
  # change colors to randColors here if desired
  for p in range(-int(height*.2), int(height*1.2), 60):
    # cr.set_source_rgba(random.choice(colors)[0], random.choice(colors)[1], random.choice(colors)[2], shapealpha)
    cr.set_source_rgba(random.choice(colors)[0], random.choice(colors)[1], random.choice(colors)[2], shapealpha)

    shape = octagon(random.randint(-1000, width+1000), p, random.randint(600,900))
    baseshape = deform(shape, baseforms, initial)

    for j in range(random.randint(minshapes, maxshapes)):
      tempshape = copy.deepcopy(baseshape)
      layer = deform(tempshape, finalforms, deviation)
      
      for i in range(len(layer)):
        cr.line_to(layer[i][0], layer[i][1])
      cr.fill()
    i = 0
    while os.path.exists(f"Nebula/img/{i}.png"):
      i += 1
  file = open(f"Nebula/img/{i}.png", "wb")
  canvas.write_to_png(file)
  file.close()
  print(f"file {i}  created successfully")

if __name__ == "__main__":
    main()
    main()
    main()
    main()
    main()
    main()
    main()
    main()
    main()
    main()
    print("Done!")
