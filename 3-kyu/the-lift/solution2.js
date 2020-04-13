/**
 * Solution 2
 * 
 * Object-oriented approach to modeling the system described in the problem
 * 
 */

const isBeyond = (a, b, dir) => dir > 0 ? a > b : a < b

class Floor {
  constructor(n, queue) {
    this._queue = queue
    this.story = n
  }
  get isEmpty() {
    return this._queue.length === 0
  }

  hasRiderGoing(dir) {
    return this._queue.some(floor => isBeyond(floor, this.story, dir))
  }

  getNextRiderGoing(dir) {
    let idx = this._queue.findIndex(floor => isBeyond(floor, this.story, dir))
    return this._queue.splice(idx, 1)[0]
  }
}

class Lift {
  constructor(queues, capacity) {
    this._floors = queues.map((q, i) => new Floor(i, q))
    this._capacity = capacity
    this._riders = []
    this._currDir = 1
    this._currFloor = 0
    this._visitedFloors = []
  }
  get isEmpty() {
    return this._riders.length === 0
  }
  get isFull() {
    return this._riders.length === this._capacity
  }
  get isCalled() {
    return this._floors.some(floor => !floor.isEmpty)
  }
  get isCalledBeyond() {
    return this._floors
      .filter(f => isBeyond(f.story, this._currFloor, this._currDir))
      .some(f => !f.isEmpty)
  }
  get hasRiderGoingBeyond() {
    return this._riders.some(floor => isBeyond(floor, this._currFloor, this._currDir))
  }
  get willRiderExit() {
    return this._riders.some(r => r === this._currFloor)
  }
  get willRiderEnter() {
    return this._floors[this._currFloor].hasRiderGoing(this._currDir)
  }
  get shouldStop() {
    return this.willRiderEnter || this.willRiderExit || this.shouldChangeDir
  }
  get shouldChangeDir() {
    return !(this.isCalledBeyond || this.hasRiderGoingBeyond || this.willRiderEnter)
  }

  advance() {
    this._currFloor += this._currDir
  }

  changeDir() {
    this._currDir *= -1
  }

  reset() {
    this._currFloor = 0
    this.stop()
  }

  letRidersOff() {
    this._riders = this._riders.filter(f => f !== this._currFloor)
  }

  letRidersOn() {
    const currFloor = this._floors[this._currFloor]
    while (!this.isFull && currFloor.hasRiderGoing(this._currDir)) {
      let rider = currFloor.getNextRiderGoing(this._currDir)
      this._riders.push(rider)
    }
  }

  stop() {
    // floor is visited
    this._visitedFloors.push(this._currFloor)
    // change direction if needed
    if (this.shouldChangeDir) {
      this.changeDir()
    }
    // 0+ riders get off
    this.letRidersOff()
    // 0+ riders get on
    this.letRidersOn()
  }

  simulate() {
    this.reset()

    while (this.isCalled || !this.isEmpty) {
      this.advance()
      if (this.shouldStop)
        this.stop()
    }

    if (this._visitedFloors[this._visitedFloors.length-1] !== 0)
      this.reset()

    return this._visitedFloors
  }
}


function theLift(queues, capacity) {
  const lift = new Lift(queues, capacity)
  return lift.simulate()
}

module.exports = theLift
