class Etel{
    #nev;
    #ar;
    #kategoria;
    #osszetevok;

    constructor(nev, ar, kategoria, osszetevok){
        this.#nev = nev;
        this.#ar = ar;
        this.#kategoria = kategoria;
        this.#osszetevok = osszetevok;
    }

    getNev(){
        return this.#nev;
    }
    getAr(){
        return this.#ar;
    }
    getKat(){
        return this.#kategoria;
    }
    getOssz(){
        return this.#osszetevok;
    }

    setNev(){
        this.#nev = nev;
    }
    setAr(){
        this.#ar = ar;
    }
    setX(){
        this.#kategoria = kategoria;
    }
    setX(){
        this.#osszetevok = osszetevok;
    }

    toString(){
        return `Étel: ${this.#nev}, Ára: ${this.#ar}, Összetevők: ${this.#osszetevok}, Kategória: ${this.#kategoria}`;
    }
    
}