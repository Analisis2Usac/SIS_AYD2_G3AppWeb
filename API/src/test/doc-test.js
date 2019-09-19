const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

/*describe('/GET doc', () => {
    it('it should Get all docs', (done) => {
        chai.request(app)
            .get('/documento/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/POST doc', () => {
    it('it sould post the doc info', (done) => {
        const doc = {
            id_documento: 0,
            documento: "doc1",
            id_empleado: 1
        };

        chai.request(app)
            .post('/documento/')
            .send(doc)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Documento Saved!');
                done();
            });
    });
});

describe('/GET one doc', () => {
    it('it should Get one doc', (done) => {
        chai.request(app)
            .get('/documento/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/PUT/:id doc', () => {
    it('it sould put the doc with the id = id', (done) => {
        const doc = {
            documento: "rutaNueva",
            id_empleado: 1
        };

        chai.request(app)
            .put('/documento/2')
            .send(doc)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Documento updated!');
                done();
            });
    });
});

describe('/DELETE/:id doc', () => {
    it('it should delete the doc with the id = id', (done) => {
        chai.request(app)
            .delete('/documento/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Documento deleted!');
                done();
            });
    });
});*/