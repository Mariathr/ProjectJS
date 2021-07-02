let statik =  new Attaque("statik",10);
let paratonnerre = new Attaque("paratonnerre",25);
let adaptabilite = new Attaque("adaptabilite",9);
let anticipation = new Attaque("anticipation",18);
let Pikachu = new Pokemon("Pikachu",25,"électrique","40 cm","6 kilos",82,statik,paratonnerre)
let Evoli = new Pokemon("Evoli",133,"normal"," 30 cm","6,5  kilos",70,adaptabilite,anticipation)



fight(Evoli,Pikachu);
