mkdir temp

## get download page
curl http://web.archive.org/web/20080328104539/http://library.thinkquest.org:80/C006628/download.html > temp/downloads.html

## download zip files
node scripts/downloadZips < temp/downloads.html

## copy zip files to temp
cp *.zip temp
rm *.zip

## convert to ndjson
node scripts/unpack

## create background map
node scripts/createWorld > temp/world.ndjson

## create topojson
mkdir temp/geojson
node scripts/toTopojson

rm -rf temp