# World Historical GIS Data: 2000 BCE to 1994 CE

> While the site is now defunct, Oracles, Thinkquest.org site consolidated a series of country boundary data into shapefiles.  Created as an educational site in 1996 and acquired by Oracle in 2002, the site went defunct in 2013.  Thanks to the Wayback Machine, the shapefiles of country boundaries spanning between 2000 BCE and 1994 CE can still be downloaded.  The data itself should be used with caution and only for small scale projects.  Created by students, the archived disclaimer page explains that the data has a spatial error of roughly +/- 40 miles and the best available information, especially for the oldest years, is not the most reliable.

[gislounge.com](https://www.gislounge.com/find-gis-data-historical-country-boundaries/)

Found through [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)

## Usage

```ts
import topology { getCollection, collectionNames } from 'world-historical-gis-data'
```

### `topology`

A [topojson](https://github.com/topojson/topojson) containing all the data.

### `getCollection`

Takes a `collectionName` and returns a GeoJSON `FeatureCollection`

```ts
const year_1000 = getCollection('1000')
```

### `collectionNames`

And array of available collections.

```js
[
  '1000',
  '1000BC',
  '1279',
  '1492',
  '1530',
  '1650',
  '1715',
  '1783',
  '1880',
  '1914',
  '1920',
  '1BC',
  '2000BC',
  '200BC',
  '323BC',
  '400',
  '500BC',
  '600',
  '800',
  'world',
]
```

`world` is the basemap and containing the whole world.

## Dev

To download the data and create the `topojson`:

```bash
./scripts/prepare.sh
```