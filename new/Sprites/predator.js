/* class Predator */
class Predator {

    // constructor 
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8
        this.directions = [];
    }
  
    // getNewCoordinates function 
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
  
    // chooseCell function
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
  
        return found;
    }
  
    // mul function
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
  
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            predatorArr.push(new Predator(newX, newY));
            this.energy = 8
        }
    }
  
    // move function
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }
  
    // eat function
    eat(_object) {
        var emptyCells = this.chooseCell(_object);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY

            if (_object == 2){
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (_object == 4){
                for (var i in anyEaterArr) {
                    if (newX == anyEaterArr[i].x && newY == anyEaterArr[i].y) {
                        anyEaterArr.splice(i, 1);
                        break;
                    }
                }
            }

            
            if(this.energy >= 12){this.mul()}
        } 
        else {this.move()} 
    }
  
    // die function
    die() {
        matrix[this.y][this.x] = 0
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}


