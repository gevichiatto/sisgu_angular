# SisGUAngular #
## Sistema de Gerenciamento de Usuarios - Versão Frontend em Angular ##

### Início ###
Este é um sistema básico de gerenciamento de usuários.

### Pré requisitos ###
- NodeJs
- Java

### Passo-a-passo para execução do sistema: ###
#### I - Backend ####
1. Clone o projeto deste repositório :)

2. No diretório do repositório clonado, execute o seguinte comando para instalar as dependências do backend:
```
mvn clean install
```

3. Inicie o backend do sistema rodando o comando:
````
java -jar target/sisgu_angular-0.0.1-SNAPSHOT.jar
````

4. O backend do sistema roda no endereço http://localhost:8080 e o banco de dados pode ser acessado por meio do endereço http://localhost:8080/h2-console/, usando as credenciais contidas no arquivo ./src/main/resources/application.properties.

#### II - Frontend ####
1. Em outra instância do seu terminal, navegue até o diretório ./src/main/ui/sisguAngular e execute o seguinte comando para instalar as dependências do frontend:
````
npm install
````

2. Após a instalação das dependências, execute o seguinte comando para iniciar o serviço do frontend:
````
ng serve
````

3. Acesse o sistema por meio do endereço http://localhost:4200.

