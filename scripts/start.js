#!/usr/bin/env node

const file = process.argv[2];

if (!file) {
	console.error("Usage: npm start -- <filename>");
	console.error("Example: npm start -- day-1-secret-entrance.js");
	process.exit(1);
}

const { spawn } = require("child_process");
const path = require("path");

const filePath = path.join(__dirname, "..", "dist", "tasks", file);
const nodeProcess = spawn("node", [filePath], {
	stdio: "inherit",
	shell: true,
});

nodeProcess.on("error", (error) => {
	console.error(`Error: ${error.message}`);
	process.exit(1);
});

nodeProcess.on("exit", (code) => {
	process.exit(code || 0);
});
