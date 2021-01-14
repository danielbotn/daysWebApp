<div align="center">

![Days Logo](https://i.ibb.co/MGYRd2t/days-github-logo.png)

[Click here to go to Days Demo website](https://days-web-app.vercel.app/)

</div>

<p align="center" color="#6a737d">
  A web application written in Svelte and Sapper, using Typescript
</p>

<div align="center">

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/makes-people-smile.svg)](http://forthebadge.com)
</div>

<div align="center">

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

</div>

Days is a mobile application written in react native. The source code for that project will be open sourced soon. On the other hand, this project is the upcoming web application.

This application should have the same functionality as the app. The following technology is used to make this happen.

- [Svelte](https://svelte.dev/) Front end technology similar to React or Vue.
- [Sapper](https://sapper.svelte.dev/) Next.js for the Svelte world
- [Rollup](https://rollupjs.org/guide/en/) Rollup is a module bundler for JavaScript similar to Webpack
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow.
- [Firebase](https://firebase.google.com/) DaaS platform by google
- [Typescript](https://www.typescriptlang.org/) Types added to Javascript
- [Dato CMS](https://www.datocms.com/) Headless CMS

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Deployment

This website is hosted on [Vercel](https://vercel.com/) A cloud platform for serverless deployment.  

To check out deployment logs and configuration go to: [Vercel Dashboard](https://vercel.com/dashboard)

This project uses continuous integration

```bash
  npm run build
  npm run export
  git add .
  git commit -m "🚀 your commit message"
  git push
```

Note! To add routes that are not linked via a href tag, add an invisible a tag, otherwise sapper wount export the route to the  
`__sapper__/export` folder

```html
  <div style="visibility: hidden; position: absolute">
    <a href="/dashboard">...</a>
  </div>
```

After the changes have been pushed to master, A Vercel deployment is triggered.

## Running the project

Once you have created the project, install dependencies and run the project in development mode:

```bash
cd daysWebApp
npm install
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.


## Dato CMS

Dato CMS is an awesome headless cms.  

![Dato CMS](https://media-exp1.licdn.com/dms/image/C4E0BAQHxGEQQYcciVw/company-logo_200_200/0/1548759861587?e=2159024400&v=beta&t=B08Jz5tM5dhYbiObXJ0W8oIB1Dd4y3DSJHslzN3Fuvs)


- [Dato CMS Graphql playground](https://cda-explorer.datocms.com/)
- [Dato CMS admin](https://days.admin.datocms.com/)
