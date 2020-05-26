const runTests = require('../../../RunTests/JavaScript/index')

/**
 * A function that determines how many rooms will be needed to schedule all the given meetings
 * @param { number[][] } meetings - An array of meetings. Each meeting is represented by an array of two elements determining start and end time
 * @returns { number } rooms - The number of room meetings that will be needed to succeed scheduling them all
 */
function meetingRooms( meetings ){
  let rooms = 1

  for( let i = 0; i < meetings.length; i++ ){

    let collisions = 0

    for ( let j = 0; j < meetings.length; j++ ){
      const meetingsOverlap = areMeetingsColliding( meetings[i], meetings[j] )
      if ( meetingsOverlap ) collisions++
    }

    if ( collisions > 1 ) rooms++
  }

  return Math.min( meetings.length, rooms )
}

/**
 * Helper function that determines if two meetings are colliding based on their schedules
 * @param { number[] } meetingA - An array of two numbers representing the start and end time of a meeting
 * @param { number[] } meetingB - An array of two numbers representing the start and end time of a meeting
 * @returns { boolean } - True or false if the two meetings collide
 */
function areMeetingsColliding( meetingA, meetingB ){
  for( let i = meetingA[0]; i < meetingA[1] - 1; i++ ){
    if ( i === meetingB[0] || i === meetingB[1] - 1 ) return true
  }
  return false
}

runTests( meetingRooms )
