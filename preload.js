window.addEventListener( "DOMContentLoaded", () => {
	const msg = `Node.js: ${ process.versions.node }
	<br>Electron: ${ process.versions.electron }
	<br>Chrome: ${ process.versions.chrome }`;
	const infoDiv = document.getElementById( "info" );
	infoDiv.innerHTML = msg;

	const homeList = document.getElementById( "homeList" );
	const fs = require( "fs" );
	fs.readdir( process.env.HOME, ( err, entries ) => {
		entries.forEach( entry => {
			if ( !entry.startsWith( "." ) ) {
				const li = document.createElement( "li" );
				li.textContent = entry;
				homeList.appendChild( li );
			}
		} );
	} );
} );
