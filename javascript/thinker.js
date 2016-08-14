// Generated by CoffeeScript 1.10.0
(function() {
  var hasProp = {}.hasOwnProperty;

  this.Thinker = {
    Painter: window.Painter,
    Game: window.Game,
    sliceMovementArray: [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]],
    coord: function(that, direction) {
      var number;
      number = parseInt(that.css(direction));
      return Math.floor(number / 30);
    },
    pixl: function(number) {
      return number * 30;
    },
    dotMatches: [],
    notAlreadyObserved: function(Y, X) {
      var k, len, match, ref;
      ref = this.dotMatches;
      for (k = 0, len = ref.length; k < len; k++) {
        match = ref[k];
        if (match[0] === Y && match[1] === X) {
          return false;
        }
      }
      return true;
    },
    gotClicked: function(clickY, clickX) {
      var results;
      this.dotMatches = [];
      this.dotMatches.push([clickY, clickX]);
      this.recurse(clickY, clickX);
      if (this.dotMatches.length > 2) {
        Painter.removeMatches();
        Game.addScore(this.dotMatches.length);
        Thinker.decrementMove(1);
      }
      results = [];
      while (this.Game.noMoreBlanks() !== true) {
        results.push(this.spiralOut());
      }
      return results;
    },
    whatDirection: function(dotY, dotX) {
      var directions, line, lineY, linesHash;
      directions = {};
      linesHash = this.Game.linesHash;
      for (line in linesHash) {
        if (!hasProp.call(linesHash, line)) continue;
        lineY = linesHash[line].m * dotX + linesHash[line].b;
        directions[line] = lineY > dotY;
      }
      return this.whatSlice(directions);
    },
    whatSlice: function(directions) {
      if (directions.A === true) {
        if (directions.C === true) {
          if (directions.B === true) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (directions.D === true) {
            return 2;
          } else {
            return 3;
          }
        }
      } else {
        if (directions.C === true) {
          if (directions.D === true) {
            return 7;
          } else {
            return 6;
          }
        } else {
          if (directions.B === true) {
            return 4;
          } else {
            return 5;
          }
        }
      }
    },
    recurse: function(currentY, currentX) {
      var currentVal, k, len, move, neighborVal, neighborX, neighborY, ref, results;
      ref = Game.neighbors;
      results = [];
      for (k = 0, len = ref.length; k < len; k++) {
        move = ref[k];
        neighborY = currentY + move[0];
        neighborX = currentX + move[1];
        currentVal = Game.board[currentY][currentX];
        if (this.evaluateEdges(neighborY, neighborX)) {
          continue;
        }
        neighborVal = Game.board[neighborY][neighborX];
        if (currentVal === neighborVal && this.notAlreadyObserved(neighborY, neighborX)) {
          this.dotMatches.push([neighborY, neighborX]);
          results.push(this.recurse(neighborY, neighborX));
        } else {
          continue;
        }
      }
      return results;
    },
    sliceMovement: function(slice) {
      return this.sliceMovementArray[slice];
    },
    spiralOut: function() {
      var _rand, currentDot, currentDotValue, currentX, currentY, directionality, drawFrom, fourDirections, fourMovements, i, j, k, l, m, movementValue, ref, results, sliceMoveDot;
      directionality = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      fourDirections = [0, 1, 0, 1];
      fourMovements = [1, 1, -1, -1];
      currentDot = [Game.center, Game.center];
      if (Game.board[currentDot[0]][currentDot[1]] === ' ') {
        _rand = Math.floor(Math.random() * 8);
        drawFrom = [Game.center + directionality[_rand][0], Game.center + directionality[_rand][1]];
        Game.board[currentDot[0]][currentDot[1]] = Game.board[drawFrom[0]][drawFrom[1]];
        Game.board[drawFrom[0]][drawFrom[1]] = ' ';
      }
      i = 1;
      results = [];
      while (i < Game.size + 1) {
        j = 0;
        for (j = k = 0; k < 4; j = ++k) {
          if (j === 2) {
            i++;
          }
          l = 1;
          for (l = m = 1, ref = i; 1 <= ref ? m <= ref : m >= ref; l = 1 <= ref ? ++m : --m) {
            currentDot[fourDirections[j]] += fourMovements[j];
            currentY = currentDot[0];
            currentX = currentDot[1];
            if (currentY >= this.Game.size || currentX >= this.Game.size) {
              continue;
            }
            if (currentY < 0 || currentX < 0) {
              continue;
            }
            currentDotValue = this.Game.board[currentDot[0]][currentDot[1]];
            if (currentDotValue === ' ') {
              movementValue = this.sliceMovement(this.whatDirection(currentY, currentX));
              sliceMoveDot = [currentY + movementValue[0], currentX + movementValue[1]];
              if (currentDot[0] === this.Game.size - 1 || currentDot[0] === 0 || currentDot[1] === this.Game.size - 1 || currentDot[1] === 0) {
                this.Game.board[currentY][currentX] = this.Game.randomColorAssignment();
                this.Painter.repaintOne(currentY, currentX);
              } else {
                this.Game.board[currentY][currentX] = this.Game.board[sliceMoveDot[0]][sliceMoveDot[1]];
                this.Game.board[sliceMoveDot[0]][sliceMoveDot[1]] = ' ';
                this.Painter.repaintOne(currentY, currentX);
                this.Painter.repaintOne(sliceMoveDot[0], sliceMoveDot[1]);
              }
            }
          }
        }
        results.push(i++);
      }
      return results;
    },
    evaluateEdges: function(evaluatingY, evaluatingX) {
      if (evaluatingY < 0 || evaluatingX < 0) {
        return true;
      } else if (evaluatingY >= Game.size || evaluatingX >= Game.size) {
        return true;
      } else {

      }
      return false;
    },
    whatQuadrant: function(y, x) {
      if (y >= Game.center) {
        if (x >= Game.center) {
          return 'Q3';
        } else {
          return 'Q4';
        }
      } else {
        if (x >= Game.center) {
          return 'Q2';
        } else {
          return 'Q1';
        }
      }
    },
    decrementMove: function(moves) {
      return Game.moves(-moves);
    },
    checkRules: function() {
      if (Game.dotsScored - (Game.fiftiesScored * 50) >= 50) {
        Game.movesLeft += 10;
        Game.fiftiesScored += 1;
      }
      if (Game.movesLeft === 0) {
        Painter.scoreboard();
        alert('Game over! Too bad so sad.');
        location.reload();
      }
      if (Game.movesLeft <= 3) {
        return $('h1').css('color', 'red');
      } else {
        return $('h1').css('color', 'black');
      }
    },
    iconClicked: function(that) {
      var thisX, thisY;
      thisY = Thinker.coord(that, 'top');
      thisX = Thinker.coord(that, 'left');
      Thinker.gotClicked(thisY, thisX);
      Thinker.checkRules();
      return Painter.scoreboard();
    }
  };

}).call(this);

//# sourceMappingURL=thinker.js.map
