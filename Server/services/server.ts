import express, { Express, Request, Response } from "express";

const host = process.env.LOCAL_PATH;
const port = Number(process.env.LOCAL_PORT) || 3000;

export function initServer(): Express {
  const app: Express = express();

  const jsonMiddleware = express.json();
  app.use(jsonMiddleware);

  app.use((req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

  app.listen(port, host, () => {
    console.log(`Server running on http://${host || "localhost"}:${port}`);
  });

  return app;
}