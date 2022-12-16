const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          // user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        // user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      // var authorities = [];

      // for (let i = 0; i < user.roles.length; i++) {
      //   authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      // }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        // roles: authorities,
        accessToken: token
      });
    });
};

exports.saveBlind75 = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      user.blind75 = req.body.blind75;

      user.save().then(
        user => {
          res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            blind75: user.blind75,
            top150: user.top150,
            all305: user.all305,
          });
        }
      )
     
     
    });
};

exports.saveTop150 = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      user.top150 = req.body.top150;

      user.save().then(
        user => {
          res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            blind75: user.blind75,
            top150: user.top150,
            all305: user.all305,
          });
        }
      )
     
     
    });
};

exports.saveAll305 = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      user.all305 = req.body.all305;

      user.save().then(
        user => {
          res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            blind75: user.blind75,
            top150: user.top150,
            all305: user.all305,
          });
        }
      )
     
     
    });
};


exports.getData = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    // .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        blind75: user.blind75,
        top150: user.top150,
        all305: user.all305,
      });
     
     
    });
};