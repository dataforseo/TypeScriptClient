**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteLiveResultInfo

# Class: KeywordsDataBingKeywordsForSiteLiveResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteLiveResultInfo(data)

> **new KeywordsDataBingKeywordsForSiteLiveResultInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Source

main.ts:130402

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#categories)

#### Source

main.ts:130394

***

### competition?

> **`optional`** **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.
Possible values: 0.1, 0.5,0.90.1 – low competition,
0.5 – medium competition,
0.9 – high competition;
if there is no data the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#competition)

#### Source

main.ts:130384

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#cpc)

#### Source

main.ts:130388

***

### device?

> **`optional`** **device**: `string`

device type in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#device)

#### Source

main.ts:130377

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#keyword)

#### Source

main.ts:130368

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#language_code)

#### Source

main.ts:130372

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#location_code)

#### Source

main.ts:130370

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#monthly_searches)

#### Source

main.ts:130398

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_partners)

#### Source

main.ts:130374

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal valuesif there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveResultInfo.md#search_volume)

#### Source

main.ts:130391

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:130411

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:130445

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForSiteLiveResultInfo`](KeywordsDataBingKeywordsForSiteLiveResultInfo.md)

#### Source

main.ts:130438
