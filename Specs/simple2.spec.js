var using = require('jasmine-data-provider');

describe("A suite with some shared setup", function () {
    var objectDataProvider = {
        'First one is awesome!': { a: 6, b: 3, expected: 9 },
        'Second test should fail': { a: 8, b: 1, expected: 10 }
    };
    using(objectDataProvider, function (data, description) {
        it(description, function () {
            var result = data.a + data.b;
            expect(result).toEqual(data.expected);
        });
    });
});