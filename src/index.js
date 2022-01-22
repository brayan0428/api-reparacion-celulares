import config from "../config";
import app from "./app";

const PORT = config.PORT;

async function main() {
  try {
    await app.listen(PORT);
    console.log(`Servidor corriendo en puerto ${PORT}`);
  } catch (error) {
    console.error(error.message);
  }
}

main();
