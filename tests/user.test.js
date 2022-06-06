// user.test.js --- Test suite for item routes

// Libraries:

require('dotenv').config();
const supertest = require('supertest');

// Modules:

const application = require('./../application');
const database = require('./../database');

// Code:

const URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

jest.setTimeout(20 * 1000);

describe('User', () => {
  beforeAll(async () => {
    // Initialize database
    database.connect(URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await database.disconnect();
    await database.connection.close();
  });

  describe('POST /login', () => {
    describe('Given user is registered...', () => {
      describe('Given password is correct...', () => {
        it('...returns cookie & 200', async () => {});
      });

      describe('Given password is not correct...', () => {
        it('...returns 404', async () => {});
      });
    });

    describe('Given user is not registered...', () => {
      it('...returns 404', async () => {});
    });
  });

  describe('GET /logout', () => {
    describe('Given user is logged in...', () => {
      it('...returns "logged out" message', async () => {});
    });
  });

  describe('POST /register', () => {
    describe('Given credentials are correct...', () => {
      it('...returns cookie & 200', async () => {});
    });
  });

  describe('GET /refresh_token', () => {
    describe('Given user is logged...', () => {
      it('...returns new cookie & 200', async () => {});
    });

    describe('Given user is not logged...', () => {
      it('...returns 404', async () => {});
    });
  });

  describe('GET /infor', () => {
    describe('Given user is logged...', () => {
      it('...returns user information', async () => {});
    });

    describe('Given user is not logged...', () => {
      it('...returns 404', async () => {});
    });
  });

  describe('GET /add_cart', () => {
    describe('Given user is logged...', () => {
      it('...adds user cart to database', async () => {});
    });

    describe('Given user is not logged...', () => {
      it('...returns 404', async () => {});
    });
  });

  describe('GET /history', () => {
    describe('Given user is logged...', () => {
      it('...returns user history', async () => {});
    });

    describe('Given user is not logged...', () => {
      it('...returns 404', async () => {});
    });
  });
});

// user.test.js ends here
