**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelAboutInfo

# Interface: IHotelAboutInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### amenities?

> **`optional`** **amenities**: [`HotelAmenityInfo`](../classes/HotelAmenityInfo.md)[]

hotel amenities
information about hotel amenities

#### Source

main.ts:205151

***

### check\_in\_time?

> **`optional`** **check\_in\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

hotel check-in time
check-in time indicated in the hotel listing

#### Source

main.ts:205136

***

### check\_out\_time?

> **`optional`** **check\_out\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

hotel check-out time
check-out time indicated in the hotel listing

#### Source

main.ts:205139

***

### description?

> **`optional`** **description**: `string`

description of the hotel
the description of the hotel entity for which the results are collected

#### Source

main.ts:205130

***

### domain?

> **`optional`** **domain**: `string`

hotel domain
domain of the hotel’s website

#### Source

main.ts:205145

***

### full\_address?

> **`optional`** **full\_address**: `string`

full address of the hotel
address of the hotel indicated in the standardised format

#### Source

main.ts:205142

***

### popular\_amenities?

> **`optional`** **popular\_amenities**: [`HotelAmenityItemInfo`](../classes/HotelAmenityItemInfo.md)[]

hotel amenities
information about hotel amenities labelled as “popular”

#### Source

main.ts:205154

***

### sub\_descriptions?

> **`optional`** **sub\_descriptions**: `string`[]

additional description of the hotel
details about the hotel provided in addition to the description

#### Source

main.ts:205133

***

### url?

> **`optional`** **url**: `string`

hotel url
URL to the hotel’s website indicated in the listing

#### Source

main.ts:205148
