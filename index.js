import { app } from "./server/app.js";
import './server/db/mongoose.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('express server listening on port ' + PORT);
});