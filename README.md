# GameBox

## Description

Play party games with friends at https://www.gamebox.netlify.com!


## Screenshots

### Home Page

![Home Page](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/Home.png?raw=true)

### Lobby
![Lobby](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/Lobby.png?raw=true)

### Game Lobby
![Game Lobby](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/PopulatedLobby.png?raw=true)

### Rules
![Rules](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/Rules.png?raw=true)

### Categories
![Categories](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/Categories.png?raw=true)

### Host Is Picking a Category
![Host Category](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/Pacman.png?raw=true)

### Voting Page
![Voting Page](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/Voting.png?raw=true)

### Busted!
![Busted](https://github.com/Aidanchase/gamebox/blob/update/Readme/client/public/docs/Busted.png?raw=true)

## Project Setup

0. Fork this repo
1. Clone to your machine

## Getting Started

0. Update the .env file with your correct local information
1. Install dependencies: `npm i`
2. Fix to binaries for sass: `npm rebuild node-sass`
3. Run migrations: `npm run knex migrate:latest`
4. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
5. Run the server: `npm run local`
6. Visit `http://localhost:8080/`

## Environment Variables
### Add environment variables for: 

(replace values inside < > with the appriate values)

### API (/api/.env)

DEV_DATABASE_NAME=\<dev db name\>

DEV_DATABASE_USER=\<dev db username\>

DEV_DATABASE_PASSWORD=\<dev db password\>


PROD_DATABASE_NAME=\<prod db name\>

PROD_DATABASE_USER=\<prod db username\>

PROD_DATABASE_PASSWORD=\<prod db password\>

HOST=\<address of the db host\>

### Client (/client/.env)

REACT_APP_API_URL=\<url where the api is deployed\>

## Contributing

0. Fork and clone this repo!
1. Add new remote as the master branch ```$ git remote add absolute-master https://github.com/lukehorak/gamebox```
2. Pull from master to get latest stable version before working ```git pull absolute-master```
3. Checkout and switch to a new branch named as the feature you're working on ```get checkout -b pwn-noobs```
4. Do local tests
5. Push to your forked copy's branch on Github (not absolute-master) ```git push origin pwn-noobs```
6. Open pull request 
7. Wait for merge

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
