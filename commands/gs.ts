import { exec } from "child_process";

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
export default async function main(...args: any[]) {
  const child = exec(`git status ${[...args].join(" ")}`);
  if (child.stdout) {
    child.stdout.on("data", (data) => {
      console.log(data);
    });
  }
  if (child.stderr) {
    child.stderr.on("data", (data) => {
      console.error(data);
    });
  }
}
