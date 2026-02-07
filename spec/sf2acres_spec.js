import { sf2acres } from "../src/sf2acres.js";

describe("it converts square feet to acres", function(){
    it("testing conversion", function(){
        let area = sf2acres(43560);
        expect (area).toBe(1);
    })
})