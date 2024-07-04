import app from './app.js';

const start = async () => {

  app.listen(process.env.PORT, () => {
    console.log(`Listening en port: ${process.env.PORT}`);
  });
};

start();