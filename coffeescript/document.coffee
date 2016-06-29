$ ->
  timeoutID = 0

  $('.dot').on('mousedown', ->
    window.running = true
    timeoutID = setTimeout superClick, 1000
    )

  $('.dot').on('mouseup', ->
      clearTimeout(timeoutID)
      that = $(@)
      Thinker.iconClicked that if window.running
      window.running = false
    )

  $('.dot').on('mouseout', ->
      clearTimeout(timeoutID)
    )

superClick = ->
  alert 'super!'
