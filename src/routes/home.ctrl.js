"use strict";


const output = {
    home: (req, res) => {
        res.render("index");
    },

    // login: (req,res) => {
    //     res.render("login");
    // },

    // register: (req, res) => {
    //     res.render("register");
    // },

    seoul: (req, res) => {
        res.render("Seoul")
    },
};

// const process = {

// };


module.exports = {
  output,
//   process,  
};