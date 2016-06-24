// Generated by CoffeeScript 1.10.0
(function() {
  this.Painter = {
    choices: ['alpha', 'delta', 'bravo', 'charlie', 'echo', 'foxtrot'],
    color: function(num) {
      return this.choices[num];
    },
    drawBoard: function() {
      var newestDot, results, x, xPos, y, yPos;
      xPos = 0;
      yPos = 0;
      y = 0;
      results = [];
      while (y < Game.size) {
        x = 0;
        while (x < Game.size) {
          $('main').append(this.makeMeADiv(y, x));
          newestDot = $('.dot').last();
          newestDot.css('top', yPos);
          newestDot.css('left', xPos);
          xPos += Game.dotsInPixels;
          x++;
        }
        xPos = 0;
        yPos += Game.dotsInPixels;
        results.push(y++);
      }
      return results;
    },
    removeMatches: function() {
      var byebyeDot, i, len, match, ref, removingX, removingY, results;
      ref = Thinker.dotMatches;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        match = ref[i];
        removingY = match[0];
        removingX = match[1];
        byebyeDot = $(".pos-" + removingY + "-" + removingX);
        Game.board[removingY][removingX] = ' ';
        results.push(byebyeDot.remove());
      }
      return results;
    },
    repaintOne: function(y, x) {
      Painter.removeColorClasses(y, x);
      return $(".pos-" + y + "-" + x).addClass(this.color(Game.board[y][x]));
    },
    removeColorClasses: function(y, x) {
      $(".pos-" + y + "-" + x).removeClass('alpha');
      $(".pos-" + y + "-" + x).removeClass('bravo');
      $(".pos-" + y + "-" + x).removeClass('charlie');
      $(".pos-" + y + "-" + x).removeClass('delta');
      return $(".pos-" + y + "-" + x).removeClass('echo');
    },
    makeMeADiv: function(y, x) {
      return "<div class='dot " + (Painter.color(Game.board[y][x])) + " pos-" + y + "-" + x + "'></div>";
    }
  };

}).call(this);

//# sourceMappingURL=painter.js.map