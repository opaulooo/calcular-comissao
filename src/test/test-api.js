var expect = require('chai').expect;
var request = require('request');
const port = require('server.js');

it('API está rodando', function (done) {
    request('http://localhost:8100/api', (error, response, body) => {
        expect(body).to.equal('\n\nAPI na porta ' + port + '...\n');
        done();
    });
});