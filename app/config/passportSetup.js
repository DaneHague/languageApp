const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const request = require('request');

passport.use(
    new GoogleStrategy({
        // options
        callbackURL: 'http://localhost:3000/auth/google/callback',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        profileFields: ['emails']

},(accessToken, refreshToken, profile, done) =>{

    var post_data = {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        oauth2Id: profile.id,
        accessToken: accessToken
    }

    console.log(accessToken);
    
    request.post({
        url : 'https://languageappapi20180217033821.azurewebsites.net/api/users/oauth2connect',
        method: 'POST',
        body: post_data,
        json: true,
        function (error, response, body) {
            if (!error) {
                console.log('hit the database');
            } else {
                console.log(error);
            }
        }
    });
    return done(null);
}));