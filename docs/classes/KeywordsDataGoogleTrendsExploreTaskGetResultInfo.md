[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTaskGetResultInfo

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

main.ts:122982

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[check_url](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:122969

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

main.ts:122974

___

### items

• `Optional` **items**: [`BaseGoogleTrendsItem`](BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[items](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items)

#### Defined in

main.ts:122978

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[items_count](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:122976

___

### keywords

• `Optional` **keywords**: `string`[]

keywords in a POST array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[keywords](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#keywords)

#### Defined in

main.ts:122958

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:122966

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:122963

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md).[type](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResultInfo.md#type)

#### Defined in

main.ts:122960

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

main.ts:122991

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

main.ts:123023

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

main.ts:123016
