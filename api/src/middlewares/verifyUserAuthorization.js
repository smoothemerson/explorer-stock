const AppError = require("../utils/AppError")

function verifyUserAuthorization(roletToVerify) {
  return (request, response, next) => {
    const { role } = request.user

    if (role !== roletToVerify) {
      throw new AppError("Unauthorized", 401)
    }

    return next()
  }
}

module.exports = verifyUserAuthorization