**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordData

# Class: KeywordData

## Implements

- [`IKeywordData`](../interfaces/IKeywordData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordData(data)

> **new KeywordData**(`data`?): [`KeywordData`](KeywordData.md)

#### Parameters

• **data?**: [`IKeywordData`](../interfaces/IKeywordData.md)

#### Returns

[`KeywordData`](KeywordData.md)

#### Source

main.ts:88778

## Properties

### avg\_backlinks\_info?

> **`optional`** **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`avg_backlinks_info`](../interfaces/IKeywordData.md#avg_backlinks_info)

#### Source

main.ts:88771

***

### impressions\_info?

> **`optional`** **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`impressions_info`](../interfaces/IKeywordData.md#impressions_info)

#### Source

main.ts:88765

***

### keyword?

> **`optional`** **keyword**: `string`

returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword`](../interfaces/IKeywordData.md#keyword)

#### Source

main.ts:88751

***

### keyword\_info?

> **`optional`** **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_info`](../interfaces/IKeywordData.md#keyword_info)

#### Source

main.ts:88757

***

### keyword\_properties?

> **`optional`** **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`keyword_properties`](../interfaces/IKeywordData.md#keyword_properties)

#### Source

main.ts:88759

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`language_code`](../interfaces/IKeywordData.md#language_code)

#### Source

main.ts:88755

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`location_code`](../interfaces/IKeywordData.md#location_code)

#### Source

main.ts:88753

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`se_type`](../interfaces/IKeywordData.md#se_type)

#### Source

main.ts:88749

***

### search\_intent\_info?

> **`optional`** **search\_intent\_info**: [`SearchIntentInfo`](SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`search_intent_info`](../interfaces/IKeywordData.md#search_intent_info)

#### Source

main.ts:88774

***

### serp\_info?

> **`optional`** **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordData`](../interfaces/IKeywordData.md).[`serp_info`](../interfaces/IKeywordData.md#serp_info)

#### Source

main.ts:88768

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:88787

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:88813

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordData`](KeywordData.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordData`](KeywordData.md)

#### Source

main.ts:88806
