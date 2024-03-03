[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

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

main.ts:125739

## Properties

### categories

• `Optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[categories](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#categories)

#### Defined in

main.ts:125731

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

main.ts:125719

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[cpc](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#cpc)

#### Defined in

main.ts:125723

___

### device

• `Optional` **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[device](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#device)

#### Defined in

main.ts:125711

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[keyword](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:125701

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[language_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:125705

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[location_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:125703

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[monthly_searches](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)

#### Defined in

main.ts:125735

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[search_partners](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_partners)

#### Defined in

main.ts:125707

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

main.ts:125728

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

main.ts:125748

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

main.ts:125782

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

main.ts:125775
