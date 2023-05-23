import { start_mongo } from '$db/mongo';

console.log('Starting MongoDB connection...');
start_mongo()
	.then(() => {
		console.log('MongoDB Connection established');
	})
	.catch((e) => console.log(e));
