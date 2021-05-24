const fakeReq = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("OH NO!!! OH NO...");
      } else {
        resolve(`Here we go...it's your faake data from ${url} `);
      }
    }, delay);
  });
};

fakeReq("alireza.com/page1")
  .then(() => {
    console.log("page1 ,,, IT's work dude ");
    fakeReq("alireza.com/page2")
      .then(() => {
        console.log("page2.... It's work again man");
        fakeReq("alireza.com/page3")
          .then(() => {
            console.log("page3 ... oh man... you are fantastic");
          })
          .catch(() => {
            console.log("pahe3 failed....dame it");
          });
      })
      .catch(() => {
        console.log("what the hell.... page 2 is broke out too");
      });
  })
  .catch(() => {
    console.log("page 1 has error.... that's suck");
  });

console.log("you can't find it here dude");
