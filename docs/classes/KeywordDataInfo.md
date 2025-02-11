[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordDataInfo

# Class: KeywordDataInfo

Defined in: main.ts:93334

## Implements

- [`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordDataInfo()

> **new KeywordDataInfo**(`data`?): [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:93372

#### Parameters

##### data?

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md)

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)

## Properties

### avg\_backlinks\_info?

> `optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

Defined in: main.ts:93365

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 webpages ranking organically for the keyword

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`avg_backlinks_info`](../interfaces/IKeywordDataInfo.md#avg_backlinks_info)

***

### clickstream\_keyword\_info?

> `optional` **clickstream\_keyword\_info**: [`ClickstreamKeywordInfo`](ClickstreamKeywordInfo.md)

Defined in: main.ts:93351

clickstream data for the returned keyword
to retrieve results for this field, the parameter include_clickstream_data must be set to true

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`clickstream_keyword_info`](../interfaces/IKeywordDataInfo.md#clickstream_keyword_info)

***

### impressions\_info?

> `optional` **impressions\_info**: [`ImpressionsInfo`](ImpressionsInfo.md)

Defined in: main.ts:93359

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`impressions_info`](../interfaces/IKeywordDataInfo.md#impressions_info)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93338

returned keyword idea

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword`](../interfaces/IKeywordDataInfo.md#keyword)

***

### keyword\_info?

> `optional` **keyword\_info**: [`KeywordInfo`](KeywordInfo.md)

Defined in: main.ts:93344

keyword data for the returned keyword idea

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_info`](../interfaces/IKeywordDataInfo.md#keyword_info)

***

### keyword\_info\_normalized\_with\_bing?

> `optional` **keyword\_info\_normalized\_with\_bing**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:93346

contains keyword search volume normalized with Bing search volume

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_info_normalized_with_bing`](../interfaces/IKeywordDataInfo.md#keyword_info_normalized_with_bing)

***

### keyword\_info\_normalized\_with\_clickstream?

> `optional` **keyword\_info\_normalized\_with\_clickstream**: [`KeywordInfoNormalizedWithInfo`](KeywordInfoNormalizedWithInfo.md)

Defined in: main.ts:93348

contains keyword search volume normalized with clickstream data

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_info_normalized_with_clickstream`](../interfaces/IKeywordDataInfo.md#keyword_info_normalized_with_clickstream)

***

### keyword\_properties?

> `optional` **keyword\_properties**: [`KeywordProperties`](KeywordProperties.md)

Defined in: main.ts:93353

additional information about the keyword

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`keyword_properties`](../interfaces/IKeywordDataInfo.md#keyword_properties)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93342

language code in a POST array

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`language_code`](../interfaces/IKeywordDataInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93340

location code in a POST array

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`location_code`](../interfaces/IKeywordDataInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:93336

search engine type

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`se_type`](../interfaces/IKeywordDataInfo.md#se_type)

***

### search\_intent\_info?

> `optional` **search\_intent\_info**: [`SearchIntentInfo`](SearchIntentInfo.md)

Defined in: main.ts:93368

search intent info for the returned keyword
learn about search intent in this help center article

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`search_intent_info`](../interfaces/IKeywordDataInfo.md#search_intent_info)

***

### serp\_info?

> `optional` **serp\_info**: [`SerpInfo`](SerpInfo.md)

Defined in: main.ts:93362

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Implementation of

[`IKeywordDataInfo`](../interfaces/IKeywordDataInfo.md).[`serp_info`](../interfaces/IKeywordDataInfo.md#serp_info)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93381

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93410

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:93403

#### Parameters

##### data

`any`

#### Returns

[`KeywordDataInfo`](KeywordDataInfo.md)
