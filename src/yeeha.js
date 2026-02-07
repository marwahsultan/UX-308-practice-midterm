export function yeeha(number){
    if(number % 3 == 0 && number % 7 == 0){
        return "Yee Ha";
    }
    else if (number % 3 == 0){
        return "Yee";
    }
    else if(number % 7 == 0){
        return "ha"
    }
    else{
        return "Nada";
    }
}

if(import.meta.main){
    console.log(`yeeha(14) returns ${yeeha(14)}`);
}