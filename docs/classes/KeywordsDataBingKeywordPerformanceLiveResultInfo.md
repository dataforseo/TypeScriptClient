[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceLiveResultInfo

# Class: KeywordsDataBingKeywordPerformanceLiveResultInfo

## Implements

- [`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#constructor)

### Properties

- [keyword](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword)
- [keyword\_kpi](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword_kpi)
- [language\_code](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#location_code)
- [month](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#month)
- [year](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#year)

### Methods

- [init](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceLiveResultInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Defined in

main.ts:127902

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword)

#### Defined in

main.ts:127881

___

### keyword\_kpi

• `Optional` **keyword\_kpi**: [`KeywordKpi`](KeywordKpi.md)

object containing keyword metrics
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[keyword_kpi](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#keyword_kpi)

#### Defined in

main.ts:127898

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#language_code)

#### Defined in

main.ts:127887

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#location_code)

#### Defined in

main.ts:127884

___

### month

• `Optional` **month**: `number`

indicates the month for which the data is provided for
example:
10

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[month](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#month)

#### Defined in

main.ts:127895

___

### year

• `Optional` **year**: `number`

indicates the year for which the data is provided for
example:
2020

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md).[year](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResultInfo.md#year)

#### Defined in

main.ts:127891

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

main.ts:127911

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

main.ts:127933

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)

#### Defined in

main.ts:127926
