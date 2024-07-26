const AppError = require("../utils/AppError")

function verifyUserAuthorization(roleToVerify) {
  return (request, response, next) => {
    const { role } = request.user

    if (role !== roleToVerify) {
      console.log(role, roleToVerify)
      throw new AppError("Unauthorized", 401)
    }

    console.log(role, roleToVerify)
    return next()
  }
}

module.exports = verifyUserAuthorization