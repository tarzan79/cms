const catchErrors = (action) => {
  return (req, res, next) => {
    action(req, res).catch(next)
  }
}

module.exports = catchErrors;