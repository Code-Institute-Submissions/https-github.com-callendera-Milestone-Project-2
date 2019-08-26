// function that loads the map for the events
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            // gives the area for which the map should be focussed 
            lat: 39.536560,
            lng: -83.438750
        }
    });
    //labels for markers
    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    //latitude and longitude of the each event location
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
        // produces markers
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    //allows for a marker cluster when map is zoomed out enough
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });


}