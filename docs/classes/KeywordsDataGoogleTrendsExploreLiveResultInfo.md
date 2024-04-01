[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreLiveResultInfo

# Class: KeywordsDataGoogleTrendsExploreLiveResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#constructor)

### Properties

- [check\_url](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#check_url)
- [datetime](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#datetime)
- [items](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#items)
- [items\_count](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#items_count)
- [keywords](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#keywords)
- [language\_code](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#location_code)
- [type](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#type)

### Methods

- [init](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreLiveResultInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreLiveResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Defined in

main.ts:123870

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[check_url](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#check_url)

#### Defined in

main.ts:123857

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[datetime](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#datetime)

#### Defined in

main.ts:123862

___

### items

• `Optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[items](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items)

#### Defined in

main.ts:123866

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[items_count](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#items_count)

#### Defined in

main.ts:123864

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[keywords](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#keywords)

#### Defined in

main.ts:123846

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#language_code)

#### Defined in

main.ts:123854

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#location_code)

#### Defined in

main.ts:123851

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md).[type](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResultInfo.md#type)

#### Defined in

main.ts:123848

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

main.ts:123879

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

main.ts:123911

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResultInfo`](KeywordsDataGoogleTrendsExploreLiveResultInfo.md)

#### Defined in

main.ts:123904
