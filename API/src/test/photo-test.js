const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('/GET Photo', () => {
    it('it should Get all photos', (done) => {
        chai.request(app)
            .get('/foto/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/GET one Photo', () => {
    it('it should Get one foto', (done) => {
        chai.request(app)
            .get('/foto/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/POST Photo', () => {
    it('it sould post the photo info', (done) => {
        const emp = {
            id_foto: 0,
            ruta: "ruta1",
            id_empleado: 1
        };

        chai.request(app)
            .post('/foto/')
            .send(emp)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Foto Saved!');
                done();
            });
    });
});

describe('/PUT/:id Photo', () => {
    it('it sould put the photo with the id = id', (done) => {
        const muni = {
            ruta: "rutaNueva",
            id_empleado: 1
        };

        chai.request(app)
            .put('/foto/2')
            .send(muni)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Foto updated!');
                done();
            });
    });
});

describe('/DELETE/:id photo', () => {
    it('it should delete the photo with the id = id', (done) => {
        chai.request(app)
            .delete('/foto/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Foto deleted!');
                done();
            });
    });
});