var controllers = {};

controllers.lobby = function($scope, $cookies, $location, Socket, Userset, CurrentPage) {
	timeApp.communication.setup(Socket, $cookies, Userset, $location, CurrentPage); //setup initiall message
	// timeApp.allfunc.firstvisit($cookies, $location, Userset, CurrentPage, Socket); //return to lobby if no cookie	
	// timeApp.communication.setupPageChange(Socket, $location, CurrentPage); //changepage on message
	$scope.id = Userset.ticket || $cookies.ticket;

	var count = 0;

	setTimeout(function() {
		timeApp.modal.alert("<h2>Welcome</h2><p>Please note that at certain instances of this show you should use your phone to interact with the visuals.</p><div id='lobby-icons'><div class='fadeInLeft'><h3>Shake</h3><img src='/public/content/shake.png'></div><div class='fadeOutRight'><h3>Tap</h3><img src='/public/content/tap.png'></div></div>");

		// timeApp.modal.settings.icons = document.getElementById("lobby-icons");

		// timeApp.allfunc.lobbyinterval = setInterval(function() {
		// 	var v1 = $(".fadeInLeft"),
		// 		v2 = $(".fadeOutRight");
		// 	v1.removeClass("fadeInLeft").addClass("fadeOutRight");
		// 	v2.removeClass("fadeOutRight").addClass("fadeInLeft");
		// }, 4000);






	
		// setInterval(function() {

		// 	console.log(count);

		// 	if (timeApp.modal.settings.icons.childNodes[count].className == "fadeInLeft") {
		// 		timeApp.modal.settings.icons.childNodes[count].className = "hidden";
		// 	} else {
		// 		timeApp.modal.settings.icons.childNodes[count].className = "fadeInLeft";
		// 		console.log(timeApp.modal.settings.icons.childNodes[count].className);
		// 	}

		// 	console.log(timeApp.modal.settings.icons.childNodes.length);

		// 	if (count == timeApp.modal.settings.icons.childNodes.length - 1) {
		// 		count = 0;
		// 	}
		// 	count++;
		// }, 4000);

	}, 1500);

	timeApp.communication.exitfunction = function() {
		if (timeApp.allfunc.lobbyinterval) {
			clearInterval(timeApp.allfunc.lobbyinterval);
		}
	}
}

controllers.tap = function($scope, $cookies, $location, Socket, Userset, CurrentPage) {
	// timeApp.allfunc.firstvisit($cookies, $location, Userset, CurrentPage, Socket); //return to lobby if no cookie
	timeApp.communication.setup(Socket, $cookies, Userset, $location, CurrentPage); //setup initiall message
	$scope.id = Userset.ticket || $cookies.ticket;

	timeApp.tap.init(Socket);
	timeApp.communication.exitfunction = timeApp.tap.onexit;

	// if (timeApp.diagnostics) {
	// 	timeApp.diagnostics.addTiltEventListener(Socket);
	// 	// timeApp.communication.exitfunction = timeApp.diagnostics.onexit;
	// 	timeApp.diagnostics.createDiagnosticButton(Socket);
	// }
}

controllers.shake = function($scope, $cookies, $location, Socket, Userset, CurrentPage) {
	// timeApp.allfunc.firstvisit($cookies, $location, Userset, CurrentPage, Socket); //return to lobby if no cookie
	timeApp.communication.setup(Socket, $cookies, Userset, $location, CurrentPage); //setup initiall message
	$scope.id = Userset.ticket || $cookies.ticket;

	timeApp.shake.init(Socket, Userset)
	timeApp.communication.exitfunction = timeApp.shake.onexit;

}


controllers.betweenpages = function($scope, $cookies, $location, Socket, Userset, CurrentPage, SongSets) {
	// timeApp.allfunc.firstvisit($cookies, $location, Userset, CurrentPage, Socket);
	timeApp.communication.setup(Socket, $cookies, Userset, $location, CurrentPage); //setup initiall message
	$scope.id = Userset.ticket || $cookies.ticket;

	if (timeApp.betweenpages) {
		timeApp.betweenpages.init($scope, SongSets, CurrentPage, Socket);
		timeApp.communication.exitfunction = timeApp.betweenpages.onexit;
	}
}

controllers.newSong = function($scope, $cookies, $location, Socket, Userset, CurrentPage, SongSets) {
	// timeApp.allfunc.firstvisit($cookies, $location, Userset, CurrentPage, Socket);
	timeApp.communication.setup(Socket, $cookies, Userset, $location, CurrentPage); //setup initiall message
	$scope.id = Userset.ticket || $cookies.ticket;

	if (timeApp.newSong) {
		timeApp.newSong.init($scope, CurrentPage, SongSets, $location, Socket)
	}
	timeApp.communication.exitfunction = timeApp.newSong.onexit;
}


controllers.admin = function($scope, $cookies, $location, Socket, Userset, CurrentPage) {
	timeApp.communication.setup(Socket, $cookies, Userset, $location, CurrentPage); //setup initiall message
	$scope.id = Userset.ticket || $cookies.ticket;

	if (timeApp.cAdmin) {
		timeApp.cAdmin.init($scope, Socket);
	}
}


controllers.diagnostics = function($scope, $cookies, $location, Socket, Userset, CurrentPage) {
	timeApp.allfunc.firstvisit($cookies, $location, Userset, CurrentPage, Socket); //return to lobby if no cookie
	timeApp.communication.setupPageChange(Socket, $location, CurrentPage); //changepage on message
	$scope.id = Userset.ticket || $cookies.ticket;

	if (timeApp.diagnostics) {
		timeApp.communication.exitfunction = timeApp.diagnostics.onexit;
		timeApp.diagnostics.init(Socket);
	}
}

timeApp.controller(controllers);