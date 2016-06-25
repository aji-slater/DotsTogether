describe('directional algorithms', function() {
  it('correctly identifies a dot in slice 0', function() {
    var directions = {A: true, B: false, C: true, D: true};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(0);
  });

  it('correctly identifies a dot in slice 1', function() {
    var directions = {A: true, B: true, C: true, D: true};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(1);
  });

  it('correctly identifies a dot in slice 2', function() {
    var directions = {A: true, B: true, C: false, D: true};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(2);
  });

  it('correctly identifies a dot in slice 3', function() {
    var directions = {A: true, B: true, C: false, D: false};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(3);
  });

  it('correctly identifies a dot in slice 4', function() {
    var directions = {A: false, B: true, C: false, D: false};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(4);
  });

  it('correctly identifies a dot in slice 5', function() {
    var directions = {A: false, B: false, C: false, D: false};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(5);
  });

  it('correctly identifies a dot in slice 6', function() {
    var directions = {A: false, B: false, C: true, D: false};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(6);
  });

  it('correctly identifies a dot in slice 7', function() {
    var directions = {A: false, B: false, C: true, D: true};
    var sliceInt = window.Thinker.whatSlice(directions);
    expect(sliceInt).toBe(7);
  });
});
