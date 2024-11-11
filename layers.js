ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9518").setExtent([104.610263, -5.720484, 106.467257, -4.560752]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> BUMIWARAS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> ENGGAL<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> KEDAMAIAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> KEDATON<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> KEMILING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> LABUHANRATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> LANGKAPURA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> PANJANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> RAJABASA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> SUKABUMI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> SUKARAME<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> TANJUNGKARANG BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> TANJUNGKARANG PUSAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> TANJUNGKARANG TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> TANJUNGSENANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> TELUKBETUNG BARAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_16.png" /> TELUKBETUNG SELATAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_17.png" /> TELUKBETUNG TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_18.png" /> TELUKBETUNG UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_19.png" /> WAYHALIM<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_20.png" /> <br />'
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_2 = format_ADMINISTRASIKECAMATAN_AR_50K_2.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_2);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_2,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_0.png" /> BANDARSRIBHAWONO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_1.png" /> BANDARSURABAYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_2.png" /> BATANGHARI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_3.png" /> BATANGHARINUBAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_4.png" /> BRAJASELEBAH<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_5.png" /> BUMIAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_6.png" /> DENTETELADAS<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_7.png" /> GUNUNGPELINDUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_8.png" /> JABUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_9.png" /> JATIAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_10.png" /> KOTAGAJAH<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_11.png" /> LABUHANMARINGGAI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_12.png" /> LABUHANRATU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_13.png" /> MARGASEKAMPUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_14.png" /> MARGATIGA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_15.png" /> MATARAMBARU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_16.png" /> MELINTING<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_17.png" /> MERBAUMATARAM<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_18.png" /> METRO PUSAT<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_19.png" /> METRO SELATAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_20.png" /> METRO TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_21.png" /> METRO UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_22.png" /> METROKIBANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_23.png" /> NATAR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_24.png" /> PASIRSAKTI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_25.png" /> PEKALONGAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_26.png" /> PUNGGUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_27.png" /> PURBOLINGGO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_28.png" /> PUTRARUMBIA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_29.png" /> RAMAN UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_30.png" /> RUMBIA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_31.png" /> SEKAMPUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_32.png" /> SEKAMPUNGUDIK<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_33.png" /> SEPUTIHBANYAK<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_34.png" /> SEPUTIHRAMAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_35.png" /> SEPUTIHSURABAYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_36.png" /> SUKADANA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_37.png" /> TANJUNGBINTANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_38.png" /> TANJUNGSARI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_39.png" /> TEGINENENG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_40.png" /> TRIMURJO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_41.png" /> WAWAYKARYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_42.png" /> WAYBUNGUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_43.png" /> WAYJEPARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2_44.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_ADMINISTRASIKECAMATAN_AR_50K_2];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'hidden field', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKK': 'inline label - always visible', 'WIADKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});