/**
 * Solution 1
 * 
 * Single function with algorithm modeling elevator behavior
 * 
 */

function theLift(queues, capacity) {
  const visitedFloors = [];

  let currFloor = 0;
  let currDir = 1;  // 1 = up, -1 = down

  let elevator = [];

  const isAnyoneWaiting = () => queues.some(q => q.length > 0);
  const isCurrentFloor = floor => floor === currFloor;
  const isFloorBeyondCurrent = floor => currDir > 0 ? floor > currFloor : floor < currFloor;

  // while there are people waiting or in the elevator:
  while (isAnyoneWaiting() || elevator.length) {

    const currQueue = queues[currFloor] || [];

    // if no passengers are going past curr floor in current direction
    // (including those on that may get on at the current floor)
    // AND no one remains waiting past curr floor:
    const hasRidersGoingInCurrDir = elevator.some(isFloorBeyondCurrent);
    const isAnyoneBeyondWaiting = queues.filter((q, floor) => isFloorBeyondCurrent(floor)).some(q => q.length > 0);

    let isAnyoneHereGoingBeyond = currQueue.some(isFloorBeyondCurrent);
    const ridersRemaining = elevator.filter(destFloor => !isCurrentFloor(destFloor)).length;
    const canAnyoneGoingBeyondBoard = isAnyoneHereGoingBeyond && (ridersRemaining < capacity);

    const shouldChangeDir = !(hasRidersGoingInCurrDir || isAnyoneBeyondWaiting || canAnyoneGoingBeyondBoard);
    if (shouldChangeDir) {
      // switch direction
      currDir *= -1;
      isAnyoneHereGoingBeyond = currQueue.some(isFloorBeyondCurrent);
    }

    // if a rider needs to get off OR anyone waiting on curr floor is going in curr direction:
    const hasRidersGettingOff = elevator.some(isCurrentFloor);

    if (hasRidersGettingOff || isAnyoneHereGoingBeyond) {
      // elevator makes a stop (floor is visited)
      visitedFloors.push(currFloor);
      // people get off
      elevator = elevator.filter(destFloor => !isCurrentFloor(destFloor));
      // for each person waiting in the curr floor's queue:
      const newRiderQueuePositions = [];
      currQueue.forEach((destFloor, queuePosition) => {
        // if person is going in curr dir AND elevator is not at capacity:
        if (isFloorBeyondCurrent(destFloor) && elevator.length < capacity) {
          // person leaves queue and joins elevator
          newRiderQueuePositions.push(queuePosition);
          elevator.push(destFloor);
        }
      });
      // update current floor's queue
      queues[currFloor] = currQueue.filter((_, i) => !newRiderQueuePositions.includes(i));
    }

    // elevator moves to next floor
    currFloor += currDir;
  }

  // ensure ground floor is recorded as first and last visit
  if (visitedFloors[0] !== 0) {
    visitedFloors.unshift(0);
  }
  if (visitedFloors[visitedFloors.length-1] !== 0) {
    visitedFloors.push(0);
  }

  return visitedFloors;
}

module.exports = theLift;
