'use strict';

const config = require('config');
const authConfig = config.auth;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
