- Website: https://yoga.solmazmohadjer.com/
- API endpoint: https://yoga-api-rho.vercel.app/api/endpoint/?id=solmaz
- GitHub: https://github.com/smohadjer/yoga.solmazmohadjer.com
- Vercel: https://vercel.com/saeid-fastmailfm/yoga-api

## Summary
The Website is a static HTML site hosted on GitHub Pages for free via a custom domain. There is a serverless Nodejs function that runs on a Vercel free account and returns next class of a teacher. This endpoint is invoked via Ajax on teachers pages. The markup of schedule page is generated via Nodejs from a json file via NPM scripts during build. On every commit to GitHub, GitHub actions builds and deploys the static site to GitHub Pages and Vercel deploys latest code to Vercel so api endpoint gets also updated. Everything is automated and is free.

## Running Website locally
- git clone https://github.com/smohadjer/yoga.solmazmohadjer.com.git yoga
- cd yoga
- npm install
- npm start

## Running API locally
- npm i -g vercel (installs Vercel CLI globally)
- vercel dev (when asked for settings, use `app` as root directory and `api` as outpout directory and `npm run build-api` as build command)
- Try api at http://localhost:3000/api/endpoint/?id=solmaz
