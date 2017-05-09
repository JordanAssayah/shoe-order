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

describe('/users/1', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "user"
        ],
        "properties": {
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
      api.get('\api\v1\\users\\1')
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
          "user"
        ],
        "properties": {
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
      api.get('\api\v1\\users\\1')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Not Found', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "message"
        ]
      };

      /*eslint-enable*/
      api.get('\api\v1\\users\\45')
      .set('Content-Type', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Not Found', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "message"
        ]
      };

      /*eslint-enable*/
      api.get('\api\v1\\users\\45')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

  });

  describe('put', function() {
    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message",
          "user"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
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
      api.put('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/json')
      .send({
      })
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
          "code",
          "message",
          "user"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
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
      api.put('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
          username: 'DATA GOES HERE',
          password: 'DATA GOES HERE',
          firstname: 'DATA GOES HERE',
          lastname: 'DATA GOES HERE',
          email: 'DATA GOES HERE',
          birthdate: 'DATA GOES HERE',
          country: 'DATA GOES HERE',
          state: 'DATA GOES HERE',
          phone: 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Not Found', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.put('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/json')
      .send({
      })
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Not Found', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.put('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
          username: 'DATA GOES HERE',
          password: 'DATA GOES HERE',
          firstname: 'DATA GOES HERE',
          lastname: 'DATA GOES HERE',
          email: 'DATA GOES HERE',
          birthdate: 'DATA GOES HERE',
          country: 'DATA GOES HERE',
          state: 'DATA GOES HERE',
          phone: 'DATA GOES HERE'
      })
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });
  });

  describe('patch', function() {
    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message",
          "user"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
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
      api.patch('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/json')
      .send({
      })
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
          "code",
          "message",
          "user"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
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
      api.patch('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
          username: 'DATA GOES HERE',
          password: 'DATA GOES HERE',
          firstname: 'DATA GOES HERE',
          lastname: 'DATA GOES HERE',
          email: 'DATA GOES HERE',
          birthdate: 'DATA GOES HERE',
          country: 'DATA GOES HERE',
          state: 'DATA GOES HERE',
          phone: 'DATA GOES HERE'
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Not Found', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.patch('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/json')
      .send({
      })
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Not Found', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.patch('\api\v1\\users\\{1}')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
          username: 'DATA GOES HERE',
          password: 'DATA GOES HERE',
          firstname: 'DATA GOES HERE',
          lastname: 'DATA GOES HERE',
          email: 'DATA GOES HERE',
          birthdate: 'DATA GOES HERE',
          country: 'DATA GOES HERE',
          state: 'DATA GOES HERE',
          phone: 'DATA GOES HERE'
      })
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });
  });

  describe('delete', function() {
    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.del('/api/v1/users/1')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });

    it('should respond with 404 Not Found', function(done) {
      /*eslint-disable*/
      var schema = {
        "required": [
          "code",
          "message"
        ],
        "type": "object",
        "properties": {
          "code": {
            "type": "number"
          },
          "message": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      api.del('/api/v1/users/1')
      .set('Content-Type', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);

        expect(validator.validate(res.body, schema)).to.be.true;
        done();
      });
    });
  });

});
