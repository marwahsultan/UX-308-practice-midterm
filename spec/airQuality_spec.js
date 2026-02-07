import { airQuality } from "../src/airQuality.js";

describe("it tests for air quality", function(){
    it("tests for good quality", function(){
        let quality = airQuality(0);
        expect (quality).toBe("Good");
    })
    it("tests for moderate quality", function(){
        let quality = airQuality(100);
        expect (quality).toBe("Moderate");
    })
    it("tests for unhealthy quality", function(){
        let quality = airQuality(150);
        expect (quality).toBe("Unhealthy for Sensitive Groups");
    })
    it ("tests for very unhealthy quality", function(){
        let quality = airQuality(300);
        expect (quality).toBe("Very Unhealthy");
    })
    it ("tests for hazardous quality", function(){
        let quality = airQuality(301);
        expect (quality).toBe("Hazardous");
    })

})