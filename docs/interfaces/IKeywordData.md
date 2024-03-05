[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordData

# Interface: IKeywordData

## Implemented by

- [`KeywordData`](../classes/KeywordData.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [avg\_backlinks\_info](IKeywordData.md#avg_backlinks_info)
- [impressions\_info](IKeywordData.md#impressions_info)
- [keyword](IKeywordData.md#keyword)
- [keyword\_info](IKeywordData.md#keyword_info)
- [keyword\_properties](IKeywordData.md#keyword_properties)
- [language\_code](IKeywordData.md#language_code)
- [location\_code](IKeywordData.md#location_code)
- [se\_type](IKeywordData.md#se_type)
- [search\_intent\_info](IKeywordData.md#search_intent_info)
- [serp\_info](IKeywordData.md#serp_info)

## Properties

### avg\_backlinks\_info

• `Optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Defined in

[main.ts:86472](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86472)

___

### impressions\_info

• `Optional` **impressions\_info**: [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

impressions data for the returned keyword idea
Note that all data in the impressions_info object is deprecated and provided only as legacy to avoid maintenance issues
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Defined in

[main.ts:86466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86466)

___

### keyword

• `Optional` **keyword**: `string`

returned keyword

#### Defined in

[main.ts:86452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86452)

___

### keyword\_info

• `Optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

keyword data for the returned keyword

#### Defined in

[main.ts:86458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86458)

___

### keyword\_properties

• `Optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

additional information about the keyword

#### Defined in

[main.ts:86460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86460)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:86456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86456)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:86454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86454)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:86450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86450)

___

### search\_intent\_info

• `Optional` **search\_intent\_info**: [`SearchIntentInfo`](../classes/SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Defined in

[main.ts:86475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86475)

___

### serp\_info

• `Optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Defined in

[main.ts:86469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86469)
