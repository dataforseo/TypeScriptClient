[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo()

> **new KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

main.ts:134640

## Properties

### categories?

> `optional` **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#categories)

#### Defined in

main.ts:134632

***

### competition?

> `optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.9 
0.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#competition)

#### Defined in

main.ts:134620

***

### cpc?

> `optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#cpc)

#### Defined in

main.ts:134624

***

### device?

> `optional` **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#device)

#### Defined in

main.ts:134612

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:134602

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:134606

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:134604

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)

#### Defined in

main.ts:134636

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_partners)

#### Defined in

main.ts:134608

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targeting
search volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

#### Defined in

main.ts:134629

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:134649

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:134683

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

main.ts:134676
