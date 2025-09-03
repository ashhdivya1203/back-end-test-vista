// src/index.ts
import app from './app';

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
