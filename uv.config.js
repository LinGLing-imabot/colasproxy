self.__uv$config = {
  prefix: "/service/",
  bare: "https://interstellar.network/uv/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/handler.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/sw.js",
};
