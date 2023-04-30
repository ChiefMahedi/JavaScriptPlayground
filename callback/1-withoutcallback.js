function message1(i) {
    return i + "Hello, ";
}
  
  function message2(i) {
    return i + "There!";
}
  
  function message3(i) {
    return i + " People";
}
  
  function notUsingCallback() {
    let result = " ";
    result = message1(result);
    result = message2(result);
    result = message3(result);
    console.log(result);
}
  
notUsingCallback()