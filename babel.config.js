module.exports = function getConfig(api) {
    const env = api.env();
    api.cache.invalidate(() => env);
    const isNode = api.caller((caller) => caller && caller.target === "node");
  
    const presets = [
      [
        "@babel/preset-env",
        {
          targets: isNode ? {node: "10"} : {chrome: "58", ie: "11"},
          modules: false
        }
      ],
      [
        "@babel/preset-react",
        {
          throwIfNamespace: false // defaults to true
        }
      ]
    ];
  
    return {
      babelrcRoots: [".", "/*"],
      overrides: [
        {
          test: /\.js$/,
          presets: [...presets]
        },
        {
          test: /\.ts$/,
          presets: [...presets, "@babel/preset-typescript"]
        },
        {
          test: /\.tsx$/,
          presets: [...presets, "@babel/preset-typescript"]
        }
      ]
    };
  };
  