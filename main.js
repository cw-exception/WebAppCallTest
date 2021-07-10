console.log('aaaa')

function testCall() {
    // alert("I'm testCall")
    makeH1Html("I am Simple TestCall")

    
}

function returnValueTest() {
    let returnValue = "I'm return Value from Javascript Func" 
    makeH1Html(returnValue)
    return returnValue
}

function parameterTest(paramValue) {
    // alert(paramValue)
    makeH1Html("parameterTest => " + paramValue)
}

function callNativeFunc() {

    window.webkit.messageHandlers.callNativeFunc.postMessage("callNativeFunc param")

}

function makeH1Html(text) {
    var h = document.createElement("H3");
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}

