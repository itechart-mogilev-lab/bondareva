const Joi = require("joi");
const httpStatus = require("http-status");

const validation = (schema, property) => {
  return (req, res, next) => {
    const { error } = Joi.validate(req[property], schema);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map(i => i.message).join(",");
      res.status(httpStatus.BAD_REQUEST).json({
        message: message
      });
    }
  };
};

module.exports = validation;
