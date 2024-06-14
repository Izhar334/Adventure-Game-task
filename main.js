#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\t\n<<<<<", chalk.greenBright.bold("Welcome To Izhar's ADVENTURE GAME...!"), ">>>>>\t\n");
// class for Hero Character
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
//for enemys
class enemys {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// step 2 Hero object
async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: chalk.yellow.bold("Enter Your Hero Name....>"),
        },
    ]);
    // enemy object
    const { enemyName } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyName",
            choices: ["Farrukh", "Muzammil", "ABCD"],
            message: chalk.greenBright.italic("\t\nEnter The Enemy Name You Want To Fight With....>>\t\n"),
        },
    ]);
    // step 3 battle field
    const hero = new Hero(heroName);
    const enemy = new enemys(enemyName);
    console.log(`${hero.name} v/s ${enemy.name}`);
    // step 4 action
    do {
        const { action } = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                choices: ["Attack", "Defend", "Fight", "Run"],
                message: chalk.bold.redBright("\t\nChose the attack type to perform action\t\n"),
            },
        ]);
        // step 5 result
        switch (action) {
            case "Attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log(`${hero.name} is dead`);
                        return;
                    }
                }
                else {
                    // enemy health is decreasing
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (enemy.health <= 0) {
                        console.log(chalk.greenBright.italic(`${enemy.name} is dead already.... Congratulations You won the Game!`));
                        return;
                    }
                }
                break;
        }
    } while (true);
}
main();
