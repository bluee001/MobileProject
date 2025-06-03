 describe('Android Elements Test',()=>{

    it('Find Elements By Accessibility ID',async()=>{

        //find element by ID
       const appOption=await $('~App')

        //click on element 
        await appOption.click()

          //assertion
        const actionBar=await $('~Action Bar')
        await expect(actionBar).toBeExisting()
        await driver.pause(8000)
        const alarmbtn = await $('~Alarm')
        alarmbtn.click()
        
    })


    it('Find elements by class name',async()=>{
     
      //find elements using class
      const className=$('android.widget.TextView')
     // console.log(await className.getText());

      //Assertions
      await expect(className).toHaveText('API Demos')

    })


    it.only('Find elements by xpath',async()=>{

      await $('~App').click()
      
      //Finding elements by xpath
      await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();


      // Finding elements using Resource ID
      await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()


      //Find element By Text
      await $('//android.widget.TextView[@text="Command two"]').click()

      //find By Class  - Assertion
      

    })

 })