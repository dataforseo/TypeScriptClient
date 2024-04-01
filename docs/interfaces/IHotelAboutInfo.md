[Documentation](../README.md) / [Exports](../modules.md) / IHotelAboutInfo

# Interface: IHotelAboutInfo

## Implemented by

- [`HotelAboutInfo`](../classes/HotelAboutInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [amenities](IHotelAboutInfo.md#amenities)
- [check\_in\_time](IHotelAboutInfo.md#check_in_time)
- [check\_out\_time](IHotelAboutInfo.md#check_out_time)
- [description](IHotelAboutInfo.md#description)
- [domain](IHotelAboutInfo.md#domain)
- [full\_address](IHotelAboutInfo.md#full_address)
- [popular\_amenities](IHotelAboutInfo.md#popular_amenities)
- [sub\_descriptions](IHotelAboutInfo.md#sub_descriptions)
- [url](IHotelAboutInfo.md#url)

## Properties

### amenities

• `Optional` **amenities**: [`HotelAmenityInfo`](../classes/HotelAmenityInfo.md)[]

hotel amenities
information about hotel amenities

#### Defined in

main.ts:201008

___

### check\_in\_time

• `Optional` **check\_in\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

hotel check-in time
check-in time indicated in the hotel listing

#### Defined in

main.ts:200993

___

### check\_out\_time

• `Optional` **check\_out\_time**: [`WorkTimeInfo`](../classes/WorkTimeInfo.md)

hotel check-out time
check-out time indicated in the hotel listing

#### Defined in

main.ts:200996

___

### description

• `Optional` **description**: `string`

description of the hotel
the description of the hotel entity for which the results are collected

#### Defined in

main.ts:200987

___

### domain

• `Optional` **domain**: `string`

hotel domain
domain of the hotel’s website

#### Defined in

main.ts:201002

___

### full\_address

• `Optional` **full\_address**: `string`

full address of the hotel
address of the hotel indicated in the standardised format

#### Defined in

main.ts:200999

___

### popular\_amenities

• `Optional` **popular\_amenities**: [`HotelAmenityItemInfo`](../classes/HotelAmenityItemInfo.md)[]

hotel amenities
information about hotel amenities labelled as “popular”

#### Defined in

main.ts:201011

___

### sub\_descriptions

• `Optional` **sub\_descriptions**: `string`[]

additional description of the hotel
details about the hotel provided in addition to the description

#### Defined in

main.ts:200990

___

### url

• `Optional` **url**: `string`

hotel url
URL to the hotel’s website indicated in the listing

#### Defined in

main.ts:201005
