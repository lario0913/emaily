const passport = require('passport')
const googleStrategy = require('passport-google-oauth20').Strategy
const keys =  require('../config/keys')
const mongoose = require('mongoose')
const e = require('express')
const { use } = require('passport')


const Users = new mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    Users.findById(id).then(user => {
        done(null, user)
    })
})

passport.use(new googleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
    Users.findOne({googleId: profile.id}).then(existingUser => {
        if (existingUser){
            done(null, existingUser)
        }else{
            new Users({googleId: profile.id}).save().then(user=> done(null, user))
        }
    })
    
}
))