[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeLiveResultInfo

# Class: KeywordsDataBingSearchVolumeLiveResultInfo

Defined in: main.ts:139624

## Implements

- [`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeLiveResultInfo()

> **new KeywordsDataBingSearchVolumeLiveResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

Defined in: main.ts:139664

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:139656

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#categories)

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:139644

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#competition)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:139648

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#cpc)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:139637

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:139626

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:139632

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:139629

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#location_code)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:139660

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:139634

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:139653

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting;
search volume is rounded to the nearest tens;
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:139673

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:139707

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

Defined in: main.ts:139700

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)
