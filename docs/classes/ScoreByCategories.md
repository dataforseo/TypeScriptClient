[**Documentation**](../README.md)

***

[Documentation](../README.md) / ScoreByCategories

# Class: ScoreByCategories

Defined in: main.ts:221006

## Implements

- [`IScoreByCategories`](../interfaces/IScoreByCategories.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ScoreByCategories()

> **new ScoreByCategories**(`data`?): [`ScoreByCategories`](ScoreByCategories.md)

Defined in: main.ts:221031

#### Parameters

##### data?

[`IScoreByCategories`](../interfaces/IScoreByCategories.md)

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)

## Properties

### airport\_access?

> `optional` **airport\_access**: `number`

Defined in: main.ts:221027

score relative to nearby airports
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby airports

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`airport_access`](../interfaces/IScoreByCategories.md#airport_access)

***

### overall?

> `optional` **overall**: `number`

Defined in: main.ts:221011

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`overall`](../interfaces/IScoreByCategories.md#overall)

***

### restaurants?

> `optional` **restaurants**: `number`

Defined in: main.ts:221019

score relative to nearby restaurants
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby restaurants

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`restaurants`](../interfaces/IScoreByCategories.md#restaurants)

***

### things\_to\_do?

> `optional` **things\_to\_do**: `number`

Defined in: main.ts:221015

score relative to nearby things to do
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`things_to_do`](../interfaces/IScoreByCategories.md#things_to_do)

***

### transit?

> `optional` **transit**: `number`

Defined in: main.ts:221023

score relative to nearby transit options
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby transit options

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`transit`](../interfaces/IScoreByCategories.md#transit)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221040

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:221061

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ScoreByCategories`](ScoreByCategories.md)

Defined in: main.ts:221054

#### Parameters

##### data

`any`

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)
