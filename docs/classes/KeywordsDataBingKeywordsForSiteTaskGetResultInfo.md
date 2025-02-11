[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForSiteTaskGetResultInfo

Defined in: main.ts:142204

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTaskGetResultInfo()

> **new KeywordsDataBingKeywordsForSiteTaskGetResultInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

Defined in: main.ts:142245

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:142236

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#categories)

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:142225

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#competition)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:142229

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#cpc)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:142217

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:142206

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:142212

language code in a POST array
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:142209

location code in a POST array
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#location_code)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:142241

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
search volume is rounded to the closest decimal values
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:142214

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:142233

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea on Bing search engine depending on the user’s targeting
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResultInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:142254

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:142288

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)

Defined in: main.ts:142281

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResultInfo`](KeywordsDataBingKeywordsForSiteTaskGetResultInfo.md)
