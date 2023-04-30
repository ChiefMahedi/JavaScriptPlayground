function message1(i, callback) {
  const msg = i+"Hello, ";
  callback(msg);
}
function message2(i, callback) {
  const msg = i+"There!";
  callback(msg);
}
function message3(i, callback) {
  const msg = i+" People";
  callback(msg);
}

function usingCallbacks(message) {
  message1(message, (msgresult) => {
    message2(msgresult, (msgresult2) => {
      message3(msgresult2, (msgresult3) => {
        console.log(msgresult3);
      });
    });
  });
}
const m ='';
usingCallbacks(m);