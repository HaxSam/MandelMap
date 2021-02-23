const res = 35;
let plott = [];

for (let y = 0; y < 2 * res; y++) {
	plott.push(new Array(3 * res * 2));
	for (let x = 0; x < 3 * res * 2; x++) {
		let i = 0;
		let c = { re: -2 + x / res / 2, im: -1 + y / res };
		let z = { re: 0, im: 0 };

		do {
			cach = z.re * z.im;
			z.re = z.re ** 2 - z.im ** 2 + c.re;
			z.im = 2 * cach + c.im;
			i++;
		} while (i < 255 && z.re ** 2 + z.im ** 2 < 4);
		if (z.re ** 2 + z.im ** 2 < 4) plott[y][x] = "#";
		else plott[y][x] = " ";
	}
}

plott.forEach((x) => {
	console.log(x.join(""));
});
