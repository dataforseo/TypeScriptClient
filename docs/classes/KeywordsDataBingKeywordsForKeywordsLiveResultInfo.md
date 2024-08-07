**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsLiveResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsLiveResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsLiveResultInfo(data)

> **new KeywordsDataBingKeywordsForKeywordsLiveResultInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Source

main.ts:135334

## Properties

### categories?

> **`optional`** **categories**: `string`[]

product and service categories
legacy field, the value will always be null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`categories`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#categories)

#### Source

main.ts:135326

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

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#competition)

#### Source

main.ts:135315

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#cpc)

#### Source

main.ts:135319

***

### device?

> **`optional`** **device**: `string`

device type
indicates for what device type the data is provided;
possible values: all, mobile, desktop, tablet

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#device)

#### Source

main.ts:135308

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#keyword)

#### Source

main.ts:135296

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#language_code)

#### Source

main.ts:135302

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#location_code)

#### Source

main.ts:135299

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#monthly_searches)

#### Source

main.ts:135330

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

indicates whether data from partner networks is included in the response

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_partners)

#### Source

main.ts:135304

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targetingsearch volume is rounded to the closest decimal values
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataBingKeywordsForKeywordsLiveResultInfo.md#search_volume)

#### Source

main.ts:135323

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:135343

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:135377

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsLiveResultInfo`](KeywordsDataBingKeywordsForKeywordsLiveResultInfo.md)

#### Source

main.ts:135370
