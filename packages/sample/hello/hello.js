function main(event, context) {
    console.log(event)
    return {"body": event, "context": context}
  }

exports.main = main
