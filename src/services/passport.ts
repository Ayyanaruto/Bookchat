import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth20";
import passport, { Profile, use } from "passport";

import User from "../models/User";

passport.serializeUser((user: any, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  const user = await User.findById(id);
  return done(null, user);
});
 

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "/auth/google/callback",
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      } else {
        console.log(profile);
        const user = await new User({
          googleId: profile.id,
          email: profile.emails![0].value,
          displayName: profile.displayName,
        }).save();
        return done(null, user);
      }
    }
  )
);
