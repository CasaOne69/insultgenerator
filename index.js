let fighters = [" A Fat Gay Cunt", "Homosexual", " Gay"," A Nigger", " A Wanker!", " A Smelly Twat!", " A FaggotSplash", " A Mermaid Chaser", " A Sheep Shagger ", " A Shit Bag", " A Fat Fuck!", "An 🐘", " A bible Basher", " A Muslim"," Adopted", " A Wank Stain", " A Blob!", " A Butt Fucker", " A Rapist", " A Poo Poker"]
let name = ["Nethan", "Neo", "Nate"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let match = Math.floor( Math.random() * 20 )
     let names = Math.floor( Math.random() * 3 )
     stageEl.textContent = name[names] + " Is "
     stageEl.textContent += fighters[match]
     console.log(fighters[match])
})