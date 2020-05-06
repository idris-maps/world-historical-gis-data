import topo from './topo.json'
import { feature } from 'topojson-client'
import { FeatureCollection, Polygon, MultiPolygon } from 'geojson'

export type CollectionName = '400' | '600' | '800' | '1000' | '1279' | '1492' | '1530' | '1650' | '1715' | '1783' | '1880' | '1914' | '1920' | '1000BC' | '1BC' | '2000BC' | '200BC' | '323BC' | '500BC' | 'world'

export const collectionNames: CollectionName[] = [
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

export interface Props {
  abbrevname?: string
  controllin?: string
  fips_code?: string
  name?: string
  wb_cntry?: string
}

// @ts-ignore
const topology: TopoJSON.Topology = topo

export default topology

export type Collection = FeatureCollection<Polygon | MultiPolygon, Props>

export const getCollection = (name: CollectionName): Collection =>
  // @ts-ignore
  feature(topology, topology.objects[name])