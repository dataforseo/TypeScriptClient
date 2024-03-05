[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTaskGetResultInfo

# Class: KeywordsDataGoogleTrendsExploreTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#check_url)
- [datetime](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#datetime)
- [items](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items)
- [items\_count](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items_count)
- [keywords](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#keywords)
- [language\_code](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#location_code)
- [type](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#type)

### Methods

- [init](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreTaskGetResultInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Defined in

[main.ts:121227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121227)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[check_url](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#check_url)

#### Defined in

[main.ts:121214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121214)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[datetime](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#datetime)

#### Defined in

[main.ts:121219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121219)

___

### items

• `Optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[items](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items)

#### Defined in

[main.ts:121223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121223)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[items_count](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items_count)

#### Defined in

[main.ts:121221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121221)

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[keywords](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#keywords)

#### Defined in

[main.ts:121203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121203)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:121211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121211)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:121208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121208)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[type](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#type)

#### Defined in

[main.ts:121205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121205)

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

[main.ts:121236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121236)

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

[main.ts:121268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121268)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)

#### Defined in

[main.ts:121261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121261)
