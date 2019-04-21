const router = require("express").Router({ mergeParams: true });
const controller = require(`./reviews.controller`);
const permit = require("../../middleware/permission");
const Role = require("../../enums/roles.enum");
const validation = require("../../middleware/validation");
const schemas = require("../../validation").review;

router.get("/", controller.getReviewsCompany);
router.post(
  "/",
  permit(Role.Customer),
  validation(schemas.reviewPOST, "body"),
  controller.post
);

module.exports = router;
