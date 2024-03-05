[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeLiveResultInfo

# Class: KeywordsDataBingSearchVolumeLiveResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeLiveResultInfo.md#constructor)

### Properties

- [categories](KeywordsDataBingSearchVolumeLiveResultInfo.md#categories)
- [competition](KeywordsDataBingSearchVolumeLiveResultInfo.md#competition)
- [cpc](KeywordsDataBingSearchVolumeLiveResultInfo.md#cpc)
- [device](KeywordsDataBingSearchVolumeLiveResultInfo.md#device)
- [keyword](KeywordsDataBingSearchVolumeLiveResultInfo.md#keyword)
- [language\_code](KeywordsDataBingSearchVolumeLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataBingSearchVolumeLiveResultInfo.md#location_code)
- [monthly\_searches](KeywordsDataBingSearchVolumeLiveResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataBingSearchVolumeLiveResultInfo.md#search_partners)
- [search\_volume](KeywordsDataBingSearchVolumeLiveResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataBingSearchVolumeLiveResultInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeLiveResultInfo**(`data?`): [`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Defined in

[main.ts:123393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123393)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[categories](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#categories)

#### Defined in

[main.ts:123385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123385)

___

### competition

• `Optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[competition](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#competition)

#### Defined in

[main.ts:123373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123373)

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[cpc](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#cpc)

#### Defined in

[main.ts:123377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123377)

___

### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[device](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#device)

#### Defined in

[main.ts:123366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123366)

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#keyword)

#### Defined in

[main.ts:123355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123355)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

[main.ts:123361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123361)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

[main.ts:123358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123358)

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#monthly_searches)

#### Defined in

[main.ts:123389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123389)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[search_partners](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_partners)

#### Defined in

[main.ts:123363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123363)

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting;
search volume is rounded to the nearest tens;
if there is no data, the value is null

#### Implementation of

[IKeywordsDataBingSearchVolumeLiveResultInfo](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[search_volume](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_volume)

#### Defined in

[main.ts:123382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123382)

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

[main.ts:123402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123402)

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

[main.ts:123436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123436)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Defined in

[main.ts:123429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L123429)
