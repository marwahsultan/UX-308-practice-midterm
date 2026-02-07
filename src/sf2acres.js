export function sf2acres(squareFeet){
    //processing
    let acre = squareFeet / 43560;
    return (acre);
}

if (import.meta.main){
    console.log(`sf2acres(43560) returns ${sf2acres(43560)}`);
}