class Szemely{
    #teljesnev;
    #eletkor;
    #hobbi;

    constructor(teljesnev, eletkor, hobbi){
        this.teljesnev = teljesnev;
        this.#eletkor = eletkor;
        this.#hobbi = hobbi;
    }

    getTeljesnev(){
        return this.#teljesnev;
    }
    getEletkor(){
        return this.#eletkor;
    }
    getHobbi(){
        return this.#hobbi;
    }

    setTeljesnev(){
        this.#teljesnev = teljesnev;
    }
    setEletkor(){
        if(eletkor<0){
            alert("Az életkor nem lehet kisebb nullánál.")
        } else {
            this.#eletkor = eletkor;
        } 
    }
    setHobbi(){
        this.#hobbi = hobbi;
    }
}