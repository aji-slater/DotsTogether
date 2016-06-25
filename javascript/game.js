// Generated by CoffeeScript 1.10.0
(function() {
  var hasProp = {}.hasOwnProperty;

  this.Game = {
    board: [],
    size: 0,
    center: 0,
    dotsInPixels: 20,
    neighbors: [[-1, 0], [0, -1], [0, 1], [1, 0]],
    linesHash: {
      A: {
        m: 0.5,
        b: 0
      },
      B: {
        m: 2,
        b: 0
      },
      C: {
        m: -2,
        b: 0
      },
      D: {
        m: -0.5,
        b: 0
      }
    },
    initialize: function(size) {
      this.board = this.generateBoard(size);
      return this.calculateBValues();
    },
    generateBoard: function(size) {
      var buildingBoard, i, j, ref;
      if (size % 2 === 1) {
        this.size = size;
        this.center = Math.floor(size / 2);
        buildingBoard = [];
        for (i = j = 1, ref = size + 1; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
          buildingBoard.push(this.generateGameRow(size));
        }
        return buildingBoard;
      } else {
        alert('incompatible board size');
        return false;
      }
    },
    calculateBValues: function() {
      var centerPoint, line, ref, results;
      centerPoint = this.center;
      ref = this.linesHash;
      results = [];
      for (line in ref) {
        if (!hasProp.call(ref, line)) continue;
        this.linesHash[line].b = centerPoint + (this.linesHash[line].m * (-centerPoint));
        results.push(void 0);
      }
      return results;
    },
    generateGameRow: function(size) {
      var i, j, ref, row;
      row = [];
      for (i = j = 1, ref = size + 1; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        row.push(Math.floor(Math.random() * 5));
      }
      return row;
    },
    randomColorAssignment: function() {
      return Math.floor(Math.random() * 5);
    }
  };

}).call(this);

//# sourceMappingURL=game.js.map
