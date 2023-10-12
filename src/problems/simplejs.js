export const simplejs = () => {
	// console.log(name);
	// let name = 'Mike';
	// console.log(name);
	// const childFunc = () => {
	// 	console.log(name);
	// 	let name = 'Dave';
	// 	console.log(name);
	// };
	// childFunc();
	// console.log(name);

	// output

	// reference Error | undefined
	// Mike            | Mike
	// Mike            | undefined
	// Dave            | Dave
	// Mike            | Mike

	// for (var i = 0; i < 5; i++) {
	// 	setTimeout(() => console.log(i));
	// }

	// output

	// 5 , 5 ,5 , 5, 5

	// function outer(v) {
	// 	let baseprice = 5 || v;
	// 	function inner() {
	// 		console.log('hello', baseprice);
	// 	}

	// 	return inner;
	// }

	// const closureFn = outer();
	// closureFn();

	// var name = 'in global';
	// var obj = {
	// 	name: 'in obj',
	// 	show() {
	// 		console.log(this.name);
	// 	},
	// };
	// var obj1 = {
	// 	name: 'in obj1',
	// 	show() {
	// 		var showInner = function () {
	// 			console.log(this.name);
	// 		};
	// 		showInner();
	// 	},
	// };

	// obj.show();
	// obj1.show();

	// setTimeout(() => {
	// 	console.log('timeout');
	// });

	// let i = 0;
	// while (i < 100) i++;
	// Promise.resolve()
	// 	.then(() => console.log('promise1'))
	// 	.then(() => console.log('promise2'));
	// // Output of following
	// for (i = 0; i < 3; ++i) {
	// 	setTimeout(() => console.log(i));
	// }

	function turnOn(machine) {
		return (machine = {
			isOn: true,
		});
	}
	var computer = {
		isOn: false,
	};

	const m1 = turnOn(computer);
	console.log(computer.isOn);

	// let x = 10;
	// let y = x;
	// y = 3;
	// console.log('//', y, x);

	let x = { x: 3 }; // array and object copy the reference
	let y = x;
	y.x = 5;
	console.log('//', y, x);

	// true
};
