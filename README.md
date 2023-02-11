# Desafio NDM

Desafio do processo seletivo NDM (front-end). Aplicação em React.

## Instalação

Instale o projeto com yarn

```bash
  yarn
  cd teste-ndm-react
```

Com as variáveis de ambiente configuradas, rode o comando seed para o Banco de dados. Esse comando é importante para a autenticação dentro da aplicação.

```bash
  yarn seed
```

Feito isso, inicie a aplicação:

```bash
  yarn dev
```

## Apêndice

Após iniciar a aplicação, você pode conferí-la no link abaixo

Se estiver rodando localmente:
[acessar aplicação](http://127.0.0.1:5173/)

Para acessar os endpoints, é preciso realizar login dentro da aplicação.
Para tanto, certifique-se que o comando de seed foi executado no back end com sucesso

Você deve conseguir realizar o login com as seguintes credenciais (as mesmas indicadas no swagger):

```bash
  email: 'any_email@gmail.com'
  password: 'any_pass'
```

## Stacks utilizadas

**Front-end:** React, Typescript

**Back-end:** Node, NestJS, Typescript

**BD:** PostgreSQL

## Autores

- [@darcanj0](https://www.github.com/darcanj0)
