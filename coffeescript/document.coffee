$ ->

  $('.dot').on 'click', (event) ->
    that = $(@)
    # TODO needs a better name for this function
    Thinker.clickedEvent that
