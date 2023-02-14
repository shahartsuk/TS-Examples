//function return promise with timeout
function waitFor(waitInMills: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (waitInMills > 10000) {
      reject("Too long to wait");
    } else {
      setTimeout(() => {
        resolve();
      }, waitInMills);
    }
  });
}

function PromiseChained(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    waitFor(1000)
      .then(() => {
        console.log("first return");
        return waitFor(2000);
      })
      .then(() => {
        console.log("second return");
        return waitFor(3000);
      })
      .then(() => {
        console.log("third return");
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

//call promise function and set timeout
waitFor(500).then(() => {
  console.log("first return");

  waitFor(1000).then(() => {
    console.log("second return");

    waitFor(2000).then(() => {
      console.log("third return");

      waitFor(9000).then(() => {
        console.log("Fourth return");
      });
    });
  });
});
