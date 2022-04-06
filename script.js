let playerName = prompt("Welcome to GC mini golf! What is your name?");
let playCount = Number( prompt("Hi, "+playerName+"! Would you like to play 3 or 6 holes?") );
let total = 0;
for (let i = 1; i <= playCount; i++) {
    let putts = Number( prompt("How many putts for hole "+i+"? (par: 3)") );
    total += putts;
}
console.log("The total putts of "+playerName+" are: "+total+".");
if (playCount === 3) {
    let par = total - 9;
    if (total > 9) {
        alert("Nice try, "+playerName+"... Your total par was: +"+par+".");
    }
    else {
        if (total < 9) {
            alert("Great job, "+playerName+"! Your total par was: "+par+".");
        }
        else{
            alert("Good game, "+playerName+". Your total par was: 0.");
        }
    }
} else if (playCount === 6) {
    let par = total - 18;
    if (total > 18) {
        alert("Nice try, "+playerName+"... Your total par was: +"+par+".");
    }
    else {
        if (total < 18) {
            alert("Great job, "+playerName+"! Your total par was: "+par+".");
        }
        else{
            alert("Good game, "+playerName+". Your total par was: 0.");
        }
    }
}