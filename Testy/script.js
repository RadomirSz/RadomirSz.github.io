class klasa1 {
    constructor(a,b,c) {
        this.imie = a;
        this.nazwisko = b;
        this.wiek = c;

    }
}

const kl = new klasa1("radek", "nowak", 16);
console.log(kl.imie + " " + kl.wiek );
