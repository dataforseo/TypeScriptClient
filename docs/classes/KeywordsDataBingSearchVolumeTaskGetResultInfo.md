[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeTaskGetResultInfo

# Class: KeywordsDataBingSearchVolumeTaskGetResultInfo

Defined in: main.ts:139122

## Implements

- [`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeTaskGetResultInfo()

> **new KeywordsDataBingSearchVolumeTaskGetResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

Defined in: main.ts:139161

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:139153

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#categories)

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:139141

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#competition)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:139145

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#cpc)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:139133

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:139124

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:139128

language code in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:139126

location code in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#location_code)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:139157

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:139130

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:139150

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine, depending on the user’s targeting
search volume is rounded to the nearest tens
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeTaskGetResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingSearchVolumeTaskGetResultInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:139170

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:139204

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)

Defined in: main.ts:139197

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeTaskGetResultInfo`](KeywordsDataBingSearchVolumeTaskGetResultInfo.md)
