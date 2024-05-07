**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo(data)

> **new KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Source

main.ts:118646

## Properties

### competition?

> **`optional`** **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition)

#### Source

main.ts:118614

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

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#competition_index)

#### Source

main.ts:118621

***

### cpc?

> **`optional`** **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#cpc)

#### Source

main.ts:118636

***

### high\_top\_of\_page\_bid?

> **`optional`** **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#high_top_of_page_bid)

#### Source

main.ts:118633

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword)

#### Source

main.ts:118597

***

### keyword\_annotations?

> **`optional`** **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`keyword_annotations`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#keyword_annotations)

#### Source

main.ts:118642

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#language_code)

#### Source

main.ts:118603

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#location_code)

#### Source

main.ts:118600

***

### low\_top\_of\_page\_bid?

> **`optional`** **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#low_top_of_page_bid)

#### Source

main.ts:118629

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#monthly_searches)

#### Source

main.ts:118640

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_partners)

#### Source

main.ts:118608

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md#search_volume)

#### Source

main.ts:118625

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:118655

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:118687

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)

#### Source

main.ts:118680
