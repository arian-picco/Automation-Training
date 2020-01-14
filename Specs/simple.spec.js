describe('Test Despegar HomePage', function async() {
    it('First Test', function () {
        // Browse to Home Page
        browser.get('http://www.despegar.com.ar');
        // Get element by className
        var hotelButton = element(by.className("shifu-3-button-circle HOTELS"));
        // Click on element
        hotelButton.click();
        //element(by.className("shifu-3-button-circle FLIGHTS")).click();
        hotelButton.getText().then(function (text) {
            console.log("Texto del boton: " + text);
        });
        // DropDown Options
        var countryDropbox = element(by.id("eva-country"));
        var expectedOption = countryDropbox.element(by.cssContainingText('.select-option', "Colombia"))
        expectedOption.click();
        
        countryDropbox.all(by.className("select-option")).then(function(options){
            options[3].click();
        });
    });
});

//protractor más el nombre del archivo.js se ejecuta desde la misma carpeta donde está el archivo de configuración