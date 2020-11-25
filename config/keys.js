
// 815865248046-f2cvrk4c2bt5b6bei1f0lesr8v0ivrpu.apps.googleusercontent.com
// 8yJYWuIEeq8jqSOuZY76EI9g
// "mongodb+srv://emaily-dev:<password>@emaily-dev.0gci4.mongodb.net/<dbname>?retryWrites=true&w=majority"

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dev')
}else{
    module.exports = require('./dev')
}