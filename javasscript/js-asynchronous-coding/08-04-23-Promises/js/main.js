// Promise söz vermek

const onDakikaSonraOradayım = new Promise((resolve, reject) => {
  const yagmurlu = true;

  setTimeout(() => {
    if (yagmurlu) {
      reject("burası İstanbul, yağmur yağar söz uçar... ");
    } else {
      resolve("Sözümü her zaman tutarım :)");
    }
  }, 10000);
});

onDakikaSonraOradayım
.then((message) => {
    console.log(message);
})
  .catch((err) => {
    console.log(err);
});

function getWorks() {
  const workList = null;

  return new Promise((resolve, reject) => {
    if (workList) {
      resolve("İş listesi alındı");
    } else {
      reject("İş listesi alınamadı");
    }
  });
}

getWorks()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
