const {afterAll,beforeEach,describe,expect,it} = require('@jest/globals')
const api = require('supertest')

const db = require('../../src/config/db')
const app = require('../../src/app')

describe('Integration test for NGO', () => {
    beforeEach(async () => {
        await db.migrate.rollback()
        await db.migrate.latest()
    })

    afterAll(async () => {
        await db.destroy()
    })

    it('Create new NGO', async () => {
        const response = await api(app).post('/ngos')
            .set('Accept','application/json')
            .send({
                name:"Quinta",
                email:"quinta@email.net",
                phone:"5050505050",
                city:"Nova Lima",
                uf:"MG"
            })
            .expect('Content-Type',/json/)
            .expect(200)
        
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})
