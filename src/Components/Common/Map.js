import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
const { kakao } = window

export default function Map({ cordX, cordY, width, height }) {
  useEffect(() => {
    var container = document.getElementById('map')
    var options = {
      center: new kakao.maps.LatLng(cordX, cordY),
      level: 3,
    }

    var map = new kakao.maps.Map(container, options)
    var markerPosition = new kakao.maps.LatLng(cordX, cordY)
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
  }, [])

  return <MapBox id="map" width={width} height={height}></MapBox>
}

const MapBox = styled.button`
  width: ${(props) => props.width || '500px'};
  height: ${(props) => props.height || '400px'};
  border-radius: 20px;
`
