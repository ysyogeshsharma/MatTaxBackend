import express from "express";
import {login, logout, twitterAuth, twitterCallBackAuth} from "./controller/index.js";
import passport from "passport";
const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/callback', passport.authenticate('google', { failureRedirect: (req, res) => { return res.json({ Error: 'error' }) } }),(req,res)=>res.json({message:"logined"}));
// authRouter.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
// authRouter.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: (req, res) => { return res.json({ Error: 'error' }) } }),(req,res)=>res.json({message:"logined"}));
authRouter.get('/twitter', twitterAuth);
authRouter.get('/twitter/callback', twitterCallBackAuth);

export default authRouter;
