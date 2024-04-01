[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTaskGetResultInfo

# Class: KeywordsDataBingKeywordPerformanceTaskGetResultInfo

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#constructor)

### Properties

- [keyword](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword)
- [keyword\_kpi](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword_kpi)
- [language\_code](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#location_code)
- [month](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#month)
- [year](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#year)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTaskGetResultInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

#### Defined in

main.ts:132729

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:132708

___

### keyword\_kpi

• `Optional` **keyword\_kpi**: [`KeywordKpi`](KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[keyword_kpi](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#keyword_kpi)

#### Defined in

main.ts:132725

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:132714

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:132711

___

### month

• `Optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[month](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#month)

#### Defined in

main.ts:132722

___

### year

• `Optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md).[year](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetResultInfo.md#year)

#### Defined in

main.ts:132718

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

main.ts:132738

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

main.ts:132760

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)

#### Defined in

main.ts:132753
