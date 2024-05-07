**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTaskGetResultInfo

# Class: KeywordsDataBingSearchVolumeTaskGetResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTaskGetResultInfo(data)

> **new KeywordsDataBingSearchVolumeTaskGetResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Source

main.ts:129417

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#categories)

#### Source

main.ts:129409

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

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#competition)

#### Source

main.ts:129397

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#cpc)

#### Source

main.ts:129401

***

### device?

> **`optional`** **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#device)

#### Source

main.ts:129389

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#keyword)

#### Source

main.ts:129380

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#language_code)

#### Source

main.ts:129384

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#location_code)

#### Source

main.ts:129382

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#monthly_searches)

#### Source

main.ts:129413

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_partners)

#### Source

main.ts:129386

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine, depending on the user’s targeting
search volume is rounded to the nearest tens
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_volume)

#### Source

main.ts:129406

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:129426

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:129460

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Source

main.ts:129453
