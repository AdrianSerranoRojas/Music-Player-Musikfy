import app from "./server.js";
import config from "./config/config";
import connect from "./db/connect";

// uncomment if you need to seed the database before
import { seedProducts } from "./db/seed";

connect().then(async function onServerInit() {
    config.logger.info(`DB connected`);

  // uncomment if you need to seed the database before
    await seedProducts();

    app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
    });
});
