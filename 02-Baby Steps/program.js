var sumOfArgs = 0;

if (process.argv.length > 2) {
	for (var i = 2; i < process.argv.length; i++) {
		sumOfArgs += parseInt(process.argv[i]);
	};
}

console.log(sumOfArgs);