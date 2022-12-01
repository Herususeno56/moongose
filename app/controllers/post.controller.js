const { post } = require("../models");
const db = require("../models");
const Post = db.post;

exports.findAll = (req, res) => {
  Post.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};

exports.create = (req, res) => {
  const post = new Post({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    status: req.body.status ? req.body.status : false,
  });


  post
    .save(post)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while create post",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while show post",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  post
    .findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Post Not Found",
        });
      }
      res.send({
        message: "Post Was Update",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while update post",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Post Not Found",
        });
      }
      res.send({
        message: "Post Was Delete",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while delete post",
      });
    });
};
