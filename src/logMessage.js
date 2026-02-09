let verbosity = 0

function logMessage (str) {
  if (verbosity) {
    console.log(str)
  }
}

logMessage.setVerbosity = function (v) {
  verbosity = v
}

export default logMessage
