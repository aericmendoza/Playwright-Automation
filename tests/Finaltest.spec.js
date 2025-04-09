

import { faker } from '@faker-js/faker';
import { HomePage } from '../pages/Home'
import { test, expect } from '@playwright/test';

test('Launch trajectormedical and populate fields', async ({ page }) => {
    const Home = new HomePage(page)
    
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X size

    //Generate random First Name
    const randomFirstName = faker.person.firstName();
    console.log('Random First Name:', randomFirstName);

    //Generate random Last Name
    const randomLastName = faker.person.lastName();
    console.log('Random Last Name:', randomLastName);

    //Load URL
    await Home.LoadUrl();

    //Validate URL
    await expect(page.url()).toBe('https://www.trajectormedical.com/');

    //Validate title 
    await expect(page).toHaveTitle('Medical Evidence To Support Your Disability Claim - Trajector Medical');

    //Click Get Started button
    await Home.GetStartedButton();

    //Populate fields
    await Home.ClickRadiobutton1();
    await Home.ClickRadiobutton2();
    await Home.ClickRadiobutton3();
    await Home.ClickRadiobutton4();
    await Home.ClickRadiobutton5();
    await Home.ClickRadiobutton6();
    await Home.ClickRadiobutton7();
    await Home.ClickRadiobutton8();
    await page.fill('#input_41_12', randomFirstName);
    await page.fill('#input_41_13', randomLastName);
    await page.selectOption('#input_41_30', '52');
    await Home.Fields('aericmendoza,30@gmail.com', '9000', '123-456-789')
    await page.selectOption('#input_41_26_4', 'Wyoming');
    //await page.click('#gform_submit_button_41')

    //generate report
    reporter: [
        ['json', { outputFile: 'results.json '}]
    ]

})