export function yoast(entry){

	const title = entry.getIn(['data', 'title']) || '';
    const meta_title = entry.getIn(['data', 'meta_title']) || '';
    const yoast_title = meta_title ? meta_title : title;
	const description = entry.getIn(['data', 'meta_description']) || '';
	const keyword = entry.getIn(['data', 'meta_keyword']) || '';
	const body = entry.getIn(['data', 'body']) || '';
	YOAST.setContent({
		title: yoast_title,
		description: description,
		keyword: keyword,
		text: body,
		titleWidth: yoast_title.split('').length * 5 // 5px is an average width of each character ;)
	});
	
}