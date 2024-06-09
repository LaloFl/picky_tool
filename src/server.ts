import app from "./app";
import env from "./config/env";

const EXPRESS_PORT = env.EXPRESS_PORT || 3000;

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});
