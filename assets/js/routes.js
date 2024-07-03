const pageTitle = "PULL&BEAR";
const routes = {
	404: {
		template: "/templates/404.html",
		title: "404 | " + pageTitle,
		description: "Page not found",
	},
	"/": {
		template: "/templates/index.html",
		title: "Home | " + pageTitle,
		description: "This is the home page",
	},
	shop: {
		template: "/templates/shop.html",
		title: "Shop | " + pageTitle,
		description: "This is the Shop page",
	},
	visitanos: {
		template: "/templates/visitanos.html",
		title: "Visítanos | " + pageTitle,
		description: "This is the visits page",
	},
};

const locationHandler = async () => {
	var location = window.location.hash.replace("#", "");
	if (location.length == 0) {
		location = "/";
	}
	const route = routes[location] || routes["404"];
	const html = await fetch(route.template).then((response) => response.text());
	document.getElementById("page").innerHTML = html;
	document.title = route.title;
	document
		.querySelector('meta[name="description"]')
		.setAttribute("page", route.description);
};
window.addEventListener("hashchange", locationHandler);
locationHandler();
