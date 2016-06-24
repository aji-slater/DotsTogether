@Game =
  board: []
  size: 0
  center: 0
  dotsInPixels: 20
  neighbors:         [[-1, 0]
              [0, -1]
                              [0, 1]
                      [1, 0]]
  linesHash:
    A:
      m: -0.5
      b: 0
    B:
      m: -2
      b: 0
    C:
      m: 2
      b: 0
    D:
      m: 0.5
      b: 0

  initialize: (size) ->
    @.board = @.generateBoard(size)
    @.calculateBValues()

  generateBoard: (size) ->
    if size % 2 == 1
      @.size = size
      @.center = Math.floor(size / 2)
      buildingBoard = []
      for i in [1..size+1]
      # for (var i = 1; i < size + 1; i++) {
        buildingBoard.push(this.generateGameRow(size))
      return buildingBoard
    else
      alert('incompatible board size')
      return false

  calculateBValues: ->
    console.log(@linesHash)
    for own line of @linesHash
      # n = line.m * ( - Game.center )
      # line.b = n + Game.center
      console.log(@linesHash.A)
      undefined


  generateGameRow: (size) ->
    row = []
    for i in [1..size+1]
    # for (var i = 1; i < size + 1; i++) {
      row.push(Math.floor(Math.random() * 5))
    row
