[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsLiveResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveResultInfo

Defined in: main.ts:143930

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsLiveResultInfo()

> **new KeywordsDataBingKeywordsForKeywordsLiveResultInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

Defined in: main.ts:143970

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:143962

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#categories)

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:143951

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#competition)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:143955

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#cpc)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:143944

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:143932

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:143938

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:143935

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#location_code)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:143966

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:143940

indicates whether data from partner networks is included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:143959

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:143979

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:144013

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

Defined in: main.ts:144006

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)
