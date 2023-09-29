const printData = (data, mainRoot) => {
  data.forEach((product) => {
    // Create a card which will have all the info wrt product;
    let productCard = document.createElement("div")
    productCard.className = "product-card"

    // Create an image;
    let productImage = document.createElement("img")
    productImage.src = product.image

    // Create Name;
    let productName = document.createElement("p")
    productName.textContent = product.title

    productCard.append(productImage, productName)
    mainRoot.append(productCard)
  })
}

const getData = async (URL) => {
  try {
    let res = await fetch(URL)
    let data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export { printData, getData }
