import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the dirname of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;
