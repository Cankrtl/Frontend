const jsontr = '[{"name": "Can"} ]';

//JSON Javascript object notation

const user = { userName: "Burak" };

// conver a js object to json string
JSON.stringify(user);

const userJsonStr = '{"userName:":"Burak"}';

// get data

const btnFetchEl = document.getElementById("btn-fetch");
const listEl = document.getElementById("cities");

btnFetchEl.addEventListener("click", handleFetch);

function handleFetch() {
  fetch("https://64318e0d3adb1596516f1b61.mockapi.io/citys").then(
    (response) => {
      return response
        .json()
        .then((data) => {
          createCityElements(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  );
}

function createCityElements(data) {
  data.forEach((citys) => {
    const titleEl = document.createElement("li");
    titleEl.textContent = citys.name;

    listEl.append(titleEl);
  });
}

// // deleting data via fetch
// fetch("https://64318e0d3adb1596516f1b61.mockapi.io/citys/4", {
//   method:"DELETE",
//   headers:{"Content-Type":"applicaiton/json"}
// }).then((response)=>{console.log(response);})
// .catch((err)=>{console.log(err);})


// Updating data using "PUT" method
fetch("https://638a06e04eccb986e8a1804b.mockapi.io/products/11", {
  method:"PUT",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({name:"Nike Jordan T-shirt", category:"tişört", price:800})
}
)




// 
const btnDeleteCity = document.getElementById("btnDeleteCity");
const inputCityId = document.getElementById("cityId");

btnDeleteCity.addEventListener("click", handleDeleteCity);

function handleDeleteCity(e) {
  e.preventDefault();
  //  şehir id'sini al
  const cityid = inputCityId.value;
  const apiUrl = "https://64318e0d3adb1596516f1b61.mockapi.io/citys/" + cityid;

  fetch(apiUrl, {
    method: "DELETE",

    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      const messageEl = document.getElementById("cityMessage");

      messageEl.textContent = `${cityid}'li şehir silindi.`;
    })

    .catch((err) => {
      console.log(err);
    });
}


// Example adding new data

const inpProductNameEl = document.querySelector("#inpProductName");

const inProductPriceEl = document.getElementById("inpProductPrice");
const inProductCategoryEl = document.getElementById("inpProductCategory");

const btnFrmAddProduct = document.querySelector("#frmAddProduct button");

// form submit butonu yakala olay dinleyicisini ekle 
// bir input değerlerini

btnFrmAddProduct.addEventListener("click", handleAddProduct);

function handleAddProduct(e){
  e.preventDefault();
  // input değerlerini al

  const productName = inpProductNameEl.value;
  const productCategory = inProductCategoryEl.value;
  const productPrice  = inProductPriceEl.value;
  const produtObj = {name:productName, category:productCategory, price:productPrice}
  // api url oluştur
  const apiUrl = "https://638a06e04eccb986e8a1804b.mockapi.io/products";
  // api ye bağlan
  fetch(apiUrl, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(produtObj)
  })
  .then((response)=>{clearFields("frmAddproduct");})
  .catch((err)=>{console.log(err);})
}

function clearFields(frmid){
  const frm = document.getElementById(frmid)
 const inputFields = document.querySelector("input")

 inputFields.forEach((input)=>{
  input.value = "";
 })
}
