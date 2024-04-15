**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordDataInfo

# Class: KeywordDataInfo

## Implements

- [`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordDataInfo(data)

> **new KeywordDataInfo**(`data`?): [`KeywordDataInfo`](KeywordDataInfo.md)

#### Parameters

• **data?**: [`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md)

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)

#### Source

main.ts:82057

## Properties

### avg\_backlinks\_info?

> **`optional`** **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`avg_backlinks_info`](../interfaces/IKeywordDataInfo.md#avg_backlinks_info)

#### Source

main.ts:82050

***

### impressions\_info?

> **`optional`** **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

impressions data for the returned keyword idea
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`impressions_info`](../interfaces/IKeywordDataInfo.md#impressions_info)

#### Source

main.ts:82044

***

### keyword?

> **`optional`** **keyword**: `string`

returned keyword idea

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword`](../interfaces/IKeywordDataInfo.md#keyword)

#### Source

main.ts:82031

***

### keyword\_info?

> **`optional`** **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

keyword data for the returned keyword idea

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_info`](../interfaces/IKeywordDataInfo.md#keyword_info)

#### Source

main.ts:82037

***

### keyword\_properties?

> **`optional`** **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

additional information about the keyword

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_properties`](../interfaces/IKeywordDataInfo.md#keyword_properties)

#### Source

main.ts:82039

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`language_code`](../interfaces/IKeywordDataInfo.md#language_code)

#### Source

main.ts:82035

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`location_code`](../interfaces/IKeywordDataInfo.md#location_code)

#### Source

main.ts:82033

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`se_type`](../interfaces/IKeywordDataInfo.md#se_type)

#### Source

main.ts:82029

***

### search\_intent\_info?

> **`optional`** **search\_intent\_info**: [`SearchIntentInfo`](SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`search_intent_info`](../interfaces/IKeywordDataInfo.md#search_intent_info)

#### Source

main.ts:82053

***

### serp\_info?

> **`optional`** **serp\_info**: [`SerpInfo`](SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`serp_info`](../interfaces/IKeywordDataInfo.md#serp_info)

#### Source

main.ts:82047

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:82066

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:82092

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordDataInfo`](KeywordDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)

#### Source

main.ts:82085
