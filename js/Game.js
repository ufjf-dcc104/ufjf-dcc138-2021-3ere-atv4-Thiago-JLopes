export default class Game {
    constructor(canvas, assetes, input){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.assetes = assetes;
        this.input = input;
        this.cenas = new Map();
        this.cena = null;
    }
    adicionarCena(chave, cena){
        this.cenas.set(chave, cena);
        cena.game = this;
        cena.canvas = this.canvas;
        cena.ctx = this.ctx;
        cena.assetes = this.assetes;
        cena.input = this.input
        if(this.cena === null){
            this.cena = cena;
        }
    }
    selecionaCena(chave){
        if(this.cenas.has(chave)){
            console.log(chave);
            this.parar();
            this.cena = this.cenas.get(chave);
            this.cena.preparar();
            this.iniciar();
        }
    }
    iniciar(){
        this.cena?.iniciar();
    }
    parar(){
        this.cena?.parar();
    }
}