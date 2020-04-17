function Copy() {
	var content = document.getElementById('copy');
	content.select();
	document.execCommand('Copy');
	alert('复制成功 Copy seccussfully!');
}
