**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ScoreByCategories

# Class: ScoreByCategories

## Implements

- [`IScoreByCategories`](../interfaces/IScoreByCategories.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ScoreByCategories(data)

> **new ScoreByCategories**(`data`?): [`ScoreByCategories`](ScoreByCategories.md)

#### Parameters

• **data?**: [`IScoreByCategories`](../interfaces/IScoreByCategories.md)

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)

#### Source

main.ts:206408

## Properties

### airport\_access?

> **`optional`** **airport\_access**: `number`

score relative to nearby airports
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby airports

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`airport_access`](../interfaces/IScoreByCategories.md#airport_access)

#### Source

main.ts:206404

***

### overall?

> **`optional`** **overall**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`overall`](../interfaces/IScoreByCategories.md#overall)

#### Source

main.ts:206388

***

### restaurants?

> **`optional`** **restaurants**: `number`

score relative to nearby restaurants
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby restaurants

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`restaurants`](../interfaces/IScoreByCategories.md#restaurants)

#### Source

main.ts:206396

***

### things\_to\_do?

> **`optional`** **things\_to\_do**: `number`

score relative to nearby things to do
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`things_to_do`](../interfaces/IScoreByCategories.md#things_to_do)

#### Source

main.ts:206392

***

### transit?

> **`optional`** **transit**: `number`

score relative to nearby transit options
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby transit options

#### Implementation of

[`IScoreByCategories`](../interfaces/IScoreByCategories.md).[`transit`](../interfaces/IScoreByCategories.md#transit)

#### Source

main.ts:206400

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:206417

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:206438

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ScoreByCategories`](ScoreByCategories.md)

#### Parameters

• **data**: `any`

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)

#### Source

main.ts:206431
