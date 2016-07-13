var gallery = new function () {
    this.page = 1;
    this.string = 'ticketmaster';
    this.per_page = 15;

    this.load_photos = function () {
        var endpoint = "https://api.flickr.com/services/rest/";
        var photos_ajax = $.ajax(endpoint, {
            url: endpoint,
            dataType: 'json',
            data: {
                api_key: "b12510028a07d8fb2aa880bc88009c10",
                format: "json",
                method: "flickr.photos.search",
                nojsoncallback: 1,
                page: this.page,
                per_page: this.per_page,
                tags: this.string
            }
        });
        photos_ajax.complete(function (jqXHR) {
            var data = jQuery.parseJSON(jqXHR.responseText);
            $('#page').html(Ticketmaster.main(data));
        });
    };

    this.set_page = function (page) {
        this.page = page;
    };

    this.set_search = function (string) {
        if (string === '') {
            alert('Please type something in the box');
        } else {
            this.string = string;
        }
    };
};