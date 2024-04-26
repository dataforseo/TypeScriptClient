**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Location

# Class: Location

## Implements

- [`ILocation`](../interfaces/ILocation.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Location(data)

> **new Location**(`data`?): [`Location`](Location.md)

#### Parameters

• **data?**: [`ILocation`](../interfaces/ILocation.md)

#### Returns

[`Location`](Location.md)

#### Source

main.ts:203377

## Properties

### latitude?

> **`optional`** **latitude**: `number`

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`latitude`](../interfaces/ILocation.md#latitude)

#### Source

main.ts:203365

***

### location\_chain?

> **`optional`** **location\_chain**: [`LocationChain`](LocationChain.md)[]

elements of the location chain
additional parameters of each element of the location chain

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`location_chain`](../interfaces/ILocation.md#location_chain)

#### Source

main.ts:203373

***

### longitude?

> **`optional`** **longitude**: `number`

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`longitude`](../interfaces/ILocation.md#longitude)

#### Source

main.ts:203370

***

### maps\_url?

> **`optional`** **maps\_url**: `string`

url to the location of the hotel in google maps

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`maps_url`](../interfaces/ILocation.md#maps_url)

#### Source

main.ts:203352

***

### neighborhood?

> **`optional`** **neighborhood**: `string`

name of the neighborhood where the hotel is located

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`neighborhood`](../interfaces/ILocation.md#neighborhood)

#### Source

main.ts:203348

***

### neighborhood\_description?

> **`optional`** **neighborhood\_description**: `string`

description of the neighborhood where the hotel is located

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`neighborhood_description`](../interfaces/ILocation.md#neighborhood_description)

#### Source

main.ts:203350

***

### overall\_score?

> **`optional`** **overall\_score**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`overall_score`](../interfaces/ILocation.md#overall_score)

#### Source

main.ts:203357

***

### score\_by\_categories?

> **`optional`** **score\_by\_categories**: [`ScoreByCategories`](ScoreByCategories.md)

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Implementation of

[`ILocation`](../interfaces/ILocation.md).[`score_by_categories`](../interfaces/ILocation.md#score_by_categories)

#### Source

main.ts:203360

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:203386

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:203414

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Location`](Location.md)

#### Parameters

• **data**: `any`

#### Returns

[`Location`](Location.md)

#### Source

main.ts:203407
