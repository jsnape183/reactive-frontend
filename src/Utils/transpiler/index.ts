import * as Babel from "@babel/standalone";

export const transpileModule = (module: string): string | null | undefined => {
  return Babel.transform(module, {
    presets: ["react"],
    plugins: Babel.availablePlugins[
      "@babel/plugin-transform-modules-commonjs"
    ] as any[],
  }).code;
};
