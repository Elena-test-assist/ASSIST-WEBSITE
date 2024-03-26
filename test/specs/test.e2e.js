import { expect, browser, $ } from '@wdio/globals'
describe('Navigating through Assist Website', ()=>{
    it('Loading webpage', async()=>{
        await browser.url('https://site-dev.assist.ro/')
        await browser.pause(1000)
        let className = await $('.block=Your Technical')
        await expect(className).toExist()
        await expect(className).toBeDisplayed()
        await expect(className).toHaveText('Your Technical')
        await browser.setWindowSize(1920,1080)
        await browser.pause(1000)
    })

    it('Navigate to Company webpage', async()=>{
 
    let companyButton = await $('aria/Company')
    await companyButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://site-dev.assist.ro/company')
    let classNameCompanyPage= await $('p=A solid')
    await expect(classNameCompanyPage).toHaveTextContaining('A solid track record')
    await expect(classNameCompanyPage).toExist()
    await expect(classNameCompanyPage).toBeDisplayed()
 
})

it('Navigate to Careers webpage', async()=>{

    let careersButton = await $('aria/Careers')
    await careersButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://site-dev.assist.ro/career')
    let classNameCareersPage= await $('p=Join us and work in a')
    await expect(classNameCareersPage).toHaveTextContaining('Join us and work in a creative & innovative environment')
    await expect(classNameCareersPage).toExist()
    await expect(classNameCareersPage).toBeDisplayed()

})

it('Navigate to All jobs webpage', async()=>{
    let allJobsButton = await $('aria/Explore open positions')
    await allJobsButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://site-dev.assist.ro/jobs')
    let classNameAllJobsPage= await $('p=Navigate your')
    await expect(classNameAllJobsPage).toHaveTextContaining('Navigate your career towards success')
    await expect(classNameAllJobsPage).toExist()
    await expect(classNameAllJobsPage).toBeDisplayed()

})
it('Navigate to Blog webpage', async()=>{
    let blogButton = await $('aria/Blog')
    await blogButton.click()
    await browser.pause(1000)
    await expect(browser).toHaveUrl('https://site-dev.assist.ro/blog')
    let classNameBlogPage= await $('p=News, insights and advices')
    await expect(classNameBlogPage).toHaveTextContaining('News, insights and advices from our team')
    await expect(classNameBlogPage).toExist()
    await expect(classNameBlogPage).toBeDisplayed()

 })
})
