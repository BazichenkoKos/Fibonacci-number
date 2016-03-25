function fibonacci(n){
	if (n !== 1 && n !== 2){
		return fibonacci(n-1) + fibonacci(n-2)  
	} else {
		return 1;
	};
	};
for (i=1; i<10; i++){
	console.log( fibonacci(i) );
	};
