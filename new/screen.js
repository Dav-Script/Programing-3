/* Create lists */
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let waterArr = []
let rockArr = []


/* class Screen */
class Screen {

  // constructor
  constructor(side){
    this.side = side
  }

  // generate function
  generate(matLen, gr, grEat, pr, wa, rock) {
    let matrix = []
    
    /* Create Matrix */
    for (let i = 0; i < matLen; i++) {
      matrix[i] = []
      for (let j = 0; j < matLen; j++){matrix[i][j] = 0}
    }

    /* Grass spawn */
    for (let i = 0; i < gr; i++) {
      let x = Math.floor(Math.random()*matLen)
      let y = Math.floor(Math.random()*matLen)
      if(matrix[y][x] == 0){matrix[y][x] = 1}
    }
    
    /* GrassEater Spawn */
    for (let i = 0; i < grEat; i++) {
      let x = Math.floor(Math.random()*matLen)
      let y = Math.floor(Math.random()*matLen)
      // console.log(x,y);
      if(matrix[y][x] == 0){matrix[y][x] = 2}
    }
    
    /* Predator Spawn */
    for (let i = 0; i < pr; i++) {
      let x = Math.floor(Math.random()*matLen)
      let y = Math.floor(Math.random()*matLen)
      // console.log(x,y);
      if(matrix[y][x] == 0){matrix[y][x] = 3}
    }
  
    /* Water Spawn */
    for (let i = 0; i < wa; i++) {
      let x = Math.floor(Math.random()*matLen)
      let y = Math.floor(Math.random()*matLen)
      // console.log(x,y);
      if(matrix[y][x] == 0){matrix[y][x] = 4}
    }

    /* Rock  Spawn */
    for (let i = 0; i < rock; i++) {
      let x = Math.floor(Math.random()*matLen)
      let y = Math.floor(Math.random()*matLen)
      // console.log(x,y);
      if(matrix[y][x] == 0){matrix[y][x] = 5}
    }

    /* MATRIX */  
    return matrix
  }


  // object_color function
  object_color(){
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
          
      /* Colors */
      switch(matrix[y][x]){
        case 1: fill('green'); break;
        case 2: fill('yellow'); break;
        case 3: fill('red'); break;
        case 4: fill('#0d9cbf'); break;
        case 5: fill('gray'); break;
        default: fill('#acac'); break;
      }

      /* Make block */
      rect(x * this.side, y * this.side, this.side, this.side);
      }
    }
  }

  // objects_actions function
  objects_actions(){
    
    /* Grass */
    for(let a in grassArr){grassArr[a].mul(1);} // Mul
    
    /* GrassEater */
    for(let b in grassEaterArr){grassEaterArr[b].eat(1);} // eat Grass
    
    /* Predator */
    for(let c in predatorArr){predatorArr[c].eat(2);} // eat GrassEater

    /* Water */
    for(let d in waterArr){waterArr[d].mul(0.1);} // Mul

  }

  // create_canvas function
  create_canvas(){
    frameRate(5);
    createCanvas(matrix[0].length * this.side, matrix.length * this.side);
    background('#acac');
  }

  // create_objects function
  create_objects(){
    for (let y = 0; y < matrix.length; y++){
      for (let x = 0; x < matrix[y].length; x++){
          
        /* Create ogjects */
        switch (matrix[y][x]){
          case 1: grassArr.push(new Grass(x, y)); break;
          case 2: grassEaterArr.push(new GrassEater(x, y)); break;
          case 3: predatorArr.push(new Predator(x, y)); break;
          case 4: waterArr.push(new Water(x, y)); break;
          case 5: rockArr.push(new Rock(x, y)); break;
        }
      }
    }
  }

}


/* Call class */
let screen = new Screen(10);