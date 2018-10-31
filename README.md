# Cliente

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Laravel Consumer Angular customer restfull (PORTUGUESE AND ENGLISH)

NOTE: To clone this project is in the folder that you performed the server clone.

Eg: Project folder -> inside it has client and server.

1 - git clone https://github.com/thurdelima/Angular-client-for-Laravel-restfull.git client

2 - Enter the client directory

3 - Run the command npm install (if dont have angular-cli, npm install -g @angular/cli)

4 - In the src / app / folder we have the app-http.service.ts file. It is responsible for communicating with the server. In it we have a line of code that we will make a change.

this.httpOptions = {
      headers: new HttpHeaders ({
        'Authorization': 'Bearer',
      });
    }

Paste the personal access token on the side of the word Bearer (leave a keyboard space between the two).

Ex.:

this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzZTI5NWY4OTRlMTNlOTY1MDRkZGRhMTg2MzFmZDgzMTYxODg5MzhiNTIxN2Q2MzBjMTdjMmRmMjkyMjY1MzUyOTA2OTBhMjc1MDhiMDFkIn0.eyJhdWQiOiI1IiwianRpIjoiYzNlMjk1Zjg5NGUxM2U5NjUwNGRkZGExODYzMWZkODMxNjE4ODkzOGI1MjE3ZDYzMGMxN2MyZGYyOTIyNjUzNTI5MDY5MGEyNzUwOGIwMWQiLCJpYXQiOjE1NDA5NjAyMzEsIm5iZiI6MTU0MDk2MDIzMSwiZXhwIjoxNTcyNDk2MjMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hyoxBesPg8roaf-mIz17c_iQ7zkgx9YiPceyzG_UrXqMI1ZomhjXlxYWk_pbF7ymT7gf_JBgMDjEGkrkhPjJN-37Zp7PG-H35vOCwbZYBnZwrmLONg2UT8OmFVBzymGyt2qODefybYJeij1i_ygiQdwLBYWl1y0n_jLORA7PjNoenNpChxZsNaR7kRu0urvDzUEIMVSiVXSdEYPHoc2OG5eBeMASkl8nZW70fph2EkdI8bpcPDqm2q4v0eMbgx3mm6hl-I5IAgnN-LpurwtKxDX6lGFOCC0mJCfiiL-jYJ86pdsBW0uWTEX390hOouHXP2rh67ZTrqxEZqgOleud122ec0YCA2xvBJPQAcEa1uJ4DP7konulYxAh1AShQ-1oNkOBD_840zi7zZ2J6Qeru7n-QrKkjWEUK_aS3VgpAyQbl-kWMTajIVyF6hgafF8OGOe7FxoR3tGq0ENg6wh3v6hRFQ4faLHmDNJx0XjRGQE5yBwf768ljg7kEOeLGQYaGBUSHunx3M4GyXSPNJ9KAzC8rj81dZaE0nGaMTPe8xYFnMkm5_TygOeRv62SV2BIRBnRabMOtMi2L5FP2PAmag9dVvMJyS1GYJL-RAEyv1qFVddSfoh_T5nDsrSjzHlicumHQxFUlG9BqmOaw1v7XQMW9gcXDX5pelgdWl-jDkk',
      });


5 - After that, run the command ng serve and in another tab the server with php artisan. Already ready to realize the consumption of users.      
    

# Cliente Angular para consumo do Laravel restfull

NOTA: Para clonar este projeto esteja na pasta que você realizou o clone do servidor.

Ex.: Pasta projeto -> dentro dela tem client e servidor.

1 - git clone https://github.com/thurdelima/Angular-client-for-Laravel-restfull.git client

2 - Entrar no diretório client

3 - Rodar o comando npm install (caso não tenha o angular-cli, npm install -g @angular/cli)

4 - Na pasta src/app/ temos o arquivo app-http.service.ts. Ele é responsável pela comunicação com o servidor. Nele temos uma linha de código que realizaremos uma alteração. 

this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ',
      });
    }

Colar o personal access token do lado da palavra Bearer (deixe um espaço do teclado entre os dois).

Ex.:

this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzZTI5NWY4OTRlMTNlOTY1MDRkZGRhMTg2MzFmZDgzMTYxODg5MzhiNTIxN2Q2MzBjMTdjMmRmMjkyMjY1MzUyOTA2OTBhMjc1MDhiMDFkIn0.eyJhdWQiOiI1IiwianRpIjoiYzNlMjk1Zjg5NGUxM2U5NjUwNGRkZGExODYzMWZkODMxNjE4ODkzOGI1MjE3ZDYzMGMxN2MyZGYyOTIyNjUzNTI5MDY5MGEyNzUwOGIwMWQiLCJpYXQiOjE1NDA5NjAyMzEsIm5iZiI6MTU0MDk2MDIzMSwiZXhwIjoxNTcyNDk2MjMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hyoxBesPg8roaf-mIz17c_iQ7zkgx9YiPceyzG_UrXqMI1ZomhjXlxYWk_pbF7ymT7gf_JBgMDjEGkrkhPjJN-37Zp7PG-H35vOCwbZYBnZwrmLONg2UT8OmFVBzymGyt2qODefybYJeij1i_ygiQdwLBYWl1y0n_jLORA7PjNoenNpChxZsNaR7kRu0urvDzUEIMVSiVXSdEYPHoc2OG5eBeMASkl8nZW70fph2EkdI8bpcPDqm2q4v0eMbgx3mm6hl-I5IAgnN-LpurwtKxDX6lGFOCC0mJCfiiL-jYJ86pdsBW0uWTEX390hOouHXP2rh67ZTrqxEZqgOleud122ec0YCA2xvBJPQAcEa1uJ4DP7konulYxAh1AShQ-1oNkOBD_840zi7zZ2J6Qeru7n-QrKkjWEUK_aS3VgpAyQbl-kWMTajIVyF6hgafF8OGOe7FxoR3tGq0ENg6wh3v6hRFQ4faLHmDNJx0XjRGQE5yBwf768ljg7kEOeLGQYaGBUSHunx3M4GyXSPNJ9KAzC8rj81dZaE0nGaMTPe8xYFnMkm5_TygOeRv62SV2BIRBnRabMOtMi2L5FP2PAmag9dVvMJyS1GYJL-RAEyv1qFVddSfoh_T5nDsrSjzHlicumHQxFUlG9BqmOaw1v7XQMW9gcXDX5pelgdWl-jDkk',
      });
    }

 5 - Após isso, rodar o comando ng serve e em outra aba o servidor com php artisan. Já está pronto para realizar o consumo de usuários.   