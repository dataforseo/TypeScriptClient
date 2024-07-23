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

main.ts:132105

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#categories)

#### Source

main.ts:132097

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

main.ts:132085

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#cpc)

#### Source

main.ts:132089

***

### device?

> **`optional`** **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#device)

#### Source

main.ts:132077

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#keyword)

#### Source

main.ts:132068

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#language_code)

#### Source

main.ts:132072

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#location_code)

#### Source

main.ts:132070

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#monthly_searches)

#### Source

main.ts:132101

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_partners)

#### Source

main.ts:132074

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

main.ts:132094

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:132114

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:132148

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Source

main.ts:132141
