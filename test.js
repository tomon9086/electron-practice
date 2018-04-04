const promisify = require("util").promisify
const exec = promisify(require("child_process").exec)

async function main() {
	console.log((await exec("echo hello >&2")))
}

main()
