export default class Game {
    constructor(canvas, assetes, input){
        this.canvas = canvas;
        this.assetes = assetes;
        this.input = input;
        this.cenas = new Map();
        this.cena = null;
    }
    adicionarCena(chave, cena){
        this.cenas.set(chave, cena);
        cena.game = this;
        cena.canvas = this.canvas;
        cena.assetes = this.assetes;
        cena.input = this.input
    }
}