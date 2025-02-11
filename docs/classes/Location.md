[**Documentation**](../README.md)

***

[Documentation](../README.md) / Location

# Class: Location

Defined in: main.ts:221102

## Implements

- [`ILocation`](../interfaces/ILocation.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Location()

> **new Location**(`data`?): [`Location`](Location.md)

Defined in: main.ts:221133

#### Parameters

##### data?

[`ILocation`](../interfaces/ILocation.md)

#### Returns

[`Location`](Location.md)

## Properties

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:221121

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`latitude`](../interfaces/ILocation.md#latitude)

***

### location\_chain?

> `optional` **location\_chain**: [`LocationChain`](LocationChain.md)[]

Defined in: main.ts:221129

elements of the location chain
additional parameters of each element of the location chain

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`location_chain`](../interfaces/ILocation.md#location_chain)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:221126

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`longitude`](../interfaces/ILocation.md#longitude)

***

### maps\_url?

> `optional` **maps\_url**: `string`

Defined in: main.ts:221108

url to the location of the hotel in google maps

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`maps_url`](../interfaces/ILocation.md#maps_url)

***

### neighborhood?

> `optional` **neighborhood**: `string`

Defined in: main.ts:221104

name of the neighborhood where the hotel is located

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`neighborhood`](../interfaces/ILocation.md#neighborhood)

***

### neighborhood\_description?

> `optional` **neighborhood\_description**: `string`

Defined in: main.ts:221106

description of the neighborhood where the hotel is located

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`neighborhood_description`](../interfaces/ILocation.md#neighborhood_description)

***

### overall\_score?

> `optional` **overall\_score**: `number`

Defined in: main.ts:221113

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`overall_score`](../interfaces/ILocation.md#overall_score)

***

### score\_by\_categories?

> `optional` **score\_by\_categories**: [`ScoreByCategories`](ScoreByCategories.md)

Defined in: main.ts:221116

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`score_by_categories`](../interfaces/ILocation.md#score_by_categories)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221142

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:221170

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Location`](Location.md)

Defined in: main.ts:221163

#### Parameters

##### data

`any`

#### Returns

[`Location`](Location.md)
