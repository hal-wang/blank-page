"use strict";
require("@sfajs/static");
const SfaCloudbase = require("@sfajs/cloudbase").default;

exports.main = async (event, context) => {
  return await new SfaCloudbase(event, context)
    .use(async (ctx, next) => {
      await next();
      if (!!ctx.bag("STATIC_FILE")) {
        ctx.res.isBase64Encoded = true;
      }
    })
    .use(async (ctx, next) => {
      if (ctx.req.path != "") {
        ctx.req.setPath("");
      }
      await next();
    })
    .useStatic({
      dir: "web",
      encoding: "base64",
      method: "ANY",
    })
    .run();
};
