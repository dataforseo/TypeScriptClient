[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

# Class: KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#constructor)

### Properties

- [datetime](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#datetime)
- [items](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items)
- [items\_count](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items_count)
- [keywords](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#keywords)
- [language\_code](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#location_code)
- [type](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#type)

### Methods

- [init](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo**(`data?`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Defined in

main.ts:125838

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[datetime](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#datetime)

#### Defined in

main.ts:125829

___

### items

• `Optional` **items**: [`BaseDataforseoTrendsItem`](BaseDataforseoTrendsItem.md)[]

keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[items](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items)

#### Defined in

main.ts:125834

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[items_count](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#items_count)

#### Defined in

main.ts:125831

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[keywords](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#keywords)

#### Defined in

main.ts:125816

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#language_code)

#### Defined in

main.ts:125824

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#location_code)

#### Defined in

main.ts:125821

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md).[type](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md#type)

#### Defined in

main.ts:125818

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

main.ts:125847

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

main.ts:125878

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)

#### Defined in

main.ts:125871
