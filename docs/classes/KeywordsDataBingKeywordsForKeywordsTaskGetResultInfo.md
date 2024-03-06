[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#constructor)

### Properties

- [categories](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#categories)
- [competition](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#competition)
- [cpc](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#cpc)
- [device](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#device)
- [keyword](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#keyword)
- [language\_code](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#location_code)
- [monthly\_searches](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_partners)
- [search\_volume](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

[main.ts:125595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125595)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[categories](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#categories)

#### Defined in

[main.ts:125587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125587)

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

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[competition](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#competition)

#### Defined in

[main.ts:125575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125575)

___


### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[cpc](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#cpc)

#### Defined in

[main.ts:125579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125579)

___


### device

• `Optional` **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[device](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#device)

#### Defined in

[main.ts:125567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125567)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:125557](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125557)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:125561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125561)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:125559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125559)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)

#### Defined in

[main.ts:125591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125591)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_partners)

#### Defined in

[main.ts:125563](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125563)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targeting
search volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[search_volume](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

#### Defined in

[main.ts:125584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125584)

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

[main.ts:125604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125604)

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

[main.ts:125638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125638)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

[main.ts:125631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125631)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")