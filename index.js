const Funceb = require("@hal-wang/funceb").default;
const fs = require("fs");

exports.main = async (event) => {
  const funceb = new Funceb(event.path, "web");

  return {
    isBase64Encoded: true,
    statusCode: funceb.status,
    headers: { "Content-Type": funceb.mine },
    body: fs.readFileSync(funceb.filePath, "base64"),
  };
};
