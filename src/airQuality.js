export function airQuality(aqi){

    if(aqi <= 50){
        return "Good";
    }
    else if(aqi <= 100){
        return "Moderate";
    }
    else if(aqi <= 150){
        return "Unhealthy for Sensitive Groups";
    }
    else if(aqi <= 300){
        return "Very Unhealthy";
    }
    else{
        return "Hazardous"
    }
}

if (import.meta.main){
    console.log(`airQuality(49) returns ${airQuality(49)}`);
}