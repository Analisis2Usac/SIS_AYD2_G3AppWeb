const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

/*describe('/GET servicio', () => {
    it('it should Get all servs', (done) => {
        chai.request(app)
            .get('/servicio/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/POST serv', () => {
    it('it sould post the serv info', (done) => {
        const serv = {
            id_servicio: 0,
            nombre: "serv1",
            id_categoria: 1
        };

        chai.request(app)
            .post('/servicio/')
            .send(serv)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Servicio Saved!');
                done();
            });
    });
});

describe('/GET one serv', () => {
    it('it should Get one serv', (done) => {
        chai.request(app)
            .get('/servicio/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/PUT/:id serv', () => {
    it('it sould put the serv with the id = id', (done) => {
        const serv = {
            nombre: "servNueva",
            id_categoria: 1
        };

        chai.request(app)
            .put('/servicio/2')
            .send(serv)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Servicio updated!');
                done();
            });
    });
});

describe('/DELETE/:id serv', () => {
    it('it should delete the serv with the id = id', (done) => {
        chai.request(app)
            .delete('/servicio/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Servicio deleted!');
                done();
            });
    });
});*/