**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo(data)

> **new KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Source

main.ts:131120

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#categories)

#### Source

main.ts:131112

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

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#competition)

#### Source

main.ts:131100

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#cpc)

#### Source

main.ts:131104

***

### device?

> **`optional`** **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#device)

#### Source

main.ts:131092

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#keyword)

#### Source

main.ts:131082

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#language_code)

#### Source

main.ts:131086

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#location_code)

#### Source

main.ts:131084

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)

#### Source

main.ts:131116

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_partners)

#### Source

main.ts:131088

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targeting
search volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

#### Source

main.ts:131109

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:131129

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:131163

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo.md)

#### Source

main.ts:131156
