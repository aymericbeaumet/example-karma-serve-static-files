'use strict';

describe('Karma', function() {

  it('should expose the /public directory under /base/public', function(done) {
    $.get('/base/public/karma.md', function(data) {
      expect(data).toEqual('Hey you!\n');
      done();
    })
      .fail(done)
    ;
  });

});
