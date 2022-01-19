### Please use gmail account to experience full functionality of this app.





package.js:
"NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client",


server.js:
line 16
app.use(
    cors({
      credentials: true,
      origin: true,
    })
  );


  {withCredentials: true}