var wms_layers = [];

var lyr_AP_24565_FBD_F7010_RT1dem_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "AP_24565_FBD_F7010_RT1.dem",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AP_24565_FBD_F7010_RT1dem_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8676227.427986, -987511.188067, -8594855.701842, -912731.461373]
                            })
                        });
var lyr_acc_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8676227.427986, -987511.188067, -8594855.701842, -912731.461373]
                            })
                        });
var lyr_dir_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8676227.427986, -987511.188067, -8594855.701842, -912731.461373]
                            })
                        });
var lyr_fill_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8676227.427986, -987511.188067, -8594855.701842, -912731.461373]
                            })
                        });
var format_c_shp_4 = new ol.format.GeoJSON();
var features_c_shp_4 = format_c_shp_4.readFeatures(json_c_shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_4.addFeatures(features_c_shp_4);
var lyr_c_shp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_4, 
                style: style_c_shp_4,
                interactive: true,
                title: '<img src="styles/legend/c_shp_4.png" /> c_shp'
            });

        var lyr_GoogleHybrid_5 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_c_acc_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8659125.117782, -947237.168726, -8624497.001563, -925425.343841]
                            })
                        });
var lyr_c_cauce_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8659125.117782, -947237.168726, -8624497.001563, -925425.343841]
                            })
                        });
var format_c_curvas_8 = new ol.format.GeoJSON();
var features_c_curvas_8 = format_c_curvas_8.readFeatures(json_c_curvas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_curvas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_8.addFeatures(features_c_curvas_8);
var lyr_c_curvas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_8, 
                style: style_c_curvas_8,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_8.png" /> c_curvas'
            });
var lyr_c_fill_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8659125.117782, -947237.168726, -8624497.001563, -925425.343841]
                            })
                        });
var lyr_c_reclass_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8659125.117782, -947237.168726, -8624497.001563, -925425.343841]
                            })
                        });
var format_c_rios_11 = new ol.format.GeoJSON();
var features_c_rios_11 = format_c_rios_11.readFeatures(json_c_rios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_rios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_11.addFeatures(features_c_rios_11);
var lyr_c_rios_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_11, 
                style: style_c_rios_11,
                interactive: true,
                title: '<img src="styles/legend/c_rios_11.png" /> c_rios'
            });

lyr_AP_24565_FBD_F7010_RT1dem_0.setVisible(true);lyr_acc_1.setVisible(true);lyr_dir_2.setVisible(true);lyr_fill_3.setVisible(true);lyr_c_shp_4.setVisible(true);lyr_GoogleHybrid_5.setVisible(true);lyr_c_acc_6.setVisible(true);lyr_c_cauce_7.setVisible(true);lyr_c_curvas_8.setVisible(true);lyr_c_fill_9.setVisible(true);lyr_c_reclass_10.setVisible(true);lyr_c_rios_11.setVisible(true);
var layersList = [lyr_AP_24565_FBD_F7010_RT1dem_0,lyr_acc_1,lyr_dir_2,lyr_fill_3,lyr_c_shp_4,lyr_GoogleHybrid_5,lyr_c_acc_6,lyr_c_cauce_7,lyr_c_curvas_8,lyr_c_fill_9,lyr_c_reclass_10,lyr_c_rios_11];
lyr_c_shp_4.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'a_Km2': 'a_Km2', 'p_Km': 'p_Km', });
lyr_c_curvas_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_11.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_c_shp_4.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'a_Km2': '', 'p_Km': '', });
lyr_c_curvas_8.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CONTOUR': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_c_rios_11.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_c_shp_4.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'a_Km2': 'no label', 'p_Km': 'no label', });
lyr_c_curvas_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_11.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});