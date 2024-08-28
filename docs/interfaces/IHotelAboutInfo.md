[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IHotelAboutInfo

# Interface: IHotelAboutInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### amenities?

> `optional` **amenities**: [`HotelAmenityInfo`](../classes/HotelAmenityInfo.md)[]

hotel amenities
information about hotel amenities

#### Defined in

main.ts:210472

***

### check\_in\_time?

> `optional` **check\_in\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

hotel check-in time
check-in time indicated in the hotel listing

#### Defined in

main.ts:210457

***

### check\_out\_time?

> `optional` **check\_out\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

hotel check-out time
check-out time indicated in the hotel listing

#### Defined in

main.ts:210460

***

### description?

> `optional` **description**: `string`

description of the hotel
the description of the hotel entity for which the results are collected

#### Defined in

main.ts:210451

***

### domain?

> `optional` **domain**: `string`

hotel domain
domain of the hotel’s website

#### Defined in

main.ts:210466

***

### full\_address?

> `optional` **full\_address**: `string`

full address of the hotel
address of the hotel indicated in the standardised format

#### Defined in

main.ts:210463

***

### popular\_amenities?

> `optional` **popular\_amenities**: [`HotelAmenityItemInfo`](../classes/HotelAmenityItemInfo.md)[]

hotel amenities
information about hotel amenities labelled as “popular”

#### Defined in

main.ts:210475

***

### sub\_descriptions?

> `optional` **sub\_descriptions**: `string`[]

additional description of the hotel
details about the hotel provided in addition to the description

#### Defined in

main.ts:210454

***

### url?

> `optional` **url**: `string`

hotel url
URL to the hotel’s website indicated in the listing

#### Defined in

main.ts:210469
