const express = require("express");
const router = require("express").Router();

function isValidURL(string) {
  let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

router.get("/", (req, res, next) => {
  res.send("<h1>URL Home</h1>");
});

router.get("/create/", (req, res, next) => {
  // todo: create url
  if (!isValidURL(req.query.originalUrl)) {
    res.json({
      message: "No valid URL provided",
    });
  }
  
  if (req.query.customSlug === undefined) {
    // todo: generate random slug
    slug = 1234;
  } else {
    slug = req.query.customSlug;
  }

  res.json({
    originalUrl: req.query.originalUrl,
    customSlug: slug,
  });
});

module.exports = router;
