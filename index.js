const Funceb = require("@hal-wang/funceb").default;

exports.main = async (event) => {
  const funceb = new Funceb(event.path, "web");
  return {
    statusCode: funceb.status,
    headers: { "Content-Type": funceb.mine },
    body: funceb.content,
  };
};
