import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
const { kakao } = window

export default function Map({ cordX, cordY, width, height, margin }) {
  const container = useRef(null)
  const options = {
    center: new kakao.maps.LatLng(cordX, cordY),
    level: 3,
  }

  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options)
    const markerPosition = new kakao.maps.LatLng(cordX, cordY)
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)
    kakao.maps.event.addListener(marker, 'click', function () {
      var position = this.getPosition()
      var url =
        'https://map.kakao.com/link/map/' +
        position.getLat() +
        ',' +
        position.getLng()
      window.open(url, '_blank')
    })
  }, [])

  return (
    <MapBox
      id="map"
      width={width}
      height={height}
      margin={margin}
      ref={container}
    ></MapBox>
  )
}

const MapBox = styled.button`
  width: ${(props) => props.width || '500px'};
  height: ${(props) => props.height || '400px'};
  margin: ${(props) => props.margin || '0 0'};
  border-radius: 20px;
`
