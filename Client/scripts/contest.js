/***
 * This file will contain all the scripts required for display entries to judges.
***/
$(function() {
	/* If it doesn't look like there's a contest ID in the URL, show an alert, and go back one page. */
	if (window.location.search.indexOf("?contest") === -1) {
		alert("Contest ID not found!");

		window.history.back();
	}

	/* Locate the contest ID in the URL, and store it for later use. */
	var contestId = window.location.href.split("?contest=")[1];

	/* Go ahead and find the div that we'll store all the entries in. */
	var entriesList = document.querySelector(".media-list");

	console.log("Contest found!");
	console.log("Contest ID: " + contestId);

	/* Hide elements that we've marked with the class "hideWhileLoad". */
	$(".hideWhileLoad").css("display", "none");

	/* Attempt to load a contest, based on the ID we found in the URL. */
	Contest_Judging_System.loadContest(contestId, function(contest) {

		/* Randomly pick n entries, and then display them on the page. */
		Contest_Judging_System.get_N_Entries(10, contest.id, function(entries) {

			/* Setup the page */
			$("title").text(contest.name);
			$("#contestName").text(contest.name);
			$("#contestDescription").html("Description coming soon!");

			/* Add all entries to the page */
			for (var i in entries) {
				(function() {
					/* Instead of having to write entries[i] all the time, let's declare a variable that's a bit shorter. */
					var curr = entries[i];

					$.ajax({
						type: 'GET',
						url: "https://www.khanacademy.org/api/labs/scratchpads/" + curr.id,
						async: true,
						complete: function(response) {
							/* Create a list item element, and give it Bootstrap's "media" class. */
							var mediaListItem = document.createElement("li");
							mediaListItem.className = "media entry";

							/* Create a div element, and give it Bootstrap's "media-left" class. */
							var mediaLeftDiv = document.createElement("div");
							mediaLeftDiv.className = "media-left";

							/* Create a link element, and set it's href to the URL of this entry... */
							var aElem = document.createElement("a");
							aElem.href = "https://www.khanacademy.org/computer-programming/entry/" + curr.id;

							/* Create an image element and set it's src to this entry's thumbnail */
							var mediaObj = document.createElement("img");
							mediaObj.src = response.responseJSON.imageUrl;
							mediaObj.alt = "Entry thumbnail";

							/* Create a div element, and give it Bootstrap's "media-body" class. */
							var mediaBody = document.createElement("div");
							mediaBody.className = "media-body";

							/* Create a heading element (tier 4), and set it's text to this entry's name. */
							var mediaHeading = document.createElement("h4");
							mediaHeading.textContent = curr.name;

							/* Append everything */
							aElem.appendChild(mediaObj);
							mediaLeftDiv.appendChild(aElem);
							mediaBody.appendChild(mediaHeading);
							mediaListItem.appendChild(mediaLeftDiv);
							mediaListItem.appendChild(mediaBody);
							entriesList.appendChild(mediaListItem);
						}
					});
				})();
			}

			/* Hide the loading div and show items that were hidden during loading. */
			$("#loading").css("display", "none");
			$(".hideWhileLoad").css("display", "block");
		});
	});
}); 