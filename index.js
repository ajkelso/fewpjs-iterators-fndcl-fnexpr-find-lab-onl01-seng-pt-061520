const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(y => y.result === "W")
  if (result !== undefined) {
    return result.year
  }
}