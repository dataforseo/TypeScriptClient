**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo(data)

> **new KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Source

main.ts:121062

## Properties

### competition?

> **`optional`** **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition)

#### Source

main.ts:121030

***

### competition\_index?

> **`optional`** **competition\_index**: `number`

competition index
the competition index for the query indicating how competitive ad placement is for the keyword
can take values from 0 to 100
the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available
if not enough data is available, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#competition_index)

#### Source

main.ts:121037

***

### cpc?

> **`optional`** **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#cpc)

#### Source

main.ts:121052

***

### high\_top\_of\_page\_bid?

> **`optional`** **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#high_top_of_page_bid)

#### Source

main.ts:121049

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword)

#### Source

main.ts:121013

***

### keyword\_annotations?

> **`optional`** **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`keyword_annotations`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#keyword_annotations)

#### Source

main.ts:121058

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#language_code)

#### Source

main.ts:121019

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#location_code)

#### Source

main.ts:121016

***

### low\_top\_of\_page\_bid?

> **`optional`** **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#low_top_of_page_bid)

#### Source

main.ts:121045

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#monthly_searches)

#### Source

main.ts:121056

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_partners)

#### Source

main.ts:121024

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md#search_volume)

#### Source

main.ts:121041

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:121071

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:121103

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)

#### Source

main.ts:121096
