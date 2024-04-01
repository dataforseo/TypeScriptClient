[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#constructor)

### Properties

- [datetime](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#datetime)
- [items](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items)
- [items\_count](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items_count)
- [keywords](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#keywords)
- [language\_code](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#location_code)
- [type](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#type)

### Methods

- [init](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsMergedDataLiveResultInfo**(`data?`): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Defined in

main.ts:127091

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[datetime](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#datetime)

#### Defined in

main.ts:127083

___

### items

• `Optional` **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[items](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items)

#### Defined in

main.ts:127087

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[items_count](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#items_count)

#### Defined in

main.ts:127085

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[keywords](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#keywords)

#### Defined in

main.ts:127070

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#language_code)

#### Defined in

main.ts:127078

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#location_code)

#### Defined in

main.ts:127075

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md).[type](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md#type)

#### Defined in

main.ts:127072

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

main.ts:127100

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

main.ts:127131

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)

#### Defined in

main.ts:127124
