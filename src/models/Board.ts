import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";

export class Board {
    cells: Cell[][] = []

    public initCells() {
       for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) //Чёрные ячейки
                } else{
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) //Белые
                }
            }
            this.cells.push(row);
        }
    }
 
    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
           new Pawn(Colors.BLACK, this.getCell(i, 1))
           new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }

    private addKnights() {
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(4, 7))
    }

    private addQueens() {
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(3, 7))
    }

    private addKings() {
        
    }

    private addBishops() {
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
    }

    private addRooks() {
        
    }


    public addFigures() {    
        this.addPawns()
        this.addKnights() 
        this.addQueens() 
        this.addKings() 
        this.addBishops()
        this.addRooks() 
    }
}