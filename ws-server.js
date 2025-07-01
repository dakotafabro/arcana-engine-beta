const { WebSocketServer } = require("ws");
const { spawn } = require("child_process");
const { createServer } = require("http");
const path = require("path");

const PORT = 8080;
const httpServer = createServer();
const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", (ws) => {
  console.log("🔌 Client connected");

  const cli = spawn(
    path.join(__dirname, "haskell-backend", "arcana-engine-cli")
  );

  // Send Haskell output to frontend terminal
  cli.stdout.on("data", (data) => {
    ws.send(data.toString());
  });

  cli.stderr.on("data", (data) => {
    ws.send(`Error: ${data.toString()}`);
  });

  cli.on("close", () => {
    ws.send("❌ CLI closed.");
    ws.close();
  });

  // Buffer input from the terminal
  let inputBuffer = "";

  ws.on("message", (msg) => {
    const str = msg.toString();

    if (str === "\r") {
      // Enter key: send full line to Haskell CLI
      cli.stdin.write(inputBuffer + "\n");
      inputBuffer = "";
      ws.send("\r\n"); // Move to a new line in the terminal
    } else if (str === "\u007F") {
      // Backspace key
      if (inputBuffer.length > 0) {
        inputBuffer = inputBuffer.slice(0, -1);
        ws.send("\b \b"); // visually erase character
      }
    } else {
      // Regular character
      inputBuffer += str;
      ws.send(str); // echo typed character
    }
  });

  ws.on("close", () => {
    cli.kill();
  });
});

httpServer.listen(PORT, () => {
  console.log(`✅ WebSocket server listening on ws://localhost:${PORT}`);
});
