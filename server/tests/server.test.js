const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {ToDo} = require('./../models/todo');

beforeEach((done) => {
    ToDo.remove({}).then(() => {
        return done();
    })
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
       var text = 'Test todo text';
       request(app)
           .post('/todos')
           .send({text: text})
           .expect(201)
           .expect((res) => {
               expect(res.body.text).toBe(text);
           })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                ToDo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
        });
    });


    it('Should not create ToDo with invalid data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                ToDo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done(e));
        });
    });
});
