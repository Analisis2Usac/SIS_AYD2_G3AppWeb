const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('/GET municipio', () => {
    it('it should Get all municipios', (done) => {
        chai.request(app)
            .get('/municipio/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/GET one municipio', () => {
    it('it should Get one municipio', (done) => {
        chai.request(app)
            .get('/municipio/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/POST municipio', () => {
    it('it sould post the municipio info', (done) => {
        const muni = {
            id: 0,
            nombre: "nombre_municipio",
        };

        chai.request(app)
            .post('/municipio/')
            .send(muni)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Municipio Saved!');
                done();
            });
    });
});

describe('/PUT/:id municipio', () => {
    it('it sould put the municipio with the id = id', (done) => {
        const muni = {
            nombre: "nombre_modificado",
        };

        chai.request(app)
            .put('/municipio/1')
            .send(muni)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Municipio updated!');
                done();
            });
    });
});

describe('/DELETE/:id municipio', () => {
    it('it should delete the municipio with the id = id', (done) => {
        chai.request(app)
            .delete('/municipio/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Municipio deleted!');
                done();
            });
    });
});