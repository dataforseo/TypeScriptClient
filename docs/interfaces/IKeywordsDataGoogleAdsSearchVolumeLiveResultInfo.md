[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo

# Interface: IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### competition?

> `optional` **competition**: `string`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article

#### Defined in

main.ts:121097

***

### competition\_index?

> `optional` **competition\_index**: `number`

competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article

#### Defined in

main.ts:121103

***

### cpc?

> `optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Defined in

main.ts:121118

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Defined in

main.ts:121115

***

### keyword?

> `optional` **keyword**: `string`

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:121080

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:121089

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:121086

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request

#### Defined in

main.ts:121111

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null

#### Defined in

main.ts:121122

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

indicates whether data from partner networks included in the response

#### Defined in

main.ts:121091

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average search volume rate;
represents either the (approximate) number of searches for the given keyword idea on google.com or google.com and partners, depending on the user’s targeting;
if there is no data then the value is null

#### Defined in

main.ts:121107

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:121083
