import navbar from "../components/navbar.js"
import { printData, getData } from "../utils/utils.js"

let navbarContainerElement = document.getElementById("navbar-container")
navbarContainerElement.innerHTML = navbar()

let rootElement = document.getElementById("root")
let URL = `https://fakestoreapi.com/products/category/women's%20clothing`

const init = async () => {
  try {
    let data = await getData(URL)
    printData(data, rootElement)
  } catch (error) {
    console.log(error)
  }
}

init()
