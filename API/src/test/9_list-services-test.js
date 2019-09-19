const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('/GET list-services', () => {
    it('it should Get all list-services', (done) => {
        chai.request(app)
            .get('/lista-servicio/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

/*describe('/POST lista-servicio', () => {
    it('it sould post the lista-servicio info', (done) => {
        const ls = {
            id_empresa: 1,
            id_servicio: 1,
            precio: 2000
        };

        chai.request(app)
            .post('/lista-servicio/')
            .send(ls)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Lista Servicio Saved!');
                done();
            });
    });
});*/

describe('/GET one lista-servicio', () => {
    it('it should Get one lista-servicio', (done) => {
        chai.request(app)
            .get('/lista-servicio/1/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/PUT/:id lista-servicio', () => {
    it('it sould put the lista-servicio with the id = id', (done) => {
        const sub = {
            precio: 100
        };

        chai.request(app)
            .put('/lista-servicio/1/1')
            .send(sub)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Lista Servicio updated!');
                done();
            });
    });
});

describe('/DELETE/:id lista-servicio', () => {
    it('it should delete the lista-servicio with the id = id', (done) => {
        chai.request(app)
            .delete('/lista-servicio/2/2')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Lista Servicio deleted!');
                done();
            });
    });
});