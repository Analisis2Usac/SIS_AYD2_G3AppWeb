const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

/*describe('/GET Empleado', () => {
    it('it should Get all empleados', (done) => {
        chai.request(app)
            .get('/empleado/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/GET one Empleado', () => {
    it('it should Get one empleado', (done) => {
        chai.request(app)
            .get('/empleado/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/POST Empleado', () => {
    it('it sould post the empleado info', (done) => {
        const emp = {
            id_empleado: 0,
            id_empresa: 1,
            email: "email1"
        };

        chai.request(app)
            .post('/empleado/')
            .send(emp)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Empleado Saved!');
                done();
            });
    });
});

describe('/PUT/:id Empleado', () => {
    it('it sould put the empleado with the id = id', (done) => {
        const muni = {
            id_empresa: 1,
            email: "email1"
        };

        chai.request(app)
            .put('/empleado/2')
            .send(muni)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Empleado updated!');
                done();
            });
    });
});

describe('/DELETE/:id empleado', () => {
    it('it should delete the empleado with the id = id', (done) => {
        chai.request(app)
            .delete('/empleado/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Empleado deleted!');
                done();
            });
    });
});*/