describe('eMag.ro', () => {
    it('should have the correct page title', async () => {
        await browser.url('https://www.emag.ro/')
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
    });
    it('should contain a cart button',async () => {
        const cartButton = await $('#my_cart');
        expect(cartButton).toBeDisplayed();

    });
    it('should open eMag Gnius page', async () => {
        const geniusButton = await $('[title="Genius"]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');

    });
    it('should have a working search', async () =>{
        const searchBox = await $('#searchboxTrigger')
        const searchButton = await $('.searchbox-submit-button');

        await searchBox.setValue('Tricouri polo');
        await searchButton.click();
    })
    it('should open tricuri polo barbati page', async () => {
        const tricouriButton = await $('[title="Tricouri barbati"]');
        await tricouriButton.click();
        await expect(browser).toHaveTitle('Tricouri Barbati. Comanda Online - eMAG.ro');

    })

})
