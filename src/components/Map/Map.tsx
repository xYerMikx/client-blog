"use client"

import mapboxgl from "mapbox-gl"
import { useEffect, useRef } from "react"

import { mapConfig } from "@/constants/mapConfig"
import { mapLocations } from "@/constants/mapLocations"

import styles from "./map.module.scss"

export function Map() {
  const mapContainerRef = useRef(null)

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: mapConfig.style,
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        accessToken: mapConfig.accessToken,
      })

      mapLocations.forEach((location) => {
        new mapboxgl.Marker()
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 30 }).setHTML(`<p>${location.description}</p>`),
          )
          .addTo(map)
      })

      return () => map.remove()
    }
  }, [])

  return <div ref={mapContainerRef} className={styles.map} />
}
