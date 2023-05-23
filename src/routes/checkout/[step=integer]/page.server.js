import { subscription } from '$db/subscription';


export const load = async () => {
	const db = await subscription.find()
	console.log(db);
  return {
    subscription: db;
  }
};
