"use client";

import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

const STYLES = {
  width: "100%",
};

export default function ArcanaTerminal() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      theme: {
        background: "#F7F7F7",
        foreground: "#F7F7F7",
      },
      cursorBlink: true,
      cursorStyle: "block",
      cursorWidth: 10,
      cursorInactiveStyle: "block",
    });

    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      term.open(terminalRef.current);
      term.focus();

      term.onData((data) => {
        socket.send(data);
      });
    };

    socket.onmessage = (event) => {
      term.write(event.data);
    };

    return () => {
      socket.close();
      term.dispose();
    };
  }, []);

  return (
    <>
      <h1>Arcana Engine</h1>
      <div
        className="terminal-container"
        ref={terminalRef}
        tabIndex={0}
        style={STYLES}
      />
    </>
  );
}
