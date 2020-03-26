const server = require('../../server');
const supertest = require('supertest');
const request = supertest(server);
const prefix = '/api';

const categoria = require('./../model/categoria');

let record = {};

describe('Teste de rotas de categoria', () => {
    afterAll(async done => {

        done()
    });

    test('Salvar uma categoria', async done => {
        const categoria = {
            descricao: 'Bebidas'
        };

        const response = await request.post(`${prefix}/categoria`).send(categoria);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("descricao", categoria.descricao);
        expect(response.body).toHaveProperty("_id");

        done();
    });

    test('Atualizar uma categoria', async done => {
        const responseGet = await request.get(`${prefix}/categoria`);

        let _id = responseGet.body.docs[0]._id;
        let categoria = { descricao: 'Bebidas sem alcool' };

        const response = await request.put(`${prefix}/categoria/${_id}`).send(categoria);
        expect(response.statusCode).toBe(200);

        done();
    });

    // test('Deletar a categoria ', async done => {
    //     let categoria = {
    //         descricao: 'Sushi'
    //     };

    //     categoria = await categoriaController.insert(categoria);
    //     resposta = await request.delete(`${prefix}/categoria/${categoria._id}`).send(categoria);
    //     expect(resposta.statusCode).toBe(200);

    //     done()
    // });

    // test('Deve listar todos os categoria do banco de dados', async done => {
    //     let categorias = [
    //         {
    //             descricao: 'Bebidas'
    //         },
    //         {
    //             descricao: 'Lanches'
    //         },
    //         {
    //             descricao: 'Serviços'
    //         }
    //     ];

    //     await categoriaController.delete({ params: { id: undefined } });
    //     await categoriaController.insert(categorias);
    //     resposta = await request.get(`${prefix}/categoria`);
    //     expect(resposta.statusCode).toBe(200);
    //     const categoriaRetornados = resposta.body;
    //     expect(categoriaRetornados.length).toBe(3);

    //     done();
    // });
});