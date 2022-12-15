import { app } from "./server/app.js";
import './server/db/mongoose.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('listen on port ' + PORT);
});