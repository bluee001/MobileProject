describe('Login Test case',()=>{
    it('Facebook Login Test',async()=>{

        await $('~Chrome').click();
        await $('//*[@resource-id="com.android.chrome:id/search_box_text"]').addValue('https://www.facebook.com');
        await driver.pause(4000)
        await browser.keys('Enter');
        await $('//*[@resource-id="m_login_email"]').addValue('Pankaj')
         await $('//*[@resource-id="m_login_password"]').addValue('kumar')
         await $('//*[@text="Log in"]').click();

         
         // await errorBox.waitForDisplayed({ timeout: 5000 });
         await driver.pause(2000)
         const errorBox = await $('//*[@text="Incorrect password"]');
       

        // Get and print the error text
        const errorText = await errorBox.getText();
        console.log('Login error message:', errorText);
    })
})