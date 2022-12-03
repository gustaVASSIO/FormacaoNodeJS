# API Games

Esta API serve para realizar o CRUD de games.

## Endpoints

### GET /games
Esse endpoint é responsável por realizar a listagem dos jogos cadastrados no banco de dados.

### Parâmetros
Nenhum.

### Respostas
## OK 200 - O usuário recebera a lista de games<br>
```
{
    "games": [
        {
            "id": 1,
            "title": "Call of Duty Black Ops III",
            "year": 2017,
            "price": 80,
            "createdAt": "2022-11-29T19:18:31.000Z",
            "updatedAt": "2022-12-01T13:25:23.000Z"
        },
        {
            "id": 2,
            "title": "Overwatch",
            "year": 2016,
            "price": 60,
            "createdAt": "2022-11-29T19:19:32.000Z",
            "updatedAt": "2022-11-29T19:19:32.000Z"
        },
        {
            "id": 3,
            "title": "God Of War 4",
            "year": 2018,
            "price": 120,
            "createdAt": "2022-11-29T19:20:05.000Z",
            "updatedAt": "2022-11-29T19:20:05.000Z"
        },
        {
            "id": 5,
            "title": "Minecraft",
            "year": 2011,
            "price": 40,
            "createdAt": "2022-11-30T12:14:02.000Z",
            "updatedAt": "2022-11-30T12:14:02.000Z"
        },
        {
            "id": 6,
            "title": "Assassin's Creed Syndicate",
            "year": 2015,
            "price": 50,
            "createdAt": "2022-11-30T12:17:19.000Z",
            "updatedAt": "2022-11-30T12:17:19.000Z"
        },
        {
            "id": 7,
            "title": "Silent Hill 2 ",
            "year": 2002,
            "price": 10,
            "createdAt": "2022-11-30T18:41:25.000Z",
            "updatedAt": "2022-12-01T13:26:59.000Z"
        },
        {
            "id": 8,
            "title": "Far cry 4",
            "year": 2016,
            "price": 80,
            "createdAt": "2022-12-02T17:14:22.000Z",
            "updatedAt": "2022-12-02T17:14:22.000Z"
        },
        {
            "id": 9,
            "title": "CSGO",
            "year": 2011,
            "price": 50,
            "createdAt": "2022-12-03T20:12:57.000Z",
            "updatedAt": "2022-12-03T20:19:37.000Z"
        }
    ]
}
```


## Falha na autenticação 401 - Ocorreu algum erro no processo de autenticação com a API.<br>
***Motivos:*** Token Inválido - O token utilizado para a verificação é invalido.<br>
Token Expirou - O tempo de vida do Token expirou.

## Endpoints

### GET /games/:id
Esse endpoint é responsável por realizar a listagem de um jogo específico

### Parâmetros
O id do jodo a ser listado

### Respostas
## OK 200 - O usuário recebera o game requisitado
Falha na autenticação 400 - Ocorreu algum erro no processo de autenticação com a API. 
***Motivos:*** Token Inválido - O token utilizado para a verificação é invalido.
Token Expirou - O tempo de vida do Token expirou

