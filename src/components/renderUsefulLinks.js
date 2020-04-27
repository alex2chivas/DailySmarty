const renderUsefulLinks = link_url => {
	let indexLocation = link_url.lastIndexOf('/');
	let subStringUrl = link_url.substring(indexLocation + 1, link_url.length);
	let modifiedSubStringUrl;

	if (typeof subStringUrl === 'string' && subStringUrl.length > 0) {
		modifiedSubStringUrl = subStringUrl.split('-').join(' ').replace(/^\w/, c => {
			return c.toUpperCase();
		});
		return modifiedSubStringUrl;
	}

	if (typeof subStringUrl === 'string' && subStringUrl.length === 0) {
		subStringUrl = link_url.slice(0, indexLocation);
		const lastIndex = subStringUrl.lastIndexOf('/');
		subStringUrl = link_url.substring(lastIndex + 1, link_url.length - 1);
		modifiedSubStringUrl = subStringUrl.split('-').join(' ').replace(/^\w/, c => {
			return c.toUpperCase();
		});
	}

	if (subStringUrl.includes('.html')) {
		subStringUrl.link_url.subStringUrl(0, link_url.length - 5);
	}

	if (subStringUrl.includes('.htm')) {
		subStringUrl.link_url.subStringUrl(0, link_url.length - 4);
	}

	if (subStringUrl.includes('.com')) {
		subStringUrl.link_url.subStringUrl(0, link_url.length - 4);
	}

	return modifiedSubStringUrl;
};

export default renderUsefulLinks;
