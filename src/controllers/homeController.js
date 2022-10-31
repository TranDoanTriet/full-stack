
import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        //findAll => tìm tất cả dữ liệu
        let data = await db.User.findAll();
        return res.render('homePage.ejs',{
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error)
    }
    
}
let getAboutPage = (req, res) => {
    return res.render('test/homeAboutPage.ejs')
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
}