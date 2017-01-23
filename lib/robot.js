'use strict';

function Robot() {
  this.orient = function(direction) {
    if (direction === 'north' || direction === 'east' || direction === 'west' || direction === 'south') {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  this.turnRight = function() {
    if (this.bearing === 'north') {
      this.bearing = 'east'
    } else if (this.bearing === 'east') {
      this.bearing = 'south'
    } else if (this.bearing === 'south') {
      this.bearing = 'west'
    } else if (this.bearing === 'west') {
      this.bearing = 'north'
    }
  }

  this.turnLeft = function() {
    if (this.bearing === 'north') {
      this.bearing = 'west'
    } else if (this.bearing === 'west'){
      this.bearing = 'south'
    } else if (this.bearing === 'south'){
      this.bearing = 'east'
    } else if (this.bearing === 'east'){
      this.bearing = 'north'
    }
  }

  this.at = function(x, y) {
    this.coordinates = [x, y]
  }

  this.advance = function() {
    if (this.bearing === 'north') {
      this.coordinates[1]++
    } else if (this.bearing === 'east') {
      this.coordinates[0]++
    } else if (this.bearing === 'south') {
      this.coordinates[1]--
    } else if (this.bearing === 'west') {
      this.coordinates[0]--
    }
  }

  this.instructions = function(arg) {
    //The robot then receives a number of instructions, at which point the testing
    //facility verifies the robot's new position, and in which direction it is
    //pointing.
    var letters = arg.split("")
    var array = []
    for (var i = 0; i < letters.length; i++) {
      if (letters[i] === "R") {
        this.turnRight()
        array.push('turnRight')
      } else if (letters[i] === "L") {
        this.turnLeft()
        array.push('turnLeft')
      } else if (letters[i] === "A") {
        this.advance()
        array.push('advance')
      }
    }
    return array
  }

  this.place = function(obj) {
    this.at(obj.x, obj.y)
    this.orient(obj.direction)
  }

  this.evaluate = function (string) {
    this.instructions(string)
  }
}
