[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../classes/KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [competition](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition)
- [competition\_index](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition_index)
- [cpc](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#high_top_of_page_bid)
- [keyword](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword)
- [keyword\_annotations](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword_annotations)
- [language\_code](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_volume)

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Defined in

[main.ts:115203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115203)

___


### competition\_index

• `Optional` **competition\_index**: `number`

competition index
the competition index for the query indicating how competitive ad placement is for the keyword
can take values from 0 to 100
the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available
if not enough data is available, the value is null;
learn more about the metric in this help center article

#### Defined in

[main.ts:115210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115210)

___


### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Defined in

[main.ts:115225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115225)

___


### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:115222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115222)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:115186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115186)

___


### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](../classes/KeywordAnnotations.md)

the annotations for the keyword

#### Defined in

[main.ts:115231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115231)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Defined in

[main.ts:115192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115192)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Defined in

[main.ts:115189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115189)

___


### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:115218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115218)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Defined in

[main.ts:115229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115229)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Defined in

[main.ts:115197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115197)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Defined in

[main.ts:115214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115214)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")