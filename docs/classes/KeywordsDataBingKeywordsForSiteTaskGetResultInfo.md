[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForSiteTaskGetResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#constructor)

### Properties

- [categories](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#categories)
- [competition](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#competition)
- [cpc](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#cpc)
- [device](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#device)
- [keyword](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#keyword)
- [language\_code](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#language_code)
- [location\_code](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#location_code)
- [monthly\_searches](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_partners)
- [search\_volume](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteTaskGetResultInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Defined in

[main.ts:124240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124240)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[categories](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#categories)

#### Defined in

[main.ts:124231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124231)

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

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[competition](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#competition)

#### Defined in

[main.ts:124220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124220)

___


### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[cpc](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#cpc)

#### Defined in

[main.ts:124224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124224)

___


### device

• `Optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[device](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#device)

#### Defined in

[main.ts:124212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124212)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#keyword)

#### Defined in

[main.ts:124201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124201)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#language_code)

#### Defined in

[main.ts:124207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124207)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#location_code)

#### Defined in

[main.ts:124204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124204)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
search volume is rounded to the closest decimal values
if there is no data the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#monthly_searches)

#### Defined in

[main.ts:124236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124236)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_partners)

#### Defined in

[main.ts:124209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124209)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea on Bing search engine depending on the user’s targeting
if there is no data then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[search_volume](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_volume)

#### Defined in

[main.ts:124228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124228)

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

[main.ts:124249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124249)

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

[main.ts:124283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124283)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Defined in

[main.ts:124276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124276)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")