var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_daerahrawanbanjir_2020_1 = new ol.format.GeoJSON();
var features_daerahrawanbanjir_2020_1 = format_daerahrawanbanjir_2020_1.readFeatures(json_daerahrawanbanjir_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_daerahrawanbanjir_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_daerahrawanbanjir_2020_1.addFeatures(features_daerahrawanbanjir_2020_1);
var lyr_daerahrawanbanjir_2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_daerahrawanbanjir_2020_1, 
                style: style_daerahrawanbanjir_2020_1,
                popuplayertitle: "daerah rawan banjir_2020",
                interactive: true,
    title: 'daerah rawan banjir_2020<br />\
    <img src="styles/legend/daerahrawanbanjir_2020_1_0.png" /> 0<br />\
    <img src="styles/legend/daerahrawanbanjir_2020_1_1.png" /> 2<br />'
        });
var format_lokasievakuasi_2 = new ol.format.GeoJSON();
var features_lokasievakuasi_2 = format_lokasievakuasi_2.readFeatures(json_lokasievakuasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokasievakuasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokasievakuasi_2.addFeatures(features_lokasievakuasi_2);
var lyr_lokasievakuasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lokasievakuasi_2, 
                style: style_lokasievakuasi_2,
                popuplayertitle: "lokasi evakuasi",
                interactive: true,
                title: '<img src="styles/legend/lokasievakuasi_2.png" /> lokasi evakuasi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_daerahrawanbanjir_2020_1.setVisible(true);lyr_lokasievakuasi_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_daerahrawanbanjir_2020_1,lyr_lokasievakuasi_2];
lyr_daerahrawanbanjir_2020_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_lokasievakuasi_2.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_daerahrawanbanjir_2020_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_lokasievakuasi_2.set('fieldImages', {'NAME': '', 'LAYER': '', 'KML_STYLE': '', 'KML_FOLDER': '', });
lyr_daerahrawanbanjir_2020_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'inline label - visible with data', 'LCODE': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_lokasievakuasi_2.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_lokasievakuasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});