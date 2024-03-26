import { expect, browser, $ } from '@wdio/globals'
describe('Navigate through Assist Website Tablet/Phone', () => {
    it('Loading webpage', async()=>{
        await browser.url('https://site-dev.assist.ro/')
        await browser.pause(1000)
        let className = await $('.block=Your Technical')
        await expect(className).toExist()
        await expect(className).toBeDisplayed()
        await expect(className).toHaveText('Your Technical')
})

it('Navigate to Company webpage', async()=>{
 
    let menuButton = await $('.transform.transition-transform')
    await menuButton.click()
    await browser.pause(1000)
    let companyButton = await $('=Company')
    await companyButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://site-dev.assist.ro/company')
    let classNameCompanyPage= await $('p=A solid')
    await expect(classNameCompanyPage).toHaveTextContaining('A solid track record')
    await expect(classNameCompanyPage).toExist()
    await expect(classNameCompanyPage).toBeDisplayed()
 
})

/*it('Navigate to Careers webpage', async()=>{
    let menuButton = await $('.transform.transition-transform')
    await menuButton.click()
    await browser.pause(1000)
    let companyButton = await $('=Careers')
    await companyButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://site-dev.assist.ro/career')
    let classNameCareersPage= await $('p=Join us and work in a')
    await expect(classNameCareersPage).toHaveTextContaining('Join us and work in a creative & innovative environment')
    await expect(classNameCareersPage).toExist()
    await expect(classNameCareersPage).toBeDisplayed()

})*/

it('Navigate to Blog webpage', async()=>{
    let menuButton = await $('.transform.transition-transform')
    await menuButton.click()
    await browser.pause(1000)
    let blogButton = await $('=Blog')
    await blogButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://site-dev.assist.ro/blog')
    let classNameBlogPage= await $('p=News, insights and advices')
    await expect(classNameBlogPage).toHaveTextContaining('News, insights and advices from our team')
    await expect(classNameBlogPage).toExist()
    await expect(classNameBlogPage).toBeDisplayed()

 })

})