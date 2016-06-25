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
      m: 0.5
      b: 0
    B:
      m: 2
      b: 0
    C:
      m: -2
      b: 0
    D:
      m: -0.5
      b: 0

  initialize: (size) ->
    @board = @generateBoard(size)
    @calculateBValues()

  generateBoard: (size) ->
    if size % 2 == 1
      @size = size
      @center = Math.floor(size / 2)
      buildingBoard = []
      for i in [1..size]
        buildingBoard.push(this.generateGameRow(size))
      return buildingBoard
    else
      alert('incompatible board size')
      return false

  calculateBValues: ->
    centerPoint = @center
    for own line of @linesHash
      @linesHash[line].b = centerPoint + ( @linesHash[line].m * (-centerPoint))
      undefined


  generateGameRow: (size) ->
    row = []
    for i in [1..size]
      row.push(Math.floor(Math.random() * 5))
    row

  randomColorAssignment: ->
    return Math.floor(Math.random() * 5)

  noMoreBlanks: ->
    for y in [0...@size]
      for x in [0...@size]
        console.log "(#{y}, #{x})"
        return false if @board[y][x] == " " or @board[y][x] == undefined
    true
