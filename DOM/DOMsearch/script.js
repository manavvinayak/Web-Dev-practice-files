// matches is the element matches given css element
let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest(".box")) // it tells parent closest to the target element
console.log(id1.contains(sp1))