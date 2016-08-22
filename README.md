#NomadMap.io

NomadMap is intended as a community-backed effort to aggregate places relevant to digital nomads. Currently it's a few file hacked together MVP that pulls location data from publicly editable Google Spreadsheets, and plots them into a Google Maps instance. If people find value in the basic application there's numerous future feature ideas developing in the icebox that we might pursue, and I encourage anyone interested in helping to get in touch.

##Getting Involved

###Adding/Updating Info

Each country is organized into its own Google Sheet, with a different tab for each town. The sheets are currently 100% publicly editable, so this also serves as an experiment in internet trust and how far a spreadsheet-backed application will scale.

* [Thailand](https://docs.google.com/spreadsheets/d/1R0g7gkT5C6td0S3wOWYUYg5vx5NjP2IWSd3ky9mu3Jc/edit#gid=0)
* Cambodia
* Malaysia
* Vietnam
* Singapore
* Phillipines
* Indonesia
* Laos
* Myanmar

###Adding New Countries

If you don't see your country (currently covering only parts of SE Asia as of this writing), feel free to clone the [template spreadsheet](), update it with any cities & locations you'd like, and put in a Pull Request with a link to the original spreadsheet (must be minimum publicly viewable). Assuming all checks out I'll clone it and add it into the list of spreadsheets being pulled in.

###Getting GPS Coords

As Google Maps location data can be fickle in many non-Western countries, getting accurate GPS coordinates will be a huge benefit to people using NomadMap. It's recommended that you verify with both Google Maps road _and_ satellite views, and if possible find the GPS coords using your phone when on-site. When you click on a point in Google Maps a small info window will appear at the bottom with latitude/longitude, or you can pull the coords directly out of the browser URL.

Example Coords: `10.082283,99.840424`

###Testing Internet Speeds

Currently we're just using [speedtest.net](http://speedtest.net) to verify upload/download speeds. I'd recommend you run the test 2-3 times to make sure you're getting consistent results.

###Internet Quality

This should be a subjective rating of either `excellent`, `good`, `poor`, or `unusable` in regards to how usable the internet actually was. Anybody who has worked in cafes knows that fast speeds doesn't mean it's actually usable when the router crashes every 5 minutes.

##Other

Thanks to Jordan Kerr for nearly instantly jumping onboard with the idea after I shared my Koh Tao "coworking" map, and to Koh Tao for having such inconsistent internet that I felt compelled to document it.