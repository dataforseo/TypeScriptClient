[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../classes/KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [competition](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition)
- [competition\_index](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition_index)
- [cpc](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#high_top_of_page_bid)
- [keyword](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword)
- [keyword\_annotations](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword_annotations)
- [language\_code](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_volume)

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Defined in

[main.ts:117422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117422)

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

[main.ts:117429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117429)

___

### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Defined in

[main.ts:117444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117444)

___

### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:117441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117441)

___

### keyword

• `Optional` **keyword**: `string`

keyword in a POST array

#### Defined in

[main.ts:117405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117405)

___

### keyword\_annotations

• `Optional` **keyword\_annotations**: [`KeywordAnnotations`](../classes/KeywordAnnotations.md)

the annotations for the keyword

#### Defined in

[main.ts:117450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117450)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Defined in

[main.ts:117411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117411)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Defined in

[main.ts:117408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117408)

___

### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Defined in

[main.ts:117437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117437)

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Defined in

[main.ts:117448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117448)

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Defined in

[main.ts:117416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117416)

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Defined in

[main.ts:117433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117433)
