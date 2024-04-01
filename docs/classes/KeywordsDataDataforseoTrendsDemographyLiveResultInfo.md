[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Class: KeywordsDataDataforseoTrendsDemographyLiveResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#constructor)

### Properties

- [datetime](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#datetime)
- [items](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items)
- [items\_count](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items_count)
- [keywords](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#keywords)
- [language\_code](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#location_code)
- [type](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#type)

### Methods

- [init](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsDemographyLiveResultInfo**(`data?`): [`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsDemographyLiveResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Defined in

main.ts:126609

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[datetime](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#datetime)

#### Defined in

main.ts:126601

___

### items

• `Optional` **items**: [`DataforseoTrendsDemographyInfo`](DataforseoTrendsDemographyInfo.md)[]

contains keyword popularity and related data

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[items](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items)

#### Defined in

main.ts:126605

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[items_count](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#items_count)

#### Defined in

main.ts:126603

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[keywords](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#keywords)

#### Defined in

main.ts:126588

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#language_code)

#### Defined in

main.ts:126596

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#location_code)

#### Defined in

main.ts:126593

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResultInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md).[type](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResultInfo.md#type)

#### Defined in

main.ts:126590

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

main.ts:126618

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

main.ts:126649

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResultInfo`](KeywordsDataDataforseoTrendsDemographyLiveResultInfo.md)

#### Defined in

main.ts:126642
