[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForSiteTaskGetResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTaskGetResultInfo()

> **new KeywordsDataBingKeywordsForSiteTaskGetResultInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Defined in

main.ts:133279

## Properties

### categories?

> `optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#categories)

#### Defined in

main.ts:133270

***

### competition?

> `optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#competition)

#### Defined in

main.ts:133259

***

### cpc?

> `optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#cpc)

#### Defined in

main.ts:133263

***

### device?

> `optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#device)

#### Defined in

main.ts:133251

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:133240

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:133246

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:133243

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
search volume is rounded to the closest decimal values
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#monthly_searches)

#### Defined in

main.ts:133275

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_partners)

#### Defined in

main.ts:133248

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea on Bing search engine depending on the user’s targeting
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_volume)

#### Defined in

main.ts:133267

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:133288

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:133322

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Defined in

main.ts:133315
