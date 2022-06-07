
require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/Graphic", "esri/layers/GraphicsLayer"], function (esriConfig,Map, MapView, FeatureLayer, Graphic, GraphicsLayer) {
    esriConfig.apiKey = "AAPK5093a34802a54aada9f92455d59aadd8Nztby4lVak7Lt3X085qCRI8p-JTgPKYoWpOOfVSdGbZhenTW51cdlh16g8AmiL-G";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
        })  
        const view = new MapView({
            map: map,
            center: [-117.131568, 32.731526], // longitude, latitude
            zoom: 13, 
            container: "viewDiv" //calls and displays to div element in <body>
        });

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);
        
        //layer for open public federal lands
        const federalLayer = new FeatureLayer({
          url: "https://maps1.arcgisonline.com/ArcGIS/rest/services/USA_Federal_Lands/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
        });

        map.add(federalLayer, 0); //adds federal layer

        // layer for parcel shaps and data  
        const parcelLayer = new FeatureLayer({
          url: "https://services1.arcgis.com/HG80xaIVT1z1OdO5/arcgis/rest/services/Parcels/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
        });

        map.add(parcelLayer, 0);

        //marker symbol used for all points
        const simpleMarkerSymbol = {
            type: "simple-marker",
            color: [255, 99, 71], //tomato red
            outline: {
                color: [255, 255, 255], // white
                width: 2
            }
        };

        // points of interest for CBP 
        const point01 = { //point for international arrivals CBP 
            type: "point",
            longitude: -117.205489,
            latitude: 32.731568
        };

        const point02 = { //point for CBP boat inspection
            type: "point",
            longitude: -117.176508,
            latitude: 32.715730
        };

        const point03 = { //point for CBP office for customs services
            type: "point",
            longitude: -117.159594,
            latitude: 32.701074
        };

        const point04 = { //Imperial beach border patrol station
            type: "point",
            longitude: -117.104458,
            latitude: 32.566281
        };

        const point05 = { //Chula Vista border patrol station
            type: "point",
            longitude: -117.054159,
            latitude: 32.565089
        };

        const point06 = { //San Ysidro port of entry
            type: "point",
            longitude: -117.035011,
            latitude: 32.543558
        };

        const point07 = { //brownfiled border patrol station
            type: "point",
            longitude: -116.97692,
            latitude: 32.549111
        };

        const point08 = { //brownfield amo
            type: "point",
            longitude: -116.978862,
            latitude: 32.575788
        };

        const point09 = { //Otay Mesa Port of Entry
            type: "point",
            longitude: -116.938679,
            latitude: 32.551431
        };

        const point10 = { //San Diego headquarters
            type: "point",
            longitude: -116.961208,
            latitude: 32.655899
        };

        const point11 = { //Tecate Port of entry
            type: "point",
            longitude: -116.626498,
            latitude: 32.577011
        };

        const point12 = { //Campo border patrol station
            type: "point",
            longitude: -116.449154,
            latitude: 32.720102
        };

        const point13 = { //Boulvard border patrol station
            type: "point",
            longitude: -116.292502,
            latitude: 32.682222
        };

        const point14 = { //immigration checkpoint
            type: "point",
            longitude: -116.818375,
            latitude: 32.664237
        };

        const point15 = { //Future brownfield station
            type: "point",
            longitude: -116.774474,
            latitude: 32.645983
        };

       //puts points together 
       const pointGraphic01 = new Graphic({
           geometry: point01,
           symbol: simpleMarkerSymbol
       });

       const pointGraphic02 = new Graphic({
           geometry: point02,
           symbol: simpleMarkerSymbol
       });

       const pointGraphic03 = new Graphic({
            geometry: point03,
            symbol: simpleMarkerSymbol
       });

       const pointGraphic04 = new Graphic({
            geometry: point04,
            symbol: simpleMarkerSymbol
       });

       const pointGraphic05 = new Graphic({
            geometry: point05,
            symbol: simpleMarkerSymbol
       });

       const pointGraphic06 = new Graphic({
            geometry: point06,
            symbol: simpleMarkerSymbol
       });

       const pointGraphic07 = new Graphic({
            geometry: point07,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic08 = new Graphic({
            geometry: point08,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic09 = new Graphic({
            geometry: point09,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic10 = new Graphic({
            geometry: point10,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic11 = new Graphic({
            geometry: point11,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic12 = new Graphic({
            geometry: point12,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic13 = new Graphic({
            geometry: point13,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic14 = new Graphic({
            geometry: point14,
            symbol: simpleMarkerSymbol
        });

       const pointGraphic15 = new Graphic({
            geometry: point15,
            symbol: simpleMarkerSymbol
        });



       graphicsLayer.add(pointGraphic01);
       graphicsLayer.add(pointGraphic02);
       graphicsLayer.add(pointGraphic03);
       graphicsLayer.add(pointGraphic04);
       graphicsLayer.add(pointGraphic05);
       graphicsLayer.add(pointGraphic06);
       graphicsLayer.add(pointGraphic07);
       graphicsLayer.add(pointGraphic08);
       graphicsLayer.add(pointGraphic09);
       graphicsLayer.add(pointGraphic10);
       graphicsLayer.add(pointGraphic11);
       graphicsLayer.add(pointGraphic12);
       graphicsLayer.add(pointGraphic13);
       graphicsLayer.add(pointGraphic14);
       graphicsLayer.add(pointGraphic15);


        
    });
      