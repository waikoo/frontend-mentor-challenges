import { info } from '$lib/stores.js';

info.subscribe((info) => console.table({ info }));
