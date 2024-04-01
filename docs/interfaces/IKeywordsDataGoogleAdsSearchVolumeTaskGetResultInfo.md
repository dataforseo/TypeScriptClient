[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

# Interface: IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](../classes/KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [competition](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition)
- [competition\_index](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#competition_index)
- [cpc](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#cpc)
- [high\_top\_of\_page\_bid](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#high_top_of_page_bid)
- [keyword](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#keyword)
- [language\_code](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#language_code)
- [location\_code](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#location_code)
- [low\_top\_of\_page\_bid](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#low_top_of_page_bid)
- [monthly\_searches](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#monthly_searches)
- [search\_partners](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_partners)
- [search\_volume](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#search_volume)
- [spell](IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md#spell)

## Properties

### competition

• `Optional` **competition**: `string`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Defined in

main.ts:116273

___

### competition\_index

• `Optional` **competition\_index**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Defined in

main.ts:116279

___

### cpc

• `Optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Defined in

main.ts:116294

___

### high\_top\_of\_page\_bid

• `Optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Defined in

main.ts:116291

___

### keyword

• `Optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:116256

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:116265

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:116262

___

### low\_top\_of\_page\_bid

• `Optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Defined in

main.ts:116287

___

### monthly\_searches

• `Optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Defined in

main.ts:116298

___

### search\_partners

• `Optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

main.ts:116267

___

### search\_volume

• `Optional` **search\_volume**: `number`

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Defined in

main.ts:116283

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:116259
