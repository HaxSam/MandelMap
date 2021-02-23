function mandelbrot(canvas = document.createElement("canvas"), res) {
	const juliaCanvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");
	canvas.height = 2 * res;
	canvas.width = 3 * res;

	canvas.addEventListener("click", (e) => {
		console.log(e.clientX, e.clientY);
		julia(juliaCanvas, res, e.clientX, e.clientY);
	});

	for (let y = 0; y < canvas.height + 1; y++) {
		for (let x = 0; x < canvas.width + 1; x++) {
			let i = 0;
			let c = { re: -2 + x / res, im: -1 + y / res };
			let z = { re: 0, im: 0 };

			do {
				cach = z.re * z.im;
				z.re = z.re ** 2 - z.im ** 2 + c.re;
				z.im = 2 * cach + c.im;
				i++;
			} while (i < 255 && z.re ** 2 + z.im ** 2 < 4);
			const color = i.toString(16);
			ctx.fillStyle = `#${color}${color}${color}`;
			ctx.fillRect(x, y, 1, 1);
		}
	}
	ctx.fillStyle = "#048";
	ctx.fillRect(0, res, 3 * res, 1);
	ctx.fillRect(2 * res, 0, 1, 2 * res);
	document.body.append(canvas);
}
function julia(canvas, res, inputX, inputY) {
	const ctx = canvas.getContext("2d");
	canvas.height = 2 * res;
	canvas.width = 3 * res;

	for (let y = 0; y < canvas.height + 1; y++) {
		for (let x = 0; x < canvas.width + 1; x++) {
			let i = 0;
			let c = { re: -2 + inputX / res, im: 1 - inputY / res };
			let z = { re: -1.5 + x / res, im: 1 - y / res };

			do {
				cach = z.re * z.im;
				z.re = z.re ** 2 - z.im ** 2 + c.re;
				z.im = 2 * cach + c.im;
				i++;
			} while (i < 255 && z.re ** 2 + z.im ** 2 < 4);
			const color = i.toString(16);
			ctx.fillStyle = `#${color}${color}${color}`;
			ctx.fillRect(x, y, 1, 1);
		}
	}
	document.body.append(canvas);
}

mandelbrot(document.createElement("canvas"), 300);
