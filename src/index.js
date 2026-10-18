let pokemonName = "Dialga";
let pokemonLevel = 9235;
let pokemonRank;

switch(true){
    case pokemonLevel < 0:
        pokemonRank = "Invalid rank";
        break;

    case pokemonLevel >= 0 && pokemonLevel <= 1000:
        pokemonRank = "Bronze";
        break;

    case pokemonLevel >= 1001 && pokemonLevel <= 2000:
        pokemonRank = "Iron";
        break;

    case pokemonLevel >= 2001 && pokemonLevel <= 5000:
        pokemonRank = "Silver";
        break; 

    case pokemonLevel >= 5001 && pokemonLevel <= 7000:
        pokemonRank = "Gold";
        break;

    case pokemonLevel >= 7001 && pokemonLevel <= 8000:
        pokemonRank = "Platinum";
        break;

    case pokemonLevel >= 8001 && pokemonLevel <= 9000:
        pokemonRank = "Radiant";
        break;

    case pokemonLevel >= 9001 && pokemonLevel <= 10000:
        pokemonRank = "Ascended";
        break;

    case pokemonLevel >= 10001:
        pokemonRank = "Immortal";
        break;

    }


console.log("Hero named " + pokemonName + " is " + pokemonRank + "!");

