import { snowRemoval } from "../src/snowRemoval.js";

describe("testing for proper snow removal", function(){
    it("tests for a shovel", function(){
        expect ("shovel").toBe(snowRemoval(3));
    })
   it("tests for gas snowblower", function(){
        expect ("gas snowblower").toBe(snowRemoval(20));
   })
})