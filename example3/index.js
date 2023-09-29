// write a constructor function IphoneGen1 to create iPhone objects in bulk quantiy
// IphoneGen1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

/* function IphoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN //  // the new keyword helps in the initialization of the object and pointing "this" to newly created object;
  this.color = color
  this.display = display
  this.camera = camera

  this.dial = function () {
    console.log("tring.. tring...")
  }

  this.sendMessage = function () {
    console.log("Sending message...")
  }

  this.cameraClick = function () {
    console.log("Camera clicked")
  }
}

let iphone1 = new IphoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP") // the new keyword helps in returning the product
console.log(iphone1)
iphone1.dial() // "tring.. tring..."
iphone1.sendMessage() // "Sending message..."
iphone1.cameraClick() // "Camera clicked" */

// write a ES6 class IphoneGen1 to create iPhone objects in bulk quantiy
// IphoneGen1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

// class IphoneGen1 {
//   constructor(ASIN, color, display, camera) {
//     this.ASIN = ASIN
//     this.color = color
//     this.display = display
//     this.camera = camera

//     this.dial = function () {
//       console.log("tring.. tring...")
//     }

//     this.sendMessage = function () {
//       console.log("Sending message...")
//     }

//     this.cameraClick = function () {
//       console.log("Camera clicked")
//     }
//   }
// }

// let iphoneGen1firstPhone = new IphoneGen1("BHVI8989", "gray", "55in", "10MP")

// console.log(iphoneGen1firstPhone)

// --------- HOW TO ADD DIFFERENT METHODS TO THE PROTOTYPE OF OBJECT CREATED;

/* function IPhoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN
  this.color = color
  this.display = display
  this.camera = camera
}
IPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

IPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

IPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

let iPhoneGen1First = new IPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP")
iPhoneGen1First.dial() // "tring.. tring..."
iPhoneGen1First.sendMessage() // "Sending message..."
iPhoneGen1First.cameraClick() // "Camera clicked" */

// class IphoneGen1 {
//   constructor(ASIN, color, display, camera) {
//     this.ASIN = ASIN
//     this.color = color
//     this.display = display
//     this.camera = camera
//   }

//   dial() {
//     console.log("tring.. tring...")
//   }

//   sendMessage() {
//     console.log("Sending message...")
//   }

//   cameraClick() {
//     console.log("Camera clicked")
//   }
// }

// let iphoneGen1firstPhone = new IphoneGen1("BHVI8989", "gray", "55in", "10MP")

// console.log(iphoneGen1firstPhone)

/* function IPhoneGen1(ASIN, color, display, camera) {
  this.ASIN = ASIN
  this.color = color
  this.display = display
  this.camera = camera
}
IPhoneGen1.prototype.dial = function () {
  console.log("tring.. tring...")
}

IPhoneGen1.prototype.sendMessage = function () {
  console.log("Sending message...")
}

IPhoneGen1.prototype.cameraClick = function () {
  console.log("Camera clicked")
}

function IPhoneGen2(ASIN, color, display, camera, bluetooth) {
  IPhoneGen1.call(this, ASIN, color, display, camera)
  this.bluetooth = bluetooth
}

Object.setPrototypeOf(IPhoneGen2.prototype, IPhoneGen1.prototype)

IPhoneGen2.prototype.connectToBT = function () {
  // new properties/methods added
  console.log("Bluetooh connected")
}

IPhoneGen2.prototype.disConnectFromBT = function () {
  console.log("Bluetooh disconnected")
}

let iphoneGen2FirstPhone = new IPhoneGen2(
  "NVIOF284",
  "green",
  "6.5",
  "5MP",
  "1.4"
)

console.log(iphoneGen2FirstPhone)
iphoneGen2FirstPhone.cameraClick() */

class IphoneGen1 {
  constructor(ASIN, color, display, camera) {
    this.ASIN = ASIN
    this.color = color
    this.display = display
    this.camera = camera
  }

  dial() {
    console.log("tring.. tring...")
  }

  sendMessage() {
    console.log("Sending message...")
  }

  cameraClick() {
    console.log("Camera clicked")
  }
}

// let iphoneGen1firstPhone = new IphoneGen1("BHVI8989", "gray", "55in", "10MP")

// console.log(iphoneGen1firstPhone)

class IphoneGen2 extends IphoneGen1 {
  constructor(ASIN, color, display, camera, bluetooth) {
    super(ASIN, color, display, camera)
    this.bluetooth = bluetooth
  }

  connectToBT() {
    console.log(`bluetooth connected`)
  }

  disconnectFromBT() {
    console.log(`bluetooth disconnected`)
  }
}

let iphoneGen2firstPhone = new IphoneGen2(
  "BDSHB787",
  "green",
  "5in",
  "10MP",
  "v1.0"
)

iphoneGen2firstPhone.cameraClick()

console.log(iphoneGen2firstPhone)
