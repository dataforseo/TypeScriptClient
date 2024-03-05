[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordInfo

# Interface: IKeywordInfo

## Implemented by

- [`KeywordInfo`](../classes/KeywordInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IKeywordInfo.md#categories)
- [competition](IKeywordInfo.md#competition)
- [competition\_level](IKeywordInfo.md#competition_level)
- [cpc](IKeywordInfo.md#cpc)
- [high\_top\_of\_page\_bid](IKeywordInfo.md#high_top_of_page_bid)
- [last\_updated\_time](IKeywordInfo.md#last_updated_time)
- [low\_top\_of\_page\_bid](IKeywordInfo.md#low_top_of_page_bid)
- [monthly\_searches](IKeywordInfo.md#monthly_searches)
- [se\_type](IKeywordInfo.md#se_type)
- [search\_volume](IKeywordInfo.md#search_volume)

## Properties

### categories

• `Optional` **categories**: `number`[]

product and service categories
you can download the full list of possible categories

#### Defined in

[main.ts:79004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79004)

___

### competition

• `Optional` **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive)

#### Defined in

[main.ts:78981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78981)

___

### competition\_level

• `Optional` **competition\_level**: `string`

competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Defined in

[main.ts:78987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78987)

___

### cpc

• `Optional` **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword

#### Defined in

[main.ts:78990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78990)

___

### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:79001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79001)

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:78978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78978)

___

### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:78997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78997)

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Defined in

[main.ts:79007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79007)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:78973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78973)

___

### search\_volume

• `Optional` **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com

#### Defined in

[main.ts:78993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78993)
