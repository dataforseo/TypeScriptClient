[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ScoreByCategories

# Class: ScoreByCategories

## Implements

- [`IScoreByCategories`](../interfaces/IScoreByCategories.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ScoreByCategories.md#constructor)

### Properties

- [airport\_access](ScoreByCategories.md#airport_access)
- [overall](ScoreByCategories.md#overall)
- [restaurants](ScoreByCategories.md#restaurants)
- [things\_to\_do](ScoreByCategories.md#things_to_do)
- [transit](ScoreByCategories.md#transit)

### Methods

- [init](ScoreByCategories.md#init)
- [toJSON](ScoreByCategories.md#tojson)
- [fromJS](ScoreByCategories.md#fromjs)

## Constructors

### constructor

• **new ScoreByCategories**(`data?`): [`ScoreByCategories`](ScoreByCategories.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IScoreByCategories`](../interfaces/IScoreByCategories.md) |

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)

#### Defined in

[main.ts:196804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196804)

## Properties

### airport\_access

• `Optional` **airport\_access**: `number`

score relative to nearby airports
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby airports

#### Implementation of

[IScoreByCategories](../interfaces/IScoreByCategories.md).[airport_access](../interfaces/IScoreByCategories.md#airport_access)

#### Defined in

[main.ts:196800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196800)

___


### overall

• `Optional` **overall**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[IScoreByCategories](../interfaces/IScoreByCategories.md).[overall](../interfaces/IScoreByCategories.md#overall)

#### Defined in

[main.ts:196784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196784)

___


### restaurants

• `Optional` **restaurants**: `number`

score relative to nearby restaurants
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby restaurants

#### Implementation of

[IScoreByCategories](../interfaces/IScoreByCategories.md).[restaurants](../interfaces/IScoreByCategories.md#restaurants)

#### Defined in

[main.ts:196792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196792)

___


### things\_to\_do

• `Optional` **things\_to\_do**: `number`

score relative to nearby things to do
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do

#### Implementation of

[IScoreByCategories](../interfaces/IScoreByCategories.md).[things_to_do](../interfaces/IScoreByCategories.md#things_to_do)

#### Defined in

[main.ts:196788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196788)

___


### transit

• `Optional` **transit**: `number`

score relative to nearby transit options
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby transit options

#### Implementation of

[IScoreByCategories](../interfaces/IScoreByCategories.md).[transit](../interfaces/IScoreByCategories.md#transit)

#### Defined in

[main.ts:196796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196796)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:196813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196813)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:196834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196834)

___


### fromJS

▸ **fromJS**(`data`): [`ScoreByCategories`](ScoreByCategories.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ScoreByCategories`](ScoreByCategories.md)

#### Defined in

[main.ts:196827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196827)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")