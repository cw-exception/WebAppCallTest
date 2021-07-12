console.log('aaaa')

// 네이티브에서 웹페이지의 function을  파라미터없이 단순 호출
function testCall() {
    makeH1Html("I am Simple TestCall")
}

// 네이티브에서 웹페이지의 function 호출후 -> 웹페이지 function이 값을 리턴해줌
function returnValueTest() {
    let returnValue = "I'm return Value from Javascript Func" 
    makeH1Html(returnValue)
    return returnValue
}

// 네이티브에서 웹페이지의 function 호출시 파라미터 전달
function parameterTest(paramValue) {
    // alert(paramValue)
    makeH1Html("parameterTest => " + paramValue)
}

// 웹페이지에서 -> 네이티브의 함수 호출 . 
function callNativeFunc() {
    // 실제로 호출되는건 아래 messageHandlers가 참조하는 callNativeFuncFromWeb 라는 이름의 함수입니다.
    // 뒤에 postMessage로 param을 보낼수있습니다.
    // 1. 네이티브에서  웹으로부터 불려질 "callNativeFuncFromWeb" 와 같은 이름을 미리 코드에 등록하는 절차가 필요합니다.
    // 2. 아래처럼 호출해주면
    // 3. 네이티브 코드에서 등록한게 있을 경우 콜백이 들어옵니다. 콜백정보로는  메소드이름인 callNativeFuncFromWeb 와 postMesage 의 parameter값이 들어옵니다.
    // -- 만약 callNativeFuncFromWeb  와 같은 것이 네이티브에 등록되지않았다면 아무것도 호출되지않습니다.
    window.webkit.messageHandlers.callNativeFuncFromWeb.postMessage("callNativeFunc param")
}

function makeH1Html(text) {
    var h = document.createElement("H3");
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}

