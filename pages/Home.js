
exports.HomePage = class HomePage {

    
    constructor(page){
    this.page = page    
    
    this.RadioButton_1 = page.locator('#choice_41_28_0')
    this.RadioButton_2 = page.locator('#choice_41_15_0')
    this.RadioButton_3 = page.locator('#choice_41_18_0')
    this.RadioButton_4 = page.locator('#choice_41_31_0')
    this.RadioButton_5 = page.locator('#choice_41_17_0')
    this.RadioButton_6 = page.locator('#choice_41_16_0')
    this.RadioButton_7 = page.locator('#choice_41_19_0')
    this.RadioButton_8 = page.locator('#choice_41_29_0')
    this.RandomFirstName = page.locator('##input_41_12')
    this.RandomLastName = page.locator('input_41_13')
    this.SelectOption = page.locator('input_41_30')
    this.Email = page.locator('#input_41_3')
    this.ZipCode = page.locator('#input_41_26_5')
    this.PhoneNumber = page.locator('#input_41_4_raw')
    this.Page = page.getByRole('link', { name: 'Get Started', exact: true })

    }
    async LoadUrl(){
        await this.page.goto('https://www.trajectormedical.com/');
    }
    async ClickRadiobutton1(){
        await this.RadioButton_1.click();
    }
    async ClickRadiobutton2(){
        await this.RadioButton_2.click();
    }
    async ClickRadiobutton3(){
        await this.RadioButton_3.click();
    }
    async ClickRadiobutton4(){
        await this.RadioButton_4.click();
    }
    async ClickRadiobutton5(){
        await this.RadioButton_5.click();
    }
    async ClickRadiobutton6(){
        await this.RadioButton_6.click();
    }
    async ClickRadiobutton7(){
        await this.RadioButton_7.click();
    }
    async ClickRadiobutton8(){
        await this.RadioButton_8.click();
    }
    async Fields(email, Zip, Phone){
        await this.Email.fill(email)
        await this.ZipCode.fill(Zip)
        await this.PhoneNumber.fill(Phone)
    }
    async GetStartedButton(){
        await this.Page.click();
    }

}