[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

Defined in: main.ts:143408

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo()

> **new KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

Defined in: main.ts:143448

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:143440

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#categories)

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:143428

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#competition)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:143432

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#cpc)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:143420

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:143410

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:143414

language code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:143412

location code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#location_code)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:143444

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:143416

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:143437

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targeting
search volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:143457

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:143491

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

Defined in: main.ts:143484

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)
