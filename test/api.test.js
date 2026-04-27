const request = require('supertest');
const app = require('../Api1');

describe('Users API', () => {

    test('GET /users should return array', async () => {
        const res = await request(app).get('/users');

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST /users should create user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Zulu' });

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Zulu');
    });

});