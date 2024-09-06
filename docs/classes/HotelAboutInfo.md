[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HotelAboutInfo

# Class: HotelAboutInfo

## Implements

- [`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelAboutInfo()

> **new HotelAboutInfo**(`data`?): [`HotelAboutInfo`](HotelAboutInfo.md)

#### Parameters

• **data?**: [`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md)

#### Returns

[`HotelAboutInfo`](HotelAboutInfo.md)

#### Defined in

main.ts:205742

## Properties

### amenities?

> `optional` **amenities**: [`HotelAmenityInfo`](HotelAmenityInfo.md)[]

hotel amenities
information about hotel amenities

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`amenities`](../interfaces/IHotelAboutInfo.md#amenities)

#### Defined in

main.ts:205735

***

### check\_in\_time?

> `optional` **check\_in\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

hotel check-in time
check-in time indicated in the hotel listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`check_in_time`](../interfaces/IHotelAboutInfo.md#check_in_time)

#### Defined in

main.ts:205720

***

### check\_out\_time?

> `optional` **check\_out\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

hotel check-out time
check-out time indicated in the hotel listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`check_out_time`](../interfaces/IHotelAboutInfo.md#check_out_time)

#### Defined in

main.ts:205723

***

### description?

> `optional` **description**: `string`

description of the hotel
the description of the hotel entity for which the results are collected

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`description`](../interfaces/IHotelAboutInfo.md#description)

#### Defined in

main.ts:205714

***

### domain?

> `optional` **domain**: `string`

hotel domain
domain of the hotel’s website

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`domain`](../interfaces/IHotelAboutInfo.md#domain)

#### Defined in

main.ts:205729

***

### full\_address?

> `optional` **full\_address**: `string`

full address of the hotel
address of the hotel indicated in the standardised format

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`full_address`](../interfaces/IHotelAboutInfo.md#full_address)

#### Defined in

main.ts:205726

***

### popular\_amenities?

> `optional` **popular\_amenities**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

hotel amenities
information about hotel amenities labelled as “popular”

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`popular_amenities`](../interfaces/IHotelAboutInfo.md#popular_amenities)

#### Defined in

main.ts:205738

***

### sub\_descriptions?

> `optional` **sub\_descriptions**: `string`[]

additional description of the hotel
details about the hotel provided in addition to the description

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`sub_descriptions`](../interfaces/IHotelAboutInfo.md#sub_descriptions)

#### Defined in

main.ts:205717

***

### url?

> `optional` **url**: `string`

hotel url
URL to the hotel’s website indicated in the listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`url`](../interfaces/IHotelAboutInfo.md#url)

#### Defined in

main.ts:205732

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:205751

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:205788

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelAboutInfo`](HotelAboutInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelAboutInfo`](HotelAboutInfo.md)

#### Defined in

main.ts:205781
