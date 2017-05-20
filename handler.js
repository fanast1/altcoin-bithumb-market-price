'use strict';

const config = require('./config.json');

const httpClient = require('./httpClient');



module.exports = {

    public: {
        // public
        ticker: function() {

        },

        orderbook: function() {

        },

        transactions: function() {

        }
    },

    private: {
        // info
        account: function() {

        },

        balance: function() {

        },

        walletAddress: function() {

        },

        ticker: function() {

        },

        orders: function() {

        },

        transactions: function() {

        },

        order: function() {

        }
    },

    trade: {
        // trade
        place: function() {

        },

        cancel: function() {

        },

        btcWithdrawal: function() {

        },

        deposit: function() {

        },

        krwWithdrawal: function() {

        },

        buy: function() {

        },

        sell: function() {

        }
    }
};