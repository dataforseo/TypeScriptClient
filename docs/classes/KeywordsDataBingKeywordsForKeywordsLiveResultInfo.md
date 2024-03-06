[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsLiveResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#constructor)

### Properties

- [categories](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#categories)
- [competition](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#competition)
- [cpc](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#cpc)
- [device](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#device)
- [keyword](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#keyword)
- [language\_code](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#language_code)
- [location\_code](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#location_code)
- [monthly\_searches](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#monthly_searches)
- [search\_partners](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_partners)
- [search\_volume](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_volume)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsLiveResultInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:126113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126113)

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[categories](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#categories)

#### Defined in

[main.ts:126105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126105)

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

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[competition](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#competition)

#### Defined in

[main.ts:126094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126094)

___


### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[cpc](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#cpc)

#### Defined in

[main.ts:126098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126098)

___


### device

• `Optional` **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[device](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#device)

#### Defined in

[main.ts:126087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126087)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[keyword](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#keyword)

#### Defined in

[main.ts:126075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126075)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#language_code)

#### Defined in

[main.ts:126081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126081)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#location_code)

#### Defined in

[main.ts:126078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126078)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#monthly_searches)

#### Defined in

[main.ts:126109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126109)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks is included in the response

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[search_partners](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_partners)

#### Defined in

[main.ts:126083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126083)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsLiveResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[search_volume](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_volume)

#### Defined in

[main.ts:126102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126102)

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

[main.ts:126122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126122)

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

[main.ts:126156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126156)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Defined in

[main.ts:126149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126149)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")