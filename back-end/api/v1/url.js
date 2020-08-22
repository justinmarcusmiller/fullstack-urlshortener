const express = require("express");
const router = require("express").Router();
const { nanoid } = require('nanoid');

function isValidURL(string) {
  let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

const isAlphaNumeric = ch => {
	return ch.match(/^[a-z0-9]+$/i) !== null;
}

router.get("/", (req, res, next) => {
  res.send("<h1>URL Home</h1>");
});

router.get("/create/", (req, res, next) => {
  // todo: create url
  if (!isValidURL(req.query.originalUrl)) {
    res.json({
      message: "URL is missing or is not a valid url",
    });
  }

  if (req.query.customSlug === undefined) {
    // todo: generate random slug
    console.log("Generating custom slug")
    slug = nanoid(7);
    // todo: add to db
  } else {
    if(isAlphaNumeric(req.query.customSlug) && req.query.customSlug.length < 20) {
      console.log(req.query.customSlug.length);
      slug = req.query.customSlug;
      // todo: add to db
    } else {
      res.json({
        message: "Invalid slug, must contain only alpha-numeric characters and be under 20 characters"
      })
    }
  }
  res.json({
    originalUrl: req.query.originalUrl,
    customSlug: slug,
  });
});

module.exports = router;
