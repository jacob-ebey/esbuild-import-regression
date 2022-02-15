let esbuild = require("esbuild");

esbuild.build({
  write: true,
  outfile: "./dist/index.js",
  entryPoints: ["./index.js"],
  platform: "node",
  target: "node14",
  format: "cjs",
  plugins: [
    {
      name: "externals",
      setup(build) {
        build.onResolve({ filter: /.*/ }, ({ path }) => {
          if (path !== "uuid") return undefined;

          return {
            path,
            external: true,
          };
        });
      },
    },
  ],
});
