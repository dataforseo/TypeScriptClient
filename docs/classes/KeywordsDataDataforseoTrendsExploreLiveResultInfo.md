[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsExploreLiveResultInfo

# Class: KeywordsDataDataforseoTrendsExploreLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#constructor)

### Properties

- [datetime](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#datetime)
- [items](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items)
- [items\_count](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items_count)
- [keywords](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#keywords)
- [language\_code](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#location_code)
- [type](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#type)

### Methods

- [init](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsExploreLiveResultInfo**(`data?`): [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Defined in

main.ts:125021

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[datetime](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#datetime)

#### Defined in

main.ts:125013

___

### items

• `Optional` **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[items](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items)

#### Defined in

main.ts:125017

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[items_count](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#items_count)

#### Defined in

main.ts:125015

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[keywords](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#keywords)

#### Defined in

main.ts:125000

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#language_code)

#### Defined in

main.ts:125008

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#location_code)

#### Defined in

main.ts:125005

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md).[type](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResultInfo.md#type)

#### Defined in

main.ts:125002

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

main.ts:125030

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

main.ts:125061

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)

#### Defined in

main.ts:125054
