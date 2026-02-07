// input cm of snowfall
export function snowRemoval(cm){
    // processing
    let equipment = "";
    if(cm <= 1){
        equipment = "broom";
    }
    else if(cm <= 4){
        equipment = "shovel";
    }
    else if (cm <= 10){
        equipment = "electric snowblower";
    }
    else{
        equipment = "gas snowblower";
    }
    //output
    return(equipment);
}
if(import.meta.main){
    console.log(`for 4 cm of snow the proper equipment is ${snowRemoval(4)}`)
}