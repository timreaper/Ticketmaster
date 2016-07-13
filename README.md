# Hi Ticketmaster!

This is the code created from having done your assessment.

- Gulp (for running tasks - CSS/JS compiling, Handlebars template running & watchers)
- Handlebars (for templating & allowing for dynamic data handling, as well as data formatting)
- jQuery (for triggering the template code on load of page & AJAX calls to Flickr API)
- SCSS (for styling the pages)
- Normalize (for ensuring consistency between browsers)

You can view the page [here](https://rawgit.com/timreaper/Ticketmaster/master/dist/index.html).

# Folder Breakdown

Dist - the compiled source files
- App (the JS & CSS that I had written)
- Libraries (the libraries JS file & an offline version of the Twitter button JS code - could not be loaded from the 3rd party site due to not being hosted on HTTPS)
- index.html (the single HTML file where all the runtime compilation of templates happens)

Source - the local uncompiled codebase
- App (the Handlebars template for the page, the JS files which trigger events on load and handle the Flickr API data, pagination & searching abilities and the SCSS files that style the page)
    - Handlebars (main for the main page template to be loaded into the index.html file, populated with formatted data from the Flickr API)
    - JS (init to trigger the gallery load function on load of page, gallery to call on the Flickr API for data as well as take in parameters like page number and searchable string and HandlebarsHelpers for further data formatting in the templates)
    - SCSS (split into 3 folders for modules e.g. the gallery, the header, the pagination, pages & helpers e.g. mixins, global variables and utility classes)
- Libraries (the vendor code segments brought in)
    - CSS (Normalize to help improve cross-browser performance)
    - JS (Handlebars for the templating ability & jQuery)