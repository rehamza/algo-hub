import express from 'express';
import { sort } from './problems/sort';
import { simplejs } from './problems/simplejs';
import test from './test';

const app = express();

app.use(express.json());

try {
	sort.bubbleSort();
	simplejs();
	test.test1();
} catch (err) {
	console.log('error', err);
}

export default app;
