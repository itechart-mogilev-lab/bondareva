const jwt = require("jsonwebtoken");
const config = require("./environment");
const uuid = require("uuid/v4");
const Token = require("../models").token;

function updateToken(user) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return {
    accessToken,
    refreshToken
  };
}

const generateAccessToken = ({ _id, role }) => {
  const token = jwt.sign(
    { id: _id, role, type: config.jwt.access.type },
    config.jwt.secret,
    { expiresIn: config.jwt.access.expiration }
  );
  return token;
};

const generateRefreshToken = ({ _id, role }) => {
  const payload = {
    id: uuid(),
    role,
    type: config.jwt.refresh.type
  };
  const tokenId = payload.id;
  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.refresh.expiration
  });
  Token.findOne({ userId: _id }, async (err, data) => {
    if (data) {
      data.tokenId = tokenId;
      await data.save();
    } else {
      await new Token({ tokenId, userId: _id }).save();
    }
  });
  return token;
};

const verifiedToken = ({ role, _id }) => {
  const payload = {
    id: _id,
    role
  };
  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.verified.expiration
  });

  return token;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifiedToken,
  updateToken
};
