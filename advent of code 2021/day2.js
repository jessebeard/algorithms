const text = document.querySelector('pre').innerText;
let depths = text.split("\n")
depths.pop()
depths = depths.map(x => x.split(" ")).map(t => [t[0], parseInt(t[1])])
f = 0, d = 0
for (let i = 0; i < depths.length; i++){
  if (depths[i][0] == "forward"){
	  f += depths[i][1]
	}
	if (depths[i][0] == "up"){
	  d -= depths[i][1]
  }
	if (depths[i][0] == "down"){
		d += depths[i][1]
	}
}
console.log(d*f)

//part 2
const text = document.querySelector('pre').innerText;
let depths = text.split("\n")
depths.pop()
depths = depths.map(x => x.split(" ")).map(t => [t[0], parseInt(t[1])])
f = 0, d = 0, r = 0
for (let i = 0; i < depths.length; i++){
  if (depths[i][0] == "forward"){
      f += depths[i][1]
        d += r * depths[i][1]
    }
    if (depths[i][0] == "up"){
      r -= depths[i][1]
  }
    if (depths[i][0] == "down"){
        r += depths[i][1]
    }
}
console.log(d*f)