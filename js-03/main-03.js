// * {
// 	border: 0;
// 	box-sizing: border-box;
// 	margin: 0;
// 	padding: 0;
// }
:root {
	--hue: 223;
	--bg: hsl(var(--hue),10%,90%);
	--fg: hsl(var(--hue),10%,10%);
	font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
}
.zagruzka {
	background-color: var(--bg);
	color: var(--fg);
	font: 1em/1.5 sans-serif;
	height: 100vh;
	display: grid;
	place-items: center;
	transition: background-color 0.3s;
}
main {
	padding: 1.5em 0;
}

.pl,
.pl__worm {
	animation-duration: 3s;
	animation-iteration-count: infinite;
}
.pl {
	animation-name: bump;
	animation-timing-function: linear;
	width: 8em;
	height: 8em;
}
.pl__ring {
	stroke: hsla(var(--hue),10%,10%,0.1);
	transition: stroke 0.3s;
}
.pl__worm {
	animation-name: worm;
	animation-timing-function: cubic-bezier(0.42,0.17,0.75,0.83);
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
	:root {
		--bg: hsl(var(--hue),10%,10%);
		--fg: hsl(var(--hue),10%,90%);
	}
	.pl__ring {
		stroke: hsla(var(--hue),10%,90%,0.1);
	}
}

/* Animations */
@keyframes bump {
	from,
	42%,
	46%,
	51%,
	55%,
	59%,
	63%,
	67%,
	71%,
	74%,
	78%,
	81%,
	85%,
	88%,
	92%,
	to { transform: translate(0,0); }
	44% { transform: translate(1.33%,6.75%); }
	53% { transform: translate(-16.67%,-0.54%); }
	61% { transform: translate(3.66%,-2.46%); }
	69% { transform: translate(-0.59%,15.27%); }
	76% { transform: translate(-1.92%,-4.68%); }
	83% { transform: translate(9.38%,0.96%); }
	90% { transform: translate(-4.55%,1.98%); }
}
@keyframes worm {
	from { stroke-dashoffset: 10; }
	25% { stroke-dashoffset: 295; }
	to { stroke-dashoffset: 1165; }
}