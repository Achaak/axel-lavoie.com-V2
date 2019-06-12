exports.getOpts = function(_global) {
    var opts = {
        route: "/",
        title: "test",
        description: "Hello world",
        //hrefIcon   : "",

        // Open Graph
        //openGraph : {
        //    title      : "",
        //    description: "",
        //    image      : "",
        //    type       : "",
        //    url        : ""
        //}

        navBurger: {
            en: [
                {
                    id: "skills",
                    name: "Skills",
                },
                {
                    id: "projects",
                    name: "Projects",
                },
                {
                    id: "contact",
                    name: "Contact"
                }
            ]
        }
    };

    return opts;
}