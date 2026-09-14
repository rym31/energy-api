<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Conventions de l'API

Cette API suit les conventions de conception suivantes, appliquées de façon cohérente à toutes les ressources :

- **Préfixe global** : toutes les routes commencent par `/api`.
- **Versioning** : versioning par URI, version courante `v1` (ex. `/api/v1/buildings`). La version par défaut est `1`.
- **Nommage des ressources** : noms de ressources au pluriel, en anglais (ex. `buildings`, `health`).
- **Chemins d'URL** : en `kebab-case`.
- **Corps JSON** : propriétés en `camelCase`.
- **Dates** : format ISO 8601, en UTC (ex. `2026-08-26T14:30:00Z`).
- **Format de données** : JSON en entrée et en sortie (`Content-Type: application/json`).

La version d'URI s'applique globalement (`/api/v1/...`), y compris à la ressource `health`.

### Ressource `buildings`

| Méthode | Route                  | Description                          |
| ------- | ----------------------- | ------------------------------------ |
| GET     | `/api/v1/buildings`     | Liste tous les bâtiments             |
| GET     | `/api/v1/buildings/:id` | Récupère un bâtiment par identifiant |
| POST    | `/api/v1/buildings`     | Crée un nouveau bâtiment             |

**Corps de création** (`POST /api/v1/buildings`) :

```json
{
  "name": "Pavillon principal",
  "address": "7000, rue Marie-Victorin",
  "yearBuilt": 2005
}
```

**Corps de réponse** :

```json
{
  "id": 1,
  "name": "Pavillon principal",
  "address": "7000, rue Marie-Victorin",
  "yearBuilt": 2005,
  "createdAt": "2026-08-26T14:30:00.000Z"
}
```

Une requête `GET /api/v1/buildings/:id` avec un identifiant inexistant retourne un code `404 Not Found`.

**Exemples curl** :

```bash
curl http://localhost:3000/api/v1/buildings

curl http://localhost:3000/api/v1/buildings/1

curl -X POST http://localhost:3000/api/v1/buildings \
  -H "Content-Type: application/json" \
  -d '{"code":"PC","name":"Pavillon principal","address":"7000, rue Marie-Victorin","yearBuilt":1965}'
```

### Ressource `rooms`

| Méthode | Route               | Description                    |
| ------- | -------------------- | ------------------------------- |
| GET     | `/api/v1/rooms`      | Liste tous les locaux           |
| GET     | `/api/v1/rooms/:id`  | Récupère un local par identifiant |
| POST    | `/api/v1/rooms`      | Crée un nouveau local           |
| PATCH   | `/api/v1/rooms/:id`  | Modifie un local existant       |
| DELETE  | `/api/v1/rooms/:id`  | Supprime un local               |

**Corps de création** (`POST /api/v1/rooms`) :

```json
{
  "code": "S-013",
  "buildingId": 1,
  "floor": 2,
  "type": "Informatique",
  "capacity": 30
}
```

**Corps de réponse** :

```json
{
  "id": 1,
  "code": "S-013",
  "buildingId": 1,
  "floor": 2,
  "type": "Informatique",
  "capacity": 30,
  "createdAt": "2026-08-26T14:30:00.000Z"
}
```

Une requête `GET /api/v1/rooms/:id`, `PATCH /api/v1/rooms/:id` ou `DELETE /api/v1/rooms/:id` avec un identifiant inexistant retourne un code `404 Not Found`. Une suppression réussie retourne un code `204 No Content`.

**Exemples curl** :

```bash
curl http://localhost:3000/api/v1/rooms

curl -X POST http://localhost:3000/api/v1/rooms \
  -H "Content-Type: application/json" \
  -d '{"code":"S-013","buildingId":1,"floor":2,"type":"Informatique","capacity":30}'

curl -X PATCH http://localhost:3000/api/v1/rooms/1 \
  -H "Content-Type: application/json" \
  -d '{"capacity":25}'

curl -X DELETE http://localhost:3000/api/v1/rooms/1
```

### Ressource `health`

| Méthode | Route               | Description          |
| ------- | -------------------- | --------------------- |
| GET     | `/api/v1/health`     | Retourne l'état du service |

**Corps de réponse** :

```json
{
  "status": "ok",
  "timestamp": "2026-08-26T14:30:00.000Z"
}
```

**Exemple curl** :

```bash
curl http://localhost:3000/api/v1/health
```

### Gestion des erreurs

Les erreurs sont retournées au format `application/problem+json`, conformément à la RFC 7807 :

```json
{
  "type": "about:blank",
  "title": "Not Found",
  "status": 404,
  "detail": "Aucun bâtiment ne correspond à cet identifiant.",
  "instance": "/api/v1/buildings/999"
}
```

## Documentation Swagger / OpenAPI

La documentation interactive de l'API est générée automatiquement avec `@nestjs/swagger` :

- **Swagger UI** : [http://localhost:3000/docs](http://localhost:3000/docs)
- **Document OpenAPI (JSON)** : [http://localhost:3000/docs/openapi.json](http://localhost:3000/docs/openapi.json)

Chaque endpoint y décrit son résumé, ses paramètres, le schéma de son corps de requête/réponse, ainsi que les codes de statut possibles (succès et erreurs).

## Politique de versionnement

L'API utilise un versionnement par URI (ex. `/api/v1/...`).

- **V1** est actuellement la seule version active.
- Les changements rétrocompatibles (ex. ajout d'un champ optionnel) sont livrés directement dans V1.
- Les changements non rétrocompatibles (ex. renommage ou suppression d'un champ, changement de comportement) entraînent l'introduction d'une nouvelle version, V2.
- Lorsqu'une nouvelle version est publiée, l'ancienne version est dépréciée puis maintenue pendant une période de transition avant d'être retirée, afin de laisser le temps aux consommateurs de migrer.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
