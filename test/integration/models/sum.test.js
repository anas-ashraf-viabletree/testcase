
var util = require('util');
var supertest = require('supertest');

describe('User (model)', () => {

  describe('#findBestStudents()', () => {
    it('should return 5 users', (done) => {
        supertest(sails.hooks.http.app)
            .post('/api/v1/math/sum')
            .send({ num1: 1, num2: 2 })
            .expect(400)
            .end(done);




    });
  });

});
