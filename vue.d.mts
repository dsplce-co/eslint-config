import type { Linter } from "eslint";

export declare const vueConfigs: Linter.Config[];

declare function vue(...configs: Linter.Config[]): Linter.Config[];

export default vue;
