function handleContextMenuClick(info, tab) {
	chrome.tabs.sendMessage(tab.id, "deleteClickedEl");
}

chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		"id": "delel",
		"title": "Delete Element",
		"contexts": ["all"],
		"onclick": handleContextMenuClick
	});
});
