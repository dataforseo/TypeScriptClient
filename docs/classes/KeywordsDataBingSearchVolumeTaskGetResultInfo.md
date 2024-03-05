[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTaskGetResultInfo

# Class: KeywordsDataBingSearchVolumeTaskGetResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#constructor)

### Properties

- [categories](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#categories)
- [competition](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#competition)
- [cpc](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#cpc)
- [device](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#device)
- [keyword](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#keyword)
- [language\_code](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#location_code)
- [monthly\_searches](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_partners)
- [search\_volume](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTaskGetResultInfo**(`data?`): [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Defined in

[main.ts:122898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122898)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[categories](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#categories)

#### Defined in

[main.ts:122890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122890)

___

### competition

• `Optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[competition](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#competition)

#### Defined in

[main.ts:122878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122878)

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[cpc](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#cpc)

#### Defined in

[main.ts:122882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122882)

___

### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[device](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#device)

#### Defined in

[main.ts:122870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122870)

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:122861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122861)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:122865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122865)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:122863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122863)

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#monthly_searches)

#### Defined in

[main.ts:122894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122894)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_partners)

#### Defined in

[main.ts:122867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122867)

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine, depending on the user’s targeting
search volume is rounded to the nearest tens
if there is no data then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeTaskGetResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[search_volume](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_volume)

#### Defined in

[main.ts:122887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122887)

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

[main.ts:122907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122907)

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

[main.ts:122941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122941)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Defined in

[main.ts:122934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122934)
