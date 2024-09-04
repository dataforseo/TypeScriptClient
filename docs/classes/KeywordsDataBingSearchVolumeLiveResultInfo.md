[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingSearchVolumeLiveResultInfo

# Class: KeywordsDataBingSearchVolumeLiveResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeLiveResultInfo()

> **new KeywordsDataBingSearchVolumeLiveResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:132430

## Properties

### categories?

> `optional` **categories**: `string`[]

product and service categories
our API doesn’t return categories for this endpoint: the parameter will always equal null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#categories)

#### Defined in

main.ts:132422

***

### competition?

> `optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#competition)

#### Defined in

main.ts:132410

***

### cpc?

> `optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#cpc)

#### Defined in

main.ts:132414

***

### device?

> `optional` **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#device)

#### Defined in

main.ts:132403

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#keyword)

#### Defined in

main.ts:132392

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

main.ts:132398

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:132395

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data then the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#monthly_searches)

#### Defined in

main.ts:132426

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_partners)

#### Defined in

main.ts:132400

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average search volume rate
represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting;
search volume is rounded to the nearest tens;
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingSearchVolumeLiveResultInfo.md#search_volume)

#### Defined in

main.ts:132419

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:132439

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:132473

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeLiveResultInfo`](KeywordsDataBingSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:132466
