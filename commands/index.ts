/**
 * Use JSDoc comments to define help and parameters for a CLI.
 * {cliName} will be replaced with an actual name of a CLI tool.
 *
 * @usage {cliName} inputs --param1 10 --param2 20
 *
 * @param {string[]} $inputs
 * @param {number}   [param1=20] some parameter for a CLI with a default value
 * @param {string}   param2 some parameter for a CLI
 */
export default async function main($inputs: string[], param1: number, param2?: string) {
  console.log("Hello World from Opaline!");
  console.log("Inputs: " + $inputs);
  console.log("Param 1: " + param1);
  console.log("Param 2: " + param2);
}