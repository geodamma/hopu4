var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975年",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13170261.546233, 2805721.072196, 13171773.767806, 2806912.362460]
                            })
                        });
var format_W_2 = new ol.format.GeoJSON();
var features_W_2 = format_W_2.readFeatures(json_W_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_W_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_W_2.addFeatures(features_W_2);
var lyr_W_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_W_2, 
                style: style_W_2,
                interactive: true,
                title: '<img src="styles/legend/W_2.png" /> W'
            });
var format_T_3 = new ol.format.GeoJSON();
var features_T_3 = format_T_3.readFeatures(json_T_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_3.addFeatures(features_T_3);
var lyr_T_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T_3, 
                style: style_T_3,
                interactive: true,
                title: '<img src="styles/legend/T_3.png" /> T'
            });
var format_R_4 = new ol.format.GeoJSON();
var features_R_4 = format_R_4.readFeatures(json_R_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_4.addFeatures(features_R_4);
var lyr_R_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R_4, 
                style: style_R_4,
                interactive: true,
                title: '<img src="styles/legend/R_4.png" /> R'
            });
var format_M_5 = new ol.format.GeoJSON();
var features_M_5 = format_M_5.readFeatures(json_M_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M_5.addFeatures(features_M_5);
var lyr_M_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_M_5, 
                style: style_M_5,
                interactive: true,
                title: '<img src="styles/legend/M_5.png" /> M'
            });
var format_B_6 = new ol.format.GeoJSON();
var features_B_6 = format_B_6.readFeatures(json_B_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B_6.addFeatures(features_B_6);
var lyr_B_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_B_6, 
                style: style_B_6,
                interactive: true,
                title: '<img src="styles/legend/B_6.png" /> B'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr_W_2.setVisible(true);lyr_T_3.setVisible(true);lyr_R_4.setVisible(true);lyr_M_5.setVisible(true);lyr_B_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr_W_2,lyr_T_3,lyr_R_4,lyr_M_5,lyr_B_6];
lyr_W_2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_T_3.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_R_4.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_M_5.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_B_6.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_W_2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_T_3.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_R_4.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_M_5.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_B_6.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_W_2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'no label', });
lyr_T_3.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_R_4.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'inline label', });
lyr_M_5.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_B_6.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr_B_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});