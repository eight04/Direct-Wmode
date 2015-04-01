// ==UserScript==
// @name	Direct Wmode
// @version 0.1.0
// @include http*
// @grant	none
// ==/UserScript==

new MutationObserver(cleanContainer).observe(document.body, {
	childList: true,
	subtree: true
});

function cleanContainer(){
	var nodes = document.querySelectorAll("object>param[name='wmode']");
	var i;
	var swap = [];
	var len;
	for (i = 0, len = nodes.length; i < len; i++) {
		swap[i] = nodes[i];
	}
	for (i = 0; i < len; i++) {
		swap[i].setAttribute("value", "direct");
	}
}

function clean(object) {
	var clone = object.cloneNode(true);
	var param = clone.querySelector("[name=wmode]");
	if (!param) {
		return;
	}
	if (param.getAttribute("value") == "direct") {
		return;
	}
	param.setAttribute("value", "direct");
	object.parentNode.replaceChild(clone, object);
}
