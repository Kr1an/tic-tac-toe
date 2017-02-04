class TicTacToe {
    constructor() {
        const draw = 'nobody'
        this.row_count = 3;
        this.current = null;
        this.players = ['x', 'o'];
        this.states = [this.players[0], this.players[1], this.draw]
        this.state = null;
        this.numberOfTurns = 0;
        this.numberOfCells = Math.pow(this.row_count, 2)
        this.board = new Array(this.numberOfCells).fill(null);
    }

    getCurrentPlayerSymbol() {
        return this.players[this.numberOfTurns % (this.players.length)];
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.getFieldValue(rowIndex, columnIndex)) {
            this.current = this.getCurrentPlayerSymbol();
            this.setFieldValue(rowIndex, columnIndex, this.current)
            this.numberOfTurns++

            for(var i = 0; i < this.row_count; i++){
                if(this.getFieldValue(i, columnIndex) != this.current)
                    break;
                if(i == this.row_count - 1){
                    this.state = this.current;
                    return this;
                }
            }

            for(var i = 0; i < this.row_count; i++){
                if(this.getFieldValue(rowIndex, i) != this.current)
                    break;
                if(i == this.row_count - 1){
                    this.state = this.current;
                    return this;
                }
            }

            if(rowIndex + columnIndex == this.row_count - 1){
                for(var i = 0; i < this.row_count; i++){
                    if(this.getFieldValue(i, this.row_count-1-i) != this.current)
                        break;
                    if(i == this.row_count - 1){
                        this.state = this.current;
                        return this;
                    }
                }
            }

            if(rowIndex == columnIndex){
                for(var i = 0; i < this.row_count; i++){
                    if(this.getFieldValue(i, i) != this.current)
                        break;
                    if(i == this.row_count-1){
                        this.state = this.current;
                        return this;
                    }
                }
            }



            if(this.numberOfTurns == this.numberOfCells) {
                this.state = this.draw;
                return this;
            }
        }
    }

    isFinished() {
        return this.states.includes(this.state) ? true : false;
    }

    getWinner() {
        return this.players.includes(this.state) ? this.state : null;
    }

    noMoreTurns() {
        return this.numberOfTurns == this.numberOfCells;
    }

    isDraw() {
        return this.state === this.draw;
    }

    setFieldValue(rowIndex, colIndex, value) {
        var position = rowIndex * this.row_count + colIndex;
        this.board[position] = value;
    }

    getFieldValue(rowIndex, colIndex) {
        var position = rowIndex * this.row_count + colIndex;
        return this.board[position];
    }
}

module.exports = TicTacToe;
