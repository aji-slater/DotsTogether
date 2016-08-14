@Painter =

  choices: ['alpha', 'delta', 'bravo', 'charlie', 'echo', 'foxtrot']

  color: (num) ->
    @.choices[num]

  drawBoard: ->
    xPos = 0
    yPos = 0
    y = 0
    while y < Game.size
    # y for y in [0..Game.size] by 1
    # # for (var y = 0; y < Game.size; y++) {
      x = 0
      while x < Game.size
      # x for x in [0..Game.size] by 1
      # for (var x = 0; x < Game.size; x++) {
        $('main').append @.makeMeADiv(y, x)
        newestDot = $('.dot').last()
        newestDot.css('top', yPos)
        newestDot.css('left', xPos)
        xPos += Game.dotsInPixels
        x++
      xPos = 0
      yPos += Game.dotsInPixels
      y++

  removeMatches: ->
    for match in Thinker.dotMatches
      # for i in [0..Thinker.dotMatches.length]
      # for (var i = 0; i < Thinker.dotMatches.length; i++) {
      removingY = match[0]
      removingX = match[1]
      byebyeDot = $(".pos-#{removingY}-#{removingX}")
      Game.board[removingY][removingX] = ' '
      # byebyeDot.remove()

  repaintOne: (y, x) ->
    Painter.removeColorClasses(y, x)
    $(".pos-#{y}-#{x}").addClass(this.color(Game.board[y][x]))

  removeColorClasses: (y, x) ->
    $(".pos-#{y}-#{x}").removeClass('alpha')
    $(".pos-#{y}-#{x}").removeClass('bravo')
    $(".pos-#{y}-#{x}").removeClass('charlie')
    $(".pos-#{y}-#{x}").removeClass('delta')
    $(".pos-#{y}-#{x}").removeClass('echo')

  makeMeADiv: (y, x) ->
    "<div class='dot #{Painter.color(Game.board[y][x])} pos-#{y}-#{x}'></div>"

  scoreboard: ->
    $('span#moves_left').html(Game.movesLeft)
    $('span#dots_scored').html(Game.dotsScored)
    Game.resetCurrentMove()
