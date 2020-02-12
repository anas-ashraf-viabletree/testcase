var supertest = require('supertest');

describe('UserController.login', () => {

  describe('#login()', () => {
    it('should redirect to /my/page', (done) => {
      supertest(sails.hooks.http.app)
          .post('/api/v1/math/sum')
                .send({ num1: 1, num2: 2 })
                .expect(200)
                .end(done);
    });
  });

});
