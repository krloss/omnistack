const {describe,expect,it} = require('@jest/globals')
const utils = require('../../src/config/utils')

describe('Unit test for Utils', () => {
    it('Generate Unique ID', () => {
        expect(utils.generateUniqueId()).toHaveLength(8)
    })
})
