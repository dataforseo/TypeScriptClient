**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForSiteTaskGetResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTaskGetResultInfo(data)

> **new KeywordsDataBingKeywordsForSiteTaskGetResultInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Source

main.ts:129901

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#categories)

#### Source

main.ts:129892

***

### competition?

> **`optional`** **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#competition)

#### Source

main.ts:129881

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#cpc)

#### Source

main.ts:129885

***

### device?

> **`optional`** **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#device)

#### Source

main.ts:129873

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#keyword)

#### Source

main.ts:129862

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#language_code)

#### Source

main.ts:129868

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#location_code)

#### Source

main.ts:129865

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
search volume is rounded to the closest decimal values
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#monthly_searches)

#### Source

main.ts:129897

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_partners)

#### Source

main.ts:129870

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea on Bing search engine depending on the user’s targeting
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_volume)

#### Source

main.ts:129889

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:129910

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:129944

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Source

main.ts:129937
