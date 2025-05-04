// Weapons and Fighters

const fighters = [
    {
        name: 'Freezer',
        power: 8000
    },
    {
        name: 'Vegeta',
        power: 8500
    },
    {
        name: 'Crilin',
        power: 500
    },
    {
        name: 'Mr Satan',
        power: 50
    },
    {
        name: 'Junior',
        power: 6000
    },
    {
        name: 'Goku',
        power: 9001
    },
    {
        name: 'Tensing',
        power: 450
    },
    {
        name: 'Videl',
        power: 300
    },
    {
        name: 'Bulma',
        power: 20
    },
    {
        name: 'C-18',
        power: 7800
    },
    {
        name: 'Gohan',
        power: 8900
    },
    {
        name: 'Trunks',
        power: 1250
    }
];

const weapons = [
    {
        name: "Ventaglio della Musa",
        power: 15
    },
    {
        name: "Scouter",
        power: 30
    },
    {
        name: "Bastone Roshi",
        power: 60
    },
    {
        name: "Fagioli Magici",
        power: 70
    },
    {
        name: "Katana di Yajirobei",
        power: 85
    },
    {
        name: "Spada del Dragone Azzurro",
        power: 115
    },
    {
        name: "Armatura Saiyan",
        power: 145
    },
    {
        name: "Cannone da braccio",
        power: 170
    },
    {
        name: "Nuvola d'oro",
        power: 200
    },
    {
        name: "Bastone Nyoi",
        power: 220
    },
    {
        name: "Spada Z",
        power: 235
    },
    {
        name: "Orecchini Potara",
        power: 250
    }
];
//////////////////////////////////////////////////////////////////////////////////////////

// Milestone 1 Weapon assignation 

for (let i = 0; i < fighters.length; i++) {
    const randomWeaponIndex = Math.floor(Math.random() * weapons.length);

    fighters[i].weapon = weapons[randomWeaponIndex];


    weapons.splice(randomWeaponIndex, 1);
}

console.log(fighters);

//Milestone 2 Training

for (let i = 0; i < fighters.length; i++) {
    const trainingMultiplier = Math.floor(Math.random() * 100) + 1;
    fighters[i].power *= trainingMultiplier;
    fighters[i].power = Math.round(fighters[i].power);

    console.log(`${fighters[i].name}: power level = ${fighters[i].power}`);
}


//Milestone 3 Qualification

const qualifiedFighters = fighters.filter(fighter => fighter.power >= 2000);



//Milestone 4 Fights


//Added a new fighter to even the array
if (qualifiedFighters.length % 2 !== 0) {
    qualifiedFighters.push({ name: "Robot", power: 4000, weapon: null });
}

console.log(qualifiedFighters);


for (let i = 0; i < qualifiedFighters.length - 1; i += 2) {
    const fighter1 = qualifiedFighters[i];
    const fighter2 = qualifiedFighters[i + 1];

    let winner;

    if (fighter1.power >= fighter2.power) {
        winner = fighter1;
    } else {
        winner = fighter2;
    }

    console.log(`${fighter1.name} vs ${fighter2.name} Winner: ${winner.name}`);
}


//Milestone 5 Podium
