import EventBus from './EventBus.js';

class Model extends EventBus {
	constructor(options) {
		super();
		[('data', 'update', 'create', 'delete', 'get')].forEach((key) => {
			if (key in options) {
				this[key] = options[key];
			}
		});
	}
	create() {}
	delete() {}
	update() {}
	get() {}
}

export default Model;
