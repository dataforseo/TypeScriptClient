[**Documentation**](../README.md)

***

[Documentation](../README.md) / ScoreByCategories

# Class: ScoreByCategories

Defined in: main.ts:220498

## Implements

- [`IScoreByCategories`](../interfaces/IScoreByCategories.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ScoreByCategories()

> **new ScoreByCategories**(`data`?): [`ScoreByCategories`](ScoreByCategories.md)

Defined in: main.ts:220523

#### Parameters

##### data?

[`IScoreByCategories`](../interfaces/IScoreByCategories.md)

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)

## Properties

### airport\_access?

> `optional` **airport\_access**: `number`

Defined in: main.ts:220519

score relative to nearby airports
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby airports

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`airport_access`](../interfaces/IScoreByCategories.md#airport_access)

***

### overall?

> `optional` **overall**: `number`

Defined in: main.ts:220503

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`overall`](../interfaces/IScoreByCategories.md#overall)

***

### restaurants?

> `optional` **restaurants**: `number`

Defined in: main.ts:220511

score relative to nearby restaurants
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby restaurants

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`restaurants`](../interfaces/IScoreByCategories.md#restaurants)

***

### things\_to\_do?

> `optional` **things\_to\_do**: `number`

Defined in: main.ts:220507

score relative to nearby things to do
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`things_to_do`](../interfaces/IScoreByCategories.md#things_to_do)

***

### transit?

> `optional` **transit**: `number`

Defined in: main.ts:220515

score relative to nearby transit options
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby transit options

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`transit`](../interfaces/IScoreByCategories.md#transit)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:220532

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:220553

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ScoreByCategories`](ScoreByCategories.md)

Defined in: main.ts:220546

#### Parameters

##### data

`any`

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)
