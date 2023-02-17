// This is a mockup code to explain the difference between sync and async 
// code (This is not a real code :D )
const name = window.alert("enter your name");

////////////////// Sync Code
const res = sendToServer(name);
if (res == "Success") {
  console.log("Success");
} else {
  console.log("Fail");
}
console.log("Anything else");

///////////////////// Async Code
// Promises 
sendToServer(name).then((res) => {
  if (res == "Success") {
    console.log("Success");
  } else {
    console.log("Fail");
  }
}).catch(err => {
  console.log("Something went wrong!");
});
console.log("Anything else");

////////////////////// Async Code
// async await

const myFunc = async () => {
  const res = await sendToServer();
  if (res == "Success") {
    console.log("Success");
  } else {
    console.log("Fail");
  }
}