import { operationProcessor } from '../src/homework/operationProcessor';

const input = require('./data/input');
const expectedOutput = require('./data/output');

describe("Json processor", function () {
    it('Process input JSON file', function () {
        expect(operationProcessor(input)).toBe(expectedOutput);
    });
});

// npm test  .\\test\\operationProcessor.test.js
