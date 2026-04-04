import React, { useMemo, useRef, useState } from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({ windowName, windowState, setWindowState }) => {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState([
		"Welcome to Portfolio OS terminal.",
		"Run help to see available commands.",
	]);
	const contentRef = useRef(null);

	const commands = useMemo(
		() => ({
			help: () =>
				"Commands: help, whoami, skills, projects, date, echo [text], pwd, clear",
			whoami: () => "vaibhavbharade",
			skills: () => "React, JavaScript, Node.js, CSS/SCSS, UI engineering",
			projects: () => "Use the GitHub window to browse featured projects.",
			date: () => new Date().toLocaleString(),
			echo: (args) => (args.length ? args.join(" ") : ""),
			pwd: () => "/Users/vaibhavbharade/Desktop/OS",
			clear: () => "__CLEAR__",
		}),
		[]
	);

	const runCommand = (raw) => {
		const trimmed = raw.trim();
		if (!trimmed) {
			return;
		}

		const parts = trimmed.split(" ");
		const command = parts[0].toLowerCase();
		const args = parts.slice(1);

		setHistory((prev) => [...prev, `guest@portfolio:~$ ${trimmed}`]);

		if (!commands[command]) {
			setHistory((prev) => [...prev, `Command '${command}' not found.`]);
			return;
		}

		const result = commands[command](args);
		if (result === "__CLEAR__") {
			setHistory([]);
			return;
		}

		if (result) {
			setHistory((prev) => [...prev, result]);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		runCommand(input);
		setInput("");
		requestAnimationFrame(() => {
			if (contentRef.current) {
				contentRef.current.scrollTop = contentRef.current.scrollHeight;
			}
		});
	};

	return (
		<MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
			<section className="cli-page">
				<div className="cli-banner">
					<h2>Portfolio Terminal</h2>
					<p className="cli-banner__hint">Type help to discover commands</p>
				</div>
				<div className="cli-terminal-wrap">
					<div className="cli-terminal" ref={contentRef}>
						{history.map((line, idx) => (
							<p key={`${line}-${idx}`}>{line}</p>
						))}
					</div>
					<form className="cli-input-row" onSubmit={onSubmit}>
						<label htmlFor="cli-input">vaibhavbharade:~$</label>
						<input
							id="cli-input"
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							autoComplete="off"
							autoFocus
						/>
					</form>
				</div>
			</section>
		</MacWindow>
	);
};

export default Cli;
