[**Documentation**](../README.md)

***

[Documentation](../README.md) / HotelLocationInfo

# Class: HotelLocationInfo

Defined in: main.ts:219854

## Implements

- [`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HotelLocationInfo()

> **new HotelLocationInfo**(`data`?): [`HotelLocationInfo`](HotelLocationInfo.md)

Defined in: main.ts:219885

#### Parameters

##### data?

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md)

#### Returns

[`HotelLocationInfo`](HotelLocationInfo.md)

## Properties

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:219873

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`latitude`](../interfaces/IHotelLocationInfo.md#latitude)

***

### location\_chain?

> `optional` **location\_chain**: [`LocationChain`](LocationChain.md)[]

Defined in: main.ts:219881

elements of the location chain
additional parameters of each element of the location chain

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`location_chain`](../interfaces/IHotelLocationInfo.md#location_chain)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:219878

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`longitude`](../interfaces/IHotelLocationInfo.md#longitude)

***

### maps\_url?

> `optional` **maps\_url**: `string`

Defined in: main.ts:219860

url to the location of the hotel in google maps

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`maps_url`](../interfaces/IHotelLocationInfo.md#maps_url)

***

### neighborhood?

> `optional` **neighborhood**: `string`

Defined in: main.ts:219856

name of the neighborhood where the hotel is located

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`neighborhood`](../interfaces/IHotelLocationInfo.md#neighborhood)

***

### neighborhood\_description?

> `optional` **neighborhood\_description**: `string`

Defined in: main.ts:219858

description of the neighborhood where the hotel is located

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`neighborhood_description`](../interfaces/IHotelLocationInfo.md#neighborhood_description)

***

### overall\_score?

> `optional` **overall\_score**: `number`

Defined in: main.ts:219865

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`overall_score`](../interfaces/IHotelLocationInfo.md#overall_score)

***

### score\_by\_categories?

> `optional` **score\_by\_categories**: `object`

Defined in: main.ts:219868

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md).[`score_by_categories`](../interfaces/IHotelLocationInfo.md#score_by_categories)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:219894

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:219928

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HotelLocationInfo`](HotelLocationInfo.md)

Defined in: main.ts:219921

#### Parameters

##### data

`any`

#### Returns

[`HotelLocationInfo`](HotelLocationInfo.md)
