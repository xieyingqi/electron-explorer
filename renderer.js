// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var diskinfo = require('diskinfo');
diskinfo.getDrives(function (err, aDrives) {
	for (var i = 0; i < aDrives.length; i++) {
		var list = document.getElementById("driverlist");
		var driver = document.createElement("button");
		driver.type = "button";
		driver.innerText = aDrives[i].mounted;
		driver.title = aDrives[i].mounted;
		driver.className = "diskBtn";
		list.appendChild(driver);
		console.log();
	}
});