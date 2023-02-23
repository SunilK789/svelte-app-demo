export function clickOutside(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('outClick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export function longpress(node, duration) {
	let timer;

	const handleMousedown = () => {
		console.log('handleMousedown triggered!');
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, duration);
	};

	const handleMouseup = () => {
		console.log('handleMouseup triggered!');
		clearTimeout(timer);
	};

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);

	return {
		update(newDuration) {
			console.log('Inside update()', newDuration);
			duration = newDuration;
		},
		destroy() {
			console.log('destroy() triggered!');
			clearTimeout(timer);
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
		}
	};
}
