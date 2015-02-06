window.Wine = Backbone.Model.extend({
    urlRoot:"../api/wines",
    idAttribute : "_id",
    defaults:{
        "_id":null,
        "name":"",
        "grapes":"",
        "country":"USA",
        "region":"California",
        "year":"",
        "description":"",
        "picture":"generic.jpg"
    }
});

window.WineCollection = Backbone.Collection.extend({
    model:Wine,
    url:"../../wines"
});