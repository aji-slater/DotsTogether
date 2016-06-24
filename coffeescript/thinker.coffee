@Thinker =

  coord: (that, direction) ->
    number = parseInt(that.css(direction))
    Math.floor number / 20

  pixl: (number) ->
    number * 20

  dotMatches: []

  notAlreadyObserved: (Y, X) ->
    for match in @.dotMatches
      return false if match[0] == Y and match[1] == X
    true

  gotClicked: (clickY, clickX) ->
    @.dotMatches = []
    @.dotMatches.push([clickY, clickX])
    @.recurse(clickY, clickX)
    Painter.removeMatches() if @.dotMatches.length > 2
    @.spiralOut()

  recurse: (currentY, currentX) ->
    for move in Game.neighbors
      neighborY = currentY + move[0]
      neighborX = currentX + move[1]
      currentVal = Game.board[currentY][currentX]
      continue if (@.evaluateEdges(neighborY, neighborX))
      neighborVal = Game.board[neighborY][neighborX]
      if currentVal == neighborVal and @.notAlreadyObserved(neighborY, neighborX)
        @.dotMatches.push([neighborY, neighborX])
        @.recurse(neighborY, neighborX)
      else
        continue

  spiralOut: ->
    fourDirections = [0, 1, 0, 1]
    fourMovements = [1, 1, -1, -1]
    currentDot = [Game.center, Game.center]

    # Game.board[currentDot[0]][currentDot[1]] = 5;
    # Painter.repaintOne(currentDot[0], currentDot[1]);

    # Act on the center

    # end acting on the center
    i = 1
    while i < Game.size + 1
    # for unit in [1..Game.size + 1]
    # for (var i = 1; i < Game.size + 1; i++) {

      j = 0
      while j < 4
      # for j in [0...4]
      # for (var j = 0; j < 4; j++) {
        if j == 2
        # if (j === 2) { i++; }
          i++

        l = 1
        while l <= i
        # for l in [1..i]
        # for (var l = 1; l <= i; l++) {
          currentDot[fourDirections[j]] += fourMovements[j]

          # Here's where a thing happens
          # Game.board[currentDot[0]][currentDot[1]] += 1;
          # if (Game.board[currentDot[0]][currentDot[1]] > 5) {
          #   Game.board[currentDot[0]][currentDot[1]] = 5;
          # }
          # Painter.repaintOne(currentDot[0], currentDot[1]);
          #
          # check if the dot is a ' '
          # if not just move on
          # if it is..
          # run the quadrant/slice finder to determine the direction the dot should come from.
          #

          # and ends here
          l++
        j++
      i++

  evaluateEdges: (evaluatingY, evaluatingX) ->
    if evaluatingY < 0 or evaluatingX < 0
      return true
    else if evaluatingY >= Game.size or evaluatingX >= Game.size
      return true
    else
    false

  whatQuadrant: (y, x) ->
    if y >= Game.center
      if x >= Game.center
        return 'Q3'
      else
        return 'Q4'
    else
      if x >= Game.center
        return 'Q2'
      else
        return 'Q1'