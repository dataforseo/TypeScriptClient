**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo

# Interface: IKeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### competition?

> **`optional`** **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Source

main.ts:120845

***

### competition\_index?

> **`optional`** **competition\_index**: `number`

competition index
the competition index for the query indicating how competitive ad placement is for the keyword
can take values from 0 to 100
the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available
if not enough data is available, the value is null;
learn more about the metric in this help center article

#### Source

main.ts:120852

***

### cpc?

> **`optional`** **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Source

main.ts:120867

***

### high\_top\_of\_page\_bid?

> **`optional`** **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Source

main.ts:120864

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Source

main.ts:120828

***

### keyword\_annotations?

> **`optional`** **keyword\_annotations**: [`KeywordAnnotations`](../classes/KeywordAnnotations.md)

the annotations for the keyword

#### Source

main.ts:120873

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Source

main.ts:120834

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Source

main.ts:120831

***

### low\_top\_of\_page\_bid?

> **`optional`** **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Source

main.ts:120860

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Source

main.ts:120871

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Source

main.ts:120839

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Source

main.ts:120856
