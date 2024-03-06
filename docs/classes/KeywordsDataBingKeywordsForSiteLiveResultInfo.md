[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteLiveResultInfo

# Class: KeywordsDataBingKeywordsForSiteLiveResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#constructor)

### Properties

- [categories](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#categories)
- [competition](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#competition)
- [cpc](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#cpc)
- [device](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#device)
- [keyword](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#keyword)
- [language\_code](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#location_code)
- [monthly\_searches](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_partners)
- [search\_volume](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteLiveResultInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Defined in

[main.ts:124741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124741)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[categories](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#categories)

#### Defined in

[main.ts:124733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124733)

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

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[competition](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#competition)

#### Defined in

[main.ts:124723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124723)

___


### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[cpc](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#cpc)

#### Defined in

[main.ts:124727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124727)

___


### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[device](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#device)

#### Defined in

[main.ts:124716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124716)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#keyword)

#### Defined in

[main.ts:124707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124707)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#language_code)

#### Defined in

[main.ts:124711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124711)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#location_code)

#### Defined in

[main.ts:124709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124709)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#monthly_searches)

#### Defined in

[main.ts:124737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124737)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[search_partners](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_partners)

#### Defined in

[main.ts:124713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124713)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal valuesif there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[search_volume](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_volume)

#### Defined in

[main.ts:124730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124730)

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

[main.ts:124750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124750)

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

[main.ts:124784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124784)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Defined in

[main.ts:124777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124777)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")