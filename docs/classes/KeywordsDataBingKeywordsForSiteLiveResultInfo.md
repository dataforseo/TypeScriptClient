[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteLiveResultInfo

# Class: KeywordsDataBingKeywordsForSiteLiveResultInfo

Defined in: main.ts:142550

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteLiveResultInfo()

> **new KeywordsDataBingKeywordsForSiteLiveResultInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

Defined in: main.ts:142586

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:142578

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#categories)

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:142568

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#competition)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:142572

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#cpc)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:142561

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:142552

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:142556

language code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:142554

location code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#location_code)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:142582

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:142558

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:142575

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal valuesif there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:142595

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:142629

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

Defined in: main.ts:142622

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)
