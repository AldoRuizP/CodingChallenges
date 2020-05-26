import sys
sys.path.insert(1, sys.path[0] + '/../../../RunTests/Python')
from run_test import run_tests

def meeting_rooms( meetings ):
  """ A function that determines how many rooms will be needed to schedule all the given meetings

  Arguments:
      meetings { number[][] } -- An array of meetings. Each meeting is represented by an array of two elements determining start and end time

  Returns:
      number --  The number of room meetings that will be needed to succeed scheduling them all
  """

  rooms = 1

  for meeting_a in meetings:
    collisions = 0

    for meeting_b in meetings:
      meetings_collide = are_meetings_colliding( meeting_a, meeting_b )
      if meetings_collide:
        collisions += 1

    if collisions > 1:
      rooms += 1

  return rooms


def are_meetings_colliding( meeting_a, meeting_b ):
  """ Helper function that determines if two meetings are colliding based on their schedules

  Arguments:
      meeting_a { num[] } --  An array of two numbers representing the start and end time of a meeting
      meeting_b { num[] } --  An array of two numbers representing the start and end time of a meeting

  Returns:
      boolean -- True or false if the two meetings collide
  """
  for time in range( meeting_a[0], meeting_a[1] - 1 ):
    if time == meeting_b[0] or time == meeting_b[1] - 1:
      return True

  return False


run_tests( meeting_rooms )


