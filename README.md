# My First Public React Project Built with Create React App + Bootstrap + MockForMe + GitHub + Vercel

![Stack](https://ik.imagekit.io/py9r3vcv5/stack.png?updatedAt=1762772835070)

Check running project on Vercel: https://firstreactprojecttest1.vercel.app/

## Install Dependencies
`yarn install` or `npm install`

## Run Project 
`yarn start` OR `npm start`

## In this project I have used:
- **Create React App** to create React Application
- **Bootstrap** for CSS
- MockApis, to render the data on the page using **MockForMe** (MockForMe integration is super fast only 2 lines of code is required)
  - Used the official NPM package https://www.npmjs.com/package/mockforme
  - Validate application in multiple scenerios
  - Test application in slow network using `MockForMe Delay` feature
  - Created mockapis in `MockForMe dashboard` https://dashboard.mockforme.com, `documentation` https://docs.mockforme.com
- Deploy the application on `Vercel` (Vercel is quite handy you just need to provide the public github repository path)

To integrate `mockforme` just install `MockForMe NPM Package` and initialise `mockforme` with **Access token** in application entry point.
You can also view **mockforme integration** in file: `src/index.js`
```
import { mockforme } from 'mockforme';

mockforme('ACCESS_TOKEN').run()
```

> **_NOTE:_**  I have committed my mockforme token intentionally so anyone check application running.
> This stack can improve your development efficiency and quality of releases.
