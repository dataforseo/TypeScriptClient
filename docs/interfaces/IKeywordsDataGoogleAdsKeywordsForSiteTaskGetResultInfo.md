[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

Defined in: main.ts:129000

## Indexable

\[`key`: `string`\]: `any`

## Properties

### competition?

> `optional` **competition**: `string`

Defined in: main.ts:129019

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

***

### competition\_index?

> `optional` **competition\_index**: `number`

Defined in: main.ts:129026

competition index
the competition index for the query indicating how competitive ad placement is for the keyword
can take values from 0 to 100
the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available
if not enough data is available, the value is null;
learn more about the metric in this help center article

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:129041

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

Defined in: main.ts:129038

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:129002

keyword in a POST array

***

### keyword\_annotations?

> `optional` **keyword\_annotations**: [`KeywordAnnotations`](../classes/KeywordAnnotations.md)

Defined in: main.ts:129047

the annotations for the keyword

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:129008

language code in a POST array
if there is no data, the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:129005

location code in a POST array
if there is no data, the value is null

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

Defined in: main.ts:129034

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:129045

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:129013

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:129030

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null
