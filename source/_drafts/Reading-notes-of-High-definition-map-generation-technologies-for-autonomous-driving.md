---
title: >-
  Reading notes of 'High-definition map generation technologies for autonomous
  driving'
categories: Draft
date: 2023-10-10 11:04:05
updated: 2023-10-10 11:04:05
tags:
---

[Paper Address](https://browse.arxiv.org/pdf/2206.05400.pdf)
Reading process: The first layer, Road Model, defi

## HD Map

HD map is the abbrevation of High Definition (HD) Live Map. It's a kind of high precision map contains all critical static properties on and around the roads, including buildings, traffic lights and all road markings. HD Map was built with sensors, including lidar, radar, camera and others. 

HD map is used in autonomous system to supports the motion planning of the autonomous vehicle. Currently, there is no unique standard for HD map in the autonomous driving market. However, most geolocation technology companies shares a common three-layer structure of HD map. There are the three-layer structure of TomTom, HERE and Lanelet.

| Layer Number | TomTom          | HERE            | Lanelet                      |
| ------------ | --------------- | --------------- | ---------------------------- |
| 1            | Navigation Data | HD Road         | Road Network (OpenStreetMap) |
| 2            | Planning Data   | HD Lanes        | Lane Level Map               |
| 3            | Road DNA        | HD Localization | Landmarks/Road Marking Map   |



