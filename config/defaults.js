define([], function () {
  //Default configuration settings for the applciation. This is where you'll define things like a bing maps key,
  //default web map, default app color theme and more. These values can be overwritten by template configuration settings
  //and url parameters.
  var defaults = {
    "appid": "",
    "webmap": "902e9e5837754e7f80d7e6e5aec6ed47", // "2139c8b250bb44ffa619a097d2173773", //"902e9e5837754e7f80d7e6e5aec6ed47", //"2c8e24f1f623452196c69446ae9d5fb5",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    //group: "",
    //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //UI specific parameters
    //"title": "Kwanza - Summary Viewer template with a very long name in the title",
    "title": "Kwanza Sul Simple Map",
    "logo": "",
    "color": "#1E90FF",
    //Counter specific parameters
    // http://services2.arcgis.com/Gkw7zWMIg777uG16/arcgis/rest/services/TaskStartPoints/FeatureServer/0
    "summaryLayer": {
      "id": "",
      "fields": [
        {
          "id": "filterField",
          "fields": ["ImpactScor"]
        },
        {
          "id": "sumFields",
          "fields": ["AreaSize","DirectBene","InDirectBe","TaskHumanV"]
        },
        {
          "id": "avgFields",
          "fields": []
        },
        {
          "id": "minFields",
          "fields": []
        },
        {
          "id": "maxFields",
          "fields": []
        }
      ]
    },
    "cluster": false,
    "hideCount": true,
    "hideSummaryType": true,
    "bingmapskey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "sharinghost": location.protocol + "//" + "www.arcgis.com", //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "localize": true,
    "queryForOrg": false
  };
  return defaults;
});
