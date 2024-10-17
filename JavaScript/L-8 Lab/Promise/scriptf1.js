function check(KalMilneAyega) {
  let pr = new Promise((res, rej) => {
    setTimeout(() => {
      if (KalMilneAyega) {
        res("Yes He/She will Come");
      } else {
        rej("No they will not come");
      }
    }, 5000);
  });
  return pr;
}

check(false)
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(x);
  });
