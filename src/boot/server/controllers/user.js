const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require('jsonwebtoken');


exports.signup = (req, res) => {
  const action = new Promise((resolve, reject) => {
    let body = req.body

    // verifier qu'on a bien recu toute les info requise
    if (!body.username) {
      reject(["require username"]);
    } else if (!body.email) {
      reject(["require email"]);
    } else if (!body.password) {
      reject(["require password"]);
    } else if (!body.confirm) {
      reject(["require confirmation password"]);
    } else if (body.password != body.confirm) {
      reject(["password and confirmation doesn't correspond"]);
    } else {
      // console.log("signup parameters ok");
    }

    // verifier que les info recu sont valide (confirmation password, regex mail, password pas trop faible)
    // à decommenter pour la production
    // if (!req.body.username && req.body.username.length >= 3) {
    //     reject(["username error format"]);
    // } else if (!req.body.email && !req.body.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    //     reject(["email error format"]);
    // } else if (!req.body.password && !req.body.password.length >= 8) {
    //     reject(["password error format"]);
    // } else {
    //     // console.log("signup parameters ok");
    // }

    // verifier si un compte avec les meme coordonnée n'existe pas deja
    const findSimilarAccounts = User.find({
      $or: [{
          username: req.body.username
        },
        {
          email: req.body.email
        },
      ]
    });


    findSimilarAccounts
      .then(accounts => {
        if (accounts.length > 0) {
          console.log("find similar account");
          const errors = [];
          accounts.forEach(account => {
            if (account.username === req.body.username) {
              errors.push('There is already an account with this username.');
            }

            if (account.email === req.body.email) {
              errors.push('There is already an account with this email.');
            }
          });
          reject(errors);
        } else {
          // créer un nouvelle utilisateur avec un mot de passe crypté
          const encryptPassword = bcrypt.hash(req.body.password, 10);

          encryptPassword
            .then(encryptedPassword => {
              const account = new mongoose.models.User({
                username: body.username,
                email: body.email,
                password: encryptedPassword,
              });
              const accountSaving = account.save();

              accountSaving
                .then(() => {
                  console.log(`New account: ${req.body.username} <${req.body.email}>`);
                  resolve();
                })
                .catch(err => {
                  console.log("err: " + err);
                });
            })
            .catch(err => {
              console.log("err: " + err);

              reject(["user create: An error occured."]);
            });
        }
      })
      .catch(err => {
        console.log(err);

        reject(["An error occured."]);
      })
    // inserer l'utilisateur dans la base de donnée
    // créer un token
    // créer une session car on va considerer que l'utilisateur est connecté
    // renvoyer le resultat de l'operation en json
  });

  action
    .then(() => {
      var token = jwt.sign({
        foo: 'bar'
      }, 'shhhhh', {
        expiresIn: "1h"
      });
      req.session.user = {
        "username": user.username,
        "isConnected": true,
        "token": token
      };
      res.end(JSON.stringify({
        success: true
      }));
    })
    .catch(err => {
      res.end(JSON.stringify({
        success: false,
        errors: err
      }));
    });
};


exports.login2 = (req, res) => {
  // verifier qu'on a bien recu toute les info requise
  // verifier que les info recu sont valide
  // verifier si un compte avec les meme coordonnée n'existe pas deja
  // si oui: recuperer les info de l'utilisateur
  // créer un token
  // créer une session car on va considerer que l'utilisateur est connecté
  // renvoyer le resultat de l'operation en json
}
/**
 * Login action
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.login = (req, res) => {
  /**
   * @type {Promise<string[]>}
   */
  const action = new Promise((resolve, reject) => {

    if (req.body.email && req.body.password) {

      const verification = {
        isEmailError: !(req.body.email && req.body.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),
        isPasswordError: !(req.body.password && req.body.password.length >= 8),
      };

      if (true) {
        //if (!verification.isEmailError && !verification.isPasswordError) {
        const findSimilarAccounts = mongoose.models.User.findOne({
          email: req.body.email
        });

        const credentialsError = "This credentials doesn't match with an existing account or the account doesn't exists.";

        findSimilarAccounts
          .then(account => {
            if (!account) {
              reject([credentialsError]);
            } else {
              const checkPassword = bcrypt.compare(req.body.password, account.password)

              checkPassword
                .then(same => {
                  if (same) {
                    resolve(account);
                  } else {
                    reject([credentialsError]);
                  }
                })
                .catch(err => {
                  console.log(err);

                  reject([credentialsError]);
                });
            }
          }).catch(err => {
            console.log(err);

            reject(["An error occured."]);
          });
      } else {
        reject(["Inputs doesn't match the requirements."]);
      }
    } else {
      reject(['Please complete the form before sending it.']);
    }
  });

  action
    .then((resp) => {
      console.log("Connection de: " + resp.username);
      let token = jwt.sign({
        foo: 'bar'
      }, 'shhhhh');
      let user = {
        "user": resp.username,
        "email": resp.email
      };
      req.session.user = res.locals.user = {
        "username": resp.username,
        "token": token
      };
      res.send(JSON.stringify({
        success: true,
        "token": token,
        "user": user
      }));
    })
    .catch(err => {
      res.end(JSON.stringify({
        success: false,
        errors: err
      }));
    });
};

exports.logout = (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      res.send(JSON.stringify({
        success: false,
        errors: err
      }));
    } else {
      res.end(JSON.stringify({
        success: true
      }));
    }
  })
};
