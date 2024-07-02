**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HotelAboutInfo

# Class: HotelAboutInfo

## Implements

- [`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelAboutInfo(data)

> **new HotelAboutInfo**(`data`?): [`HotelAboutInfo`](HotelAboutInfo.md)

#### Parameters

• **data?**: [`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md)

#### Returns

[`HotelAboutInfo`](HotelAboutInfo.md)

#### Source

main.ts:205574

## Properties

### amenities?

> **`optional`** **amenities**: [`HotelAmenityInfo`](HotelAmenityInfo.md)[]

hotel amenities
information about hotel amenities

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`amenities`](../interfaces/IHotelAboutInfo.md#amenities)

#### Source

main.ts:205567

***

### check\_in\_time?

> **`optional`** **check\_in\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

hotel check-in time
check-in time indicated in the hotel listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`check_in_time`](../interfaces/IHotelAboutInfo.md#check_in_time)

#### Source

main.ts:205552

***

### check\_out\_time?

> **`optional`** **check\_out\_time**: [`WorkTimeInfo`](WorkTimeInfo.md)

hotel check-out time
check-out time indicated in the hotel listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`check_out_time`](../interfaces/IHotelAboutInfo.md#check_out_time)

#### Source

main.ts:205555

***

### description?

> **`optional`** **description**: `string`

description of the hotel
the description of the hotel entity for which the results are collected

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`description`](../interfaces/IHotelAboutInfo.md#description)

#### Source

main.ts:205546

***

### domain?

> **`optional`** **domain**: `string`

hotel domain
domain of the hotel’s website

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`domain`](../interfaces/IHotelAboutInfo.md#domain)

#### Source

main.ts:205561

***

### full\_address?

> **`optional`** **full\_address**: `string`

full address of the hotel
address of the hotel indicated in the standardised format

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`full_address`](../interfaces/IHotelAboutInfo.md#full_address)

#### Source

main.ts:205558

***

### popular\_amenities?

> **`optional`** **popular\_amenities**: [`HotelAmenityItemInfo`](HotelAmenityItemInfo.md)[]

hotel amenities
information about hotel amenities labelled as “popular”

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`popular_amenities`](../interfaces/IHotelAboutInfo.md#popular_amenities)

#### Source

main.ts:205570

***

### sub\_descriptions?

> **`optional`** **sub\_descriptions**: `string`[]

additional description of the hotel
details about the hotel provided in addition to the description

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`sub_descriptions`](../interfaces/IHotelAboutInfo.md#sub_descriptions)

#### Source

main.ts:205549

***

### url?

> **`optional`** **url**: `string`

hotel url
URL to the hotel’s website indicated in the listing

#### Implementation of

[`IHotelAboutInfo`](../interfaces/IHotelAboutInfo.md).[`url`](../interfaces/IHotelAboutInfo.md#url)

#### Source

main.ts:205564

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:205583

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:205620

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HotelAboutInfo`](HotelAboutInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelAboutInfo`](HotelAboutInfo.md)

#### Source

main.ts:205613
