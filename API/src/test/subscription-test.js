const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

/*describe('/GET subs', () => {
    it('it should Get all subs', (done) => {
        chai.request(app)
            .get('/suscripcion/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/POST sub', () => {
    it('it sould post the sub info', (done) => {
        const sub = {
            id_suscripcion: 0,
            total: 150,
            fecha_inicio: "2016-12-30",
            fecha_final: "2016-01-30",
            limite_servicios: 100,
            id_empresa: 1
        };

        chai.request(app)
            .post('/suscripcion/')
            .send(sub)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Suscripción Saved!');
                done();
            });
    });
});

describe('/GET one sub', () => {
    it('it should Get one sub', (done) => {
        chai.request(app)
            .get('/suscripcion/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/PUT/:id sub', () => {
    it('it sould put the sub with the id = id', (done) => {
        const sub = {
            total: 150,
            fecha_inicio: "2016-12-30",
            fecha_final: "2016-01-30",
            limite_servicios: 1,
            id_empresa: 1
        };

        chai.request(app)
            .put('/suscripcion/2')
            .send(sub)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Suscripción updated!');
                done();
            });
    });
});

describe('/DELETE/:id sub', () => {
    it('it should delete the sub with the id = id', (done) => {
        chai.request(app)
            .delete('/suscripcion/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Suscripción deleted!');
                done();
            });
    });
});*/