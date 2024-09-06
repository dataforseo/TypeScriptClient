[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo()

> **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

main.ts:120286

## Properties

### competition?

> `optional` **competition**: `string`

competition
represents the relative level of competition associated with the given keyword in paid SERP only
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`competition`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#competition)

#### Defined in

main.ts:120254

***

### competition\_index?

> `optional` **competition\_index**: `number`

competition index
the competition index for the query indicating how competitive ad placement is for the keyword
can take values from 0 to 100
the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available
if not enough data is available, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`competition_index`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#competition_index)

#### Defined in

main.ts:120261

***

### cpc?

> `optional` **cpc**: `number`

cost per click
indicates the amount paid for each click on the ad displayed for a given keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`cpc`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#cpc)

#### Defined in

main.ts:120276

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#high_top_of_page_bid)

#### Defined in

main.ts:120273

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:120237

***

### keyword\_annotations?

> `optional` **keyword\_annotations**: [`KeywordAnnotations`](KeywordAnnotations.md)

the annotations for the keyword

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`keyword_annotations`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#keyword_annotations)

#### Defined in

main.ts:120282

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:120243

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:120240

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#low_top_of_page_bid)

#### Defined in

main.ts:120269

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`monthly_searches`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#monthly_searches)

#### Defined in

main.ts:120280

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#search_partners)

#### Defined in

main.ts:120248

***

### search\_volume?

> `optional` **search\_volume**: `number`

monthly average search volume rate
represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting
if there is no data, the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md).[`search_volume`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md#search_volume)

#### Defined in

main.ts:120265

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:120295

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:120327

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)

#### Defined in

main.ts:120320
