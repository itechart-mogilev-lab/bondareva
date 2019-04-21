const httpStatus = require("http-status");
const service = require("./companies.service");

module.exports.get = async (req, res, next) => {
  service
    .getCompanies(req.query)
    .then(data => res.status(httpStatus.OK).json(data))
    .catch(err => next(err));
};

module.exports.getForAdmin = async (req, res, next) => {
  service
    .getCompaniesAdmin(req.query)
    .then(data => res.status(httpStatus.OK).json(data))
    .catch(err => next(err));
};

module.exports.getById = async (req, res, next) => {
  service
    .getByIdCompany(req.params.id)
    .then(data => res.status(httpStatus.OK).json(data))
    .catch(err => next(err));
};

module.exports.put = async (req, res, next) => {
  if (req.files) console.log(req.files);
  service
    .updateCompany(req.user, req.files, req.body)
    .then(result => {
      !result
        ? res.status(httpStatus.OK).json("success")
        : res.status(httpStatus.BAD_REQUEST).json({ message: result });
    })
    .catch(err => next(err));
};

module.exports.blockById = (req, res, next) => {
  service
    .blockCompany(req.body, req.params.id)
    .then(company => res.status(httpStatus.OK).json(company))
    .catch(err => next(err));
};
