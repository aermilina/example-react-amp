const fs = require("node:fs");
const path = require("node:path");
const YAML = require("yaml");

const ROOT = path.resolve(__dirname, "..");

module.exports.readConfig = (serverName) => {
  return YAML.parse(
    fs.readFileSync(path.join(ROOT, "config", `${serverName}.yaml`)).toString(),
  );
};
