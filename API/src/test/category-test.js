const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);

describe('/GET cate', () => {
    it('it should Get all cats', (done) => {
        chai.request(app)
            .get('/categoria/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/POST cat', () => {
    it('it sould post the cat info', (done) => {
        const cat = {
            id_categoria: 0,
            nombre: "cat1",
        };

        chai.request(app)
            .post('/categoria/')
            .send(cat)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Categoría Saved!');
                done();
            });
    });
});

describe('/GET one cat', () => {
    it('it should Get one cat', (done) => {
        chai.request(app)
            .get('/categoria/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});

describe('/PUT/:id doc', () => {
    it('it sould put the doc with the id = id', (done) => {
        const cat = {
            nombre: "catNueva"
        };

        chai.request(app)
            .put('/categoria/2')
            .send(cat)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('Status');
                res.body.should.have.property('Status').eq('Categoría updated!');
                done();
            });
    });
});

describe('/DELETE/:id cat', () => {
    it('it should delete the cat with the id = id', (done) => {
        chai.request(app)
            .delete('/categoria/3')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eq('Categoría deleted!');
                done();
            });
    });
});