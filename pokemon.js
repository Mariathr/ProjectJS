
class Pokemon {
    constructor(non,num,type, poids,taille,pointsVie,attBase,attSuper){

        this.nom = non;
        this.num = num;
        this.type = type;
        this.poids = poids;
        this.taille = taille;
        this.pointsVie=pointsVie;
        this.pointsPerdu=pointsVie;
        this.attBase=attBase;
        this.attSuper=attSuper;
        this.attaque =function(pokemon){
            let nroAttaque=1;
            if (Math.random()< 0.10){
                nroAttaque = nroAttaque * 2;
                console.log("Critique!!!!! par pokemon .." + pokemon.nom);
            }

            if(pokemon.pointsPerdu/pokemon.pointsVie>0.2){
                pokemon.pointsPerdu -= this.attBase.pointAttaque * nroAttaque;
                console.log(pokemon.nom + "à attaqué Base. Il a fait " + this.attBase.pointAttaque * nroAttaque);
            }
            else{
                pokemon.pointsPerdu -= this.attSuper.pointAttaque * nroAttaque;

                console.log(pokemon.nom + "à attaqué Super. Il a fait " + this.attSuper.pointAttaque * nroAttaque);
            }         
            return pokemon;
        }
    }    
}


function fight(pokemon1, pokemon2){
    let pokemonKo=null, pokemonWinner=null;
    let first, second;
    if (Math.random()> 0.5){
        first =pokemon1;
        second = pokemon2;
    }else{
        first =pokemon2;
        second = pokemon1;
    }

    while(pokemonKo==null){
       if(first.attaque(second).pointsPerdu<=0) {
            pokemonKo=second;
            pokemonWinner=first;
        }else if (second.attaque(first).pointsPerdu<=0){
                pokemonKo=first;
                pokemonWinner=second;
        }
    }
    console.log(pokemonWinner.nom + " à gagne .." + pokemonWinner.pointsPerdu);
   
}


