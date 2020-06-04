import express from 'express';

const app = express();

const users = [
    'Luan',
    'Matheus',
    'Matheus',
    'Marcelo'
];

app.get('/users/:id',(request,response)=>{
    const id = Number(request.params.id);
    const user = users[id];
    console.log('Listagem de usuários');
    return response.json(user);
});

app.get('/users',(request,response)=>{
    console.log('Listagem de usuários');
    response.json(users);
});

app.post('/users',(request,response)=>{
    const user = {
        name: 'Luan',
        email: 'lu*****@outlook.com'
    };
    return response.json(user);
});
app.listen(3333);