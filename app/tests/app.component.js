var reflect = require("reflect-metadata");
var component = require("../app.component");
 
describe("Tests for app/app.component.ts", function() {
    it("Verify default message", function() {
        var appComponent = new component.AppComponent();
        expect(appComponent.message).toBe("16 taps left");
    });
});