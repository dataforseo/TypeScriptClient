[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

Defined in: main.ts:128998

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo()

> **new KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

Defined in: main.ts:129049

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

## Properties

### competition?

> `optional` **competition**: `string`

Defined in: main.ts:129017

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition)

***

### competition\_index?

> `optional` **competition\_index**: `number`

Defined in: main.ts:129024

competition index
the competition index for the query indicating how competitive ad placement is for the keyword
can take values from 0 to 100
the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available
if not enough data is available, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition_index)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:129039

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#cpc)

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

Defined in: main.ts:129036

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#high_top_of_page_bid)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:129000

keyword in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword)

***

### keyword\_annotations?

> `optional` **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

Defined in: main.ts:129045

the annotations for the keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`keyword_annotations`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword_annotations)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:129006

language code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:129003

location code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#location_code)

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

Defined in: main.ts:129032

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#low_top_of_page_bid)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:129043

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#monthly_searches)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:129011

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_partners)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:129028

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:129058

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:129090

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

Defined in: main.ts:129083

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)
