const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('Empresa', () => {
    it('it sould post the empresa info', (done) => {
        const empresa = {
            id_empresa: 0,
            nit: 2,
            nombre: "e1",
            direccion: "d1",
            telefono: "1122",
            zona: 1,
            latitud: 10.11,
            longitud: 10.11,
            id_municipio: 1,
            email: "e2",
            password: "1234"
        };

        chai.request(app)
            .post('/empresa/')
            .send(empresa)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Empresa Saved!');
                done();
            });
    });
});

describe('/GET one Empresa', () => {
    it('it should Get one empresa', (done) => {
        chai.request(app)
            .get('/empresa/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/GET Empresa', () => {
    it('it should Get all empresas', (done) => {
        chai.request(app)
            .get('/empresa/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/PUT/:id empresa', () => {
    it('it sould put the empresa with the id = id', (done) => {
        const empresa = {
            nit: 3,
            nombre: "e1",
            direccion: "d1",
            telefono: "1122",
            zona: 1,
            latitud: 10.11,
            longitud: 10.11,
            id_municipio: 1,
            email: "em",
            password: "1234"
        };

        chai.request(app)
            .put('/empresa/2')
            .send(empresa)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Empresa updated!');
                done();
            });
    });
});

describe('/DELETE/:id empresa', () => {
    it('it should delete the empresa with the id = id', (done) => {
        chai.request(app)
            .delete('/empresa/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Empresa deleted!');
                done();
            });
    });
});