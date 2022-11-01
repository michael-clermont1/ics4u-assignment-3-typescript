/**
 * This is the main code that runs
 * the triangle program.
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

import Triangle from './Triangle'

console.log('')

const testTriangle1 = new Triangle(3, 4, 5)
console.log('Created a 3 mm by 4 mm by 5 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle1.isValid().toString())
console.log(' → Semiperimeter: ' + testTriangle1.semiPerimeter().toFixed(4) + ' mm')
console.log(' → Area: ' + testTriangle1.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle1.getType())
console.log(' → Angle 1: ' + testTriangle1.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle1.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle1.angle(3).toFixed(4) + ' rad')
console.log('')

const testTriangle2 = new Triangle(3, 3, 3)
console.log('Created a 3 mm by 3 mm by 3 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle2.isValid().toString())
console.log(' → Semiperimeter: ' + testTriangle2.semiPerimeter().toFixed(4) + ' mm')
console.log(' → Area: ' + testTriangle2.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle2.getType())
console.log(' → Angle 1: ' + testTriangle2.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle2.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle2.angle(3).toFixed(4) + ' rad')
console.log('')

const testTriangle3 = new Triangle(3, 4, 4)
console.log('Created a 3 mm by 4 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle3.isValid().toString())
console.log(' → Semiperimeter: ' + testTriangle3.semiPerimeter().toFixed(4) + ' mm')
console.log(' → Area: ' + testTriangle3.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle3.getType())
console.log(' → Angle 1: ' + testTriangle3.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle3.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle3.angle(3).toFixed(4) + ' rad')
console.log('')

const testTriangle4 = new Triangle(2, 3, 4)
console.log('Created a 2 mm by 3 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle4.isValid().toString())
console.log(' → Semiperimeter: ' + testTriangle4.semiPerimeter().toFixed(4) + ' mm')
console.log(' → Area: ' + testTriangle4.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle4.getType())
console.log(' → Angle 1: ' + testTriangle4.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle4.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle4.angle(3).toFixed(4) + ' rad')
console.log('')

const testTriangle5 = new Triangle(23, 4, 6)
console.log('Created a 23 mm by 3 mm by 4 mm triangle.')
console.log(' → Is the triangle valid: ' + testTriangle5.isValid().toString())
console.log(' → Semiperimeter: ' + testTriangle5.semiPerimeter().toFixed(4) + ' mm')
console.log(' → Area: ' + testTriangle5.area().toFixed(4) + ' mm²')
console.log(' → Type: ' + testTriangle5.getType())
console.log(' → Angle 1: ' + testTriangle5.angle(1).toFixed(4) + ' rad')
console.log(' → Angle 2: ' + testTriangle5.angle(2).toFixed(4) + ' rad')
console.log(' → Angle 3: ' + testTriangle5.angle(3).toFixed(4) + ' rad')
console.log('')

console.log('\nDone.')
