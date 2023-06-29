import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '.';

import Map from "../Map";
import { Layers, TileLayer, VectorLayer } from "../Layers";
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from 'ol/style';
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector } from "../Source";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Controls, FullScreenControl } from "../Controls";
import FeatureStyles from "../Features/Styles";

import mapConfig from "../config.json";

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;
const markersLonLat = [mapConfig.kansasCityLonLat, mapConfig.blueSpringsLonLat];

function addMarkers(lonLatArray) {

    var iconStyle = new Style({
      image: new Icon({
        anchorXUnits: "fraction",
        anchorYUnits: "pixels",
        src: mapConfig.markerImage32,
      }),
    });
    let features = lonLatArray.map((item) => {
      let feature = new Feature({
        geometry: new Point(fromLonLat(item)),
      });
      feature.setStyle(iconStyle);
      return feature;
    });
    return features;
  }

const Maps = () => {
    const { center, zoom, showLayer1, setShowLayer1, showLayer2, setShowLayer2, showMarker, features } = useStateContext();

    return(
        <div className="flex">
        <div className="flex-auto m-2 md:m-4 p-2 md:p-4 bg-white rounded-3xl">
            <Header category="Network Map" title="Municipality" />
            <Map center={fromLonLat(center)} zoom={zoom} minZoom = {9}>
                <Layers>
                    <TileLayer source={osm()} zIndex={0} />
                    {showLayer1 && (
                        <VectorLayer
                        source={vector({
                            features: new GeoJSON().readFeatures(geojsonObject, {
                            featureProjection: get("EPSG:3857"),
                            }),
                        })}
                        style={FeatureStyles.MultiPolygon}
                        />
                    )}
                    {showLayer2 && (
                        <VectorLayer
                        source={vector({
                            features: new GeoJSON().readFeatures(geojsonObject2, {
                            featureProjection: get("EPSG:3857"),
                            }),
                        })}
                        style={FeatureStyles.MultiPolygon}
                        />
                    )}
                    {showMarker && <VectorLayer source={vector({ features })} />}
                </Layers>
                <Controls>
                    <FullScreenControl />
                </Controls>
            </Map>
        </div>
        <div className="flex-auto m-2 md:m-4 p-2 md:p-6 bg-white rounded-3xl">
            <Header category="Network Map" title="Options"/>
            <div >
                <input
                type="checkbox"
                checked={showLayer1}
                onChange={(event) => setShowLayer1(event.target.checked)}
                />{" "}
                Johnson County
            </div>
            <div >
                <input
                type="checkbox"
                checked={showLayer2}
                onChange={(event) => setShowLayer2(event.target.checked)}
                />{" "}
                Wyandotte County
            </div>
        </div>
        </div>
    )
}

export default Maps