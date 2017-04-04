var should  = require('should');
var request = require('supertest');
var server  = require('../../../app');

describe('controllers', function() {

  describe('user_controller', function() {

    describe('GET /users', function() {

      it('should return an array of users', function(done) {

        request(server)
          .get('/api/v1/users')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body
              .should.be.an.instanceOf(Object).and.have.property('users').and
              .should.containEql([])

            done();
          });
      });

      /*it('should accept a name parameter', function(done) {

        request(server)
          .get('/api/v1/users')
          .query({ name: 'Scott'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
      });*/

    });

  });

});
