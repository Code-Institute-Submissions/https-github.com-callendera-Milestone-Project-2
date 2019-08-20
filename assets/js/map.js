function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 39.536560,
            lng: -83.438750
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 39.537121,
        lng: -83.438751
    }, {
        lat: 39.531220,
        lng: -83.440080
    }, {
        lat: 39.551048,
        lng: -83.422234
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });


}