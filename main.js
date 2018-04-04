const ipcRenderer = require("electron").ipcRenderer

const el = document.getElementById("hello")

async function hoge() {
	ipcRenderer.send("exec", "echo hoge")
}

// main()

ipcRenderer.on("response", (event, arg) => {
	console.log(arg)
})
