[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HotelLocationInfo

# Class: HotelLocationInfo

## Implements

- [`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HotelLocationInfo()

> **new HotelLocationInfo**(`data`?): [`HotelLocationInfo`](HotelLocationInfo.md)

#### Parameters

• **data?**: [`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md)

#### Returns

[`HotelLocationInfo`](HotelLocationInfo.md)

#### Defined in

main.ts:205954

## Properties

### latitude?

> `optional` **latitude**: `number`

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`latitude`](../interfaces/IHotelLocationInfo.md#latitude)

#### Defined in

main.ts:205942

***

### location\_chain?

> `optional` **location\_chain**: [`LocationChain`](LocationChain.md)[]

elements of the location chain
additional parameters of each element of the location chain

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`location_chain`](../interfaces/IHotelLocationInfo.md#location_chain)

#### Defined in

main.ts:205950

***

### longitude?

> `optional` **longitude**: `number`

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`longitude`](../interfaces/IHotelLocationInfo.md#longitude)

#### Defined in

main.ts:205947

***

### maps\_url?

> `optional` **maps\_url**: `string`

url to the location of the hotel in google maps

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`maps_url`](../interfaces/IHotelLocationInfo.md#maps_url)

#### Defined in

main.ts:205929

***

### neighborhood?

> `optional` **neighborhood**: `string`

name of the neighborhood where the hotel is located

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`neighborhood`](../interfaces/IHotelLocationInfo.md#neighborhood)

#### Defined in

main.ts:205925

***

### neighborhood\_description?

> `optional` **neighborhood\_description**: `string`

description of the neighborhood where the hotel is located

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`neighborhood_description`](../interfaces/IHotelLocationInfo.md#neighborhood_description)

#### Defined in

main.ts:205927

***

### overall\_score?

> `optional` **overall\_score**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`overall_score`](../interfaces/IHotelLocationInfo.md#overall_score)

#### Defined in

main.ts:205934

***

### score\_by\_categories?

> `optional` **score\_by\_categories**: `object`

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`score_by_categories`](../interfaces/IHotelLocationInfo.md#score_by_categories)

#### Defined in

main.ts:205937

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:205963

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:205997

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelLocationInfo`](HotelLocationInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HotelLocationInfo`](HotelLocationInfo.md)

#### Defined in

main.ts:205990
