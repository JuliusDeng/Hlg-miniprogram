/**
 * 获取资源对象里面的字体列表
 */
function getFonts(res) {
	console.log(res)
	let elements = res.elements;
	let fonts = [];
	elements.map(element => {
		if (element.type == "font") {
			fonts.push(element.fontFamily)
		}
	})
	return fonts
}

module.exports = {
	getFonts: getFonts
}
