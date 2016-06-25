$ ->

  $('.dot').on 'click', (event) ->
    that = $(@)
    # var thisY = Thinker.coord(parseInt($(this).css('top')))
    # var thisX = Thinker.coord(parseInt($(this).css('left')))
    thisY = Thinker.coord(that, 'top')
    thisX = Thinker.coord(that, 'left')
    Thinker.gotClicked(thisY, thisX)

    Thinker.decrementMove(1)
    Thinker.checkRules()
    Painter.scoreboard()

  # $(document).on('keyup', function() { Thinker.spiralOut(); });
