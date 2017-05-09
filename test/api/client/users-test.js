'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var customFormats = module.exports = function(zSchema) {
  // Placeholder file for all custom-formats in known to swagger.json
  // as found on
  // https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#dataTypeFormat

  var decimalPattern = /^\d{0,8}.?\d{0,4}[0]+$/;

  /** Validates floating point as decimal / money (i.e: 12345678.123400..) */
  zSchema.registerFormat('double', function(val) {
    return !decimalPattern.test(val.toString());
  });

  /** Validates value is a 32bit integer */
  zSchema.registerFormat('int32', function(val) {
    // the 32bit shift (>>) truncates any bits beyond max of 32
    return Number.isInteger(val) && ((val >> 0) === val);
  });

  zSchema.registerFormat('int64', function(val) {
    return Number.isInteger(val);
  });

  zSchema.registerFormat('float', function(val) {
    // should parse
    return Number.isInteger(val);
  });

  zSchema.registerFormat('date', function(val) {
    // should parse a a date
    return !isNaN(Date.parse(val));
  });

  zSchema.registerFormat('dateTime', function(val) {
    return !isNaN(Date.parse(val));
  });

  zSchema.registerFormat('password', function(val) {
    // should parse as a string
    return typeof val === 'string';
  });
};

customFormats(ZSchema);

var validator = new ZSchema({});
var supertest = require('supertest');
var api = supertest('http://localhost:10010'); // supertest init;
var expect = chai.expect;

describe('/users', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "users"
        ],
        "properties": {
          "users": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "firstname": {
                  "type": "string"
                },
                "lastname": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                },
                "birthdate": {
                  "type": "string"
                },
                "country": {
                  "type": "string"
                },
                "state": {
                  "type": "string"
                },
                "phone": {
                  "type": "string"
                },
                "created_at": {
                  "type": "string"
                },
                "updated_at": {
                  "type": "string"
                }
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/api/v1/users')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "users"
        ],
        "properties": {
          "users": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "firstname": {
                  "type": "string"
                },
                "lastname": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                },
                "birthdate": {
                  "type": "string"
                },
                "country": {
                  "type": "string"
                },
                "state": {
                  "type": "string"
                },
                "phone": {
                  "type": "string"
                },
                "created_at": {
                  "type": "string"
                },
                "updated_at": {
                  "type": "string"
                }
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.get('/api/v1/users')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });
  });

  describe('post', function() {
    it('should respond with 201 Created', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "user"
        ],
        "properties": {
          "code": {
            "type": "number"
          },
          "user": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "firstname": {
                "type": "string"
              },
              "lastname": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "birthdate": {
                "type": "string"
              },
              "country": {
                "type": "string"
              },
              "state": {
                "type": "string"
              },
              "phone": {
                "type": "string"
              },
              "created_at": {
                "type": "string"
              },
              "updated_at": {
                "type": "string"
              }
            }
          }
        }
      };

      /*eslint-enable*/
      api.post('/api/v1/users')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
          username: 'billybob',
          password: '123456789',
          firstname: 'billy',
          lastname: 'bob',
          email: 'billybob@test.com',
          birthdate: '2000-01-01',
          country: 'CH',
          state: 'VD',
          phone: '+41 00 000 00 00'
      })
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 400 Bad Request', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "type",
          "messages",
          "fields"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "type": {
            "type": "string"
          },
          "messages": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "fields": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      };

      /*eslint-enable*/
      api.post('\api\v1\\users')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
          username: 'billybob',
          password: '123456789123456789123',
          firstname: 'billy',
          lastname: 'bob',
          email: 'billybob',
          birthdate: '01-01-2000',
          country: 'CH',
          state: 'VD',
          phone: '+41 00 000 00 00'
      })
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

  });

});
