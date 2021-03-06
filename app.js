// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '855877358-81ei5rtn5sc1kauncj2kut6ffhjl7hbd.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
var API_KEY = 'AIzaSyB061FXESp_bD9uzFHZZrvbfMIfBJfljX8';

var map;

// Centered map on Bangkok.
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 13.7248945, lng: 100.4930248},
    zoom: 6
  });
}

// Adds a marker to the map.
function addMarker(location, map, title, content) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.

  content = '<div class="component-info-window">' + content + '</div>'

  var infowindow = new google.maps.InfoWindow({
    content: content
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: title
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

/**
 * Load Sheets API client library.
 */
function loadSheetsApi() {
  gapi.client.setApiKey(API_KEY);
  var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
  gapi.client.load(discoveryUrl).then(loadMarkers);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function loadMarkers() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1R0g7gkT5C6td0S3wOWYUYg5vx5NjP2IWSd3ky9mu3Jc',
    range: 'Koh Samui',
  }).then(function(response) {
    var range = response.result;

    if (range.values.length > 0) {
      for (i = 0; i < range.values.length; i++) {
        var row = range.values[i];
        var pre = document.getElementById('output');

        if (i === 1) {
          var labels = row;
        } else if (i >= 2) {
          // Is there a better way to do this than rely on column order?
          var gpsLoc = row['3'];
          if(gpsLoc !== undefined && gpsLoc !== '') {
            var coords = gpsLoc.split(',');
            var coordsString = '{ "lat":' + coords[0] + ', "lng":' + coords[1] + '}';
            var gCoords = JSON.parse(coordsString);
            var title = row[0];
            var content = '';

            for (var k = 0; k < row.length; k++) {
                content += '<h4>' + labels[k] + '</h4>';
                content += '<p>' + row[k] + '</p>';
            }
            addMarker(gCoords, map, title, content);
          }  
        }
      }

      var el = document.querySelectorAll('.js-component-loading')[0];
      console.log(el);
      el.style.display = 'none';
    } else {
      alert('Welp, that\'s an error.');
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}

/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}