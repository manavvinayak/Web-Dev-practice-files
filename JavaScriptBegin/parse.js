function explainParseint(value) {
    console.log("original value", value)
    let result = parseInt(value);
    console.log(result)
}
function explainFloatint(value) {
    console.log("original value", value)
    let result = parseFloat(value);
    console.log(result)
}

explainParseint("34.8")
explainParseint("fgehgf")
explainParseint("45px")
explainFloatint("45.88")
