[Documentation](../README.md) / [Exports](../modules.md) / IKeywordDataInfo

# Interface: IKeywordDataInfo

## Implemented by

- [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [avg\_backlinks\_info](IKeywordDataInfo.md#avg_backlinks_info)
- [impressions\_info](IKeywordDataInfo.md#impressions_info)
- [keyword](IKeywordDataInfo.md#keyword)
- [keyword\_info](IKeywordDataInfo.md#keyword_info)
- [keyword\_properties](IKeywordDataInfo.md#keyword_properties)
- [language\_code](IKeywordDataInfo.md#language_code)
- [location\_code](IKeywordDataInfo.md#location_code)
- [se\_type](IKeywordDataInfo.md#se_type)
- [search\_intent\_info](IKeywordDataInfo.md#search_intent_info)
- [serp\_info](IKeywordDataInfo.md#serp_info)

## Properties

### avg\_backlinks\_info

• `Optional` **avg\_backlinks\_info**: [`AvgBacklinksInfo`](../classes/AvgBacklinksInfo.md)

backlink data for the returned keyword
this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 websites ranking organically for the keyword

#### Defined in

main.ts:79882

___

### impressions\_info

• `Optional` **impressions\_info**: [`ImpressionsInfo`](../classes/ImpressionsInfo.md)

impressions data for the returned keyword idea
daily_impressions values provide a more accurate alternative to Google search volume data;
the 999 bid is used to mitigate account-specific factors Google considers when calculating impressions
learn more about impressions in this help center article

#### Defined in

main.ts:79876

___

### keyword

• `Optional` **keyword**: `string`

returned keyword idea

#### Defined in

main.ts:79863

___

### keyword\_info

• `Optional` **keyword\_info**: [`KeywordInfo`](../classes/KeywordInfo.md)

keyword data for the returned keyword idea

#### Defined in

main.ts:79869

___

### keyword\_properties

• `Optional` **keyword\_properties**: [`KeywordProperties`](../classes/KeywordProperties.md)

additional information about the keyword

#### Defined in

main.ts:79871

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:79867

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:79865

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:79861

___

### search\_intent\_info

• `Optional` **search\_intent\_info**: [`SearchIntentInfo`](../classes/SearchIntentInfo.md)

search intent info for the returned keyword
learn about search intent in this help center article

#### Defined in

main.ts:79885

___

### serp\_info

• `Optional` **serp\_info**: [`SerpInfo`](../classes/SerpInfo.md)

SERP data
the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database

#### Defined in

main.ts:79879
