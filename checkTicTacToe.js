// lc 1275 / easy / solved in ~15 minutes

var tictactoe = function(moves) {
    let matrix = new Array(3).fill().map(x => new Array(3).fill(4))
    moves.forEach(([x,y], i) => {
      if(i % 2 === 0) matrix[x][y] = 0;
      else matrix[x][y] = 1;
    })
    let rows = matrix.map(x => x.reduce((a,c) => c + a))
    let columns = matrix.reduce( ([c0, c1, c2], c) => [c0 + c[0], c1 + c[1], c2 + c[2]], [0,0,0]);
    let diagonals = [matrix[0][0] + matrix[1][1] + matrix[2][2],
                    matrix[0][2] + matrix[1][1] + matrix[2][0]]
    for (let i = 0; i < 3; i += 1) {
      if (rows[i] === 3 || columns[i] === 3) return "B";
      if (rows[i] === 0 || columns[i] === 0) return "A";
    }
    if (diagonals[0] === 3 || diagonals[1] === 3) return "B";
    if (diagonals[0] === 0 || diagonals[1] === 0) return "A"
    if (moves.length === 9) return "Draw"
    return "Pending"
  };

  //note: fast runtime 
