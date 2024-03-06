[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](../classes/KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [competition](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#competition)
- [competition\_index](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#competition_index)
- [cpc](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#high_top_of_page_bid)
- [keyword](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#keyword)
- [keyword\_annotations](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#keyword_annotations)
- [language\_code](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md#search_volume)

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Defined in

[main.ts:115727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115727)

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

[main.ts:115734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115734)

___


### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Defined in

[main.ts:115749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115749)

___


### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:115746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115746)

___


### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:115710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115710)

___


### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](../classes/KeywordAnnotations.md)

the annotations for the keyword

#### Defined in

[main.ts:115755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115755)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Defined in

[main.ts:115716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115716)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Defined in

[main.ts:115713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115713)

___


### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:115742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115742)

___


### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Defined in

[main.ts:115753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115753)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Defined in

[main.ts:115721](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115721)

___


### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Defined in

[main.ts:115738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115738)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")