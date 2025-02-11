[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordInfo

# Class: KeywordInfo

Defined in: main.ts:92474

## Implements

- [`IKeywordInfo`](../interfaces/IKeywordInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordInfo()

> **new KeywordInfo**(`data`?): [`KeywordInfo`](KeywordInfo.md)

Defined in: main.ts:92517

#### Parameters

##### data?

[`IKeywordInfo`](../interfaces/IKeywordInfo.md)

#### Returns

[`KeywordInfo`](KeywordInfo.md)

## Properties

### categories?

> `optional` **categories**: `number`[]

Defined in: main.ts:92507

product and service categories
you can download the full list of possible categories

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`categories`](../interfaces/IKeywordInfo.md#categories)

***

### competition?

> `optional` **competition**: `number`

Defined in: main.ts:92484

competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive)

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`competition`](../interfaces/IKeywordInfo.md#competition)

***

### competition\_level?

> `optional` **competition\_level**: `string`

Defined in: main.ts:92490

competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`competition_level`](../interfaces/IKeywordInfo.md#competition_level)

***

### cpc?

> `optional` **cpc**: `number`

Defined in: main.ts:92493

cost-per-click
represents the average cost per click (USD) historically paid for the keyword

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`cpc`](../interfaces/IKeywordInfo.md#cpc)

***

### high\_top\_of\_page\_bid?

> `optional` **high\_top\_of\_page\_bid**: `number`

Defined in: main.ts:92504

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordInfo.md#high_top_of_page_bid)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:92481

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`last_updated_time`](../interfaces/IKeywordInfo.md#last_updated_time)

***

### low\_top\_of\_page\_bid?

> `optional` **low\_top\_of\_page\_bid**: `number`

Defined in: main.ts:92500

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordInfo.md#low_top_of_page_bid)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:92510

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`monthly_searches`](../interfaces/IKeywordInfo.md#monthly_searches)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:92476

search engine type

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`se_type`](../interfaces/IKeywordInfo.md#se_type)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:92496

average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`search_volume`](../interfaces/IKeywordInfo.md#search_volume)

***

### search\_volume\_trend?

> `optional` **search\_volume\_trend**: [`SearchVolumeTrend`](SearchVolumeTrend.md)

Defined in: main.ts:92513

search volume trend changes
represents search volume change in percent compared to the previous period

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`search_volume_trend`](../interfaces/IKeywordInfo.md#search_volume_trend)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92526

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92561

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordInfo`](KeywordInfo.md)

Defined in: main.ts:92554

#### Parameters

##### data

`any`

#### Returns

[`KeywordInfo`](KeywordInfo.md)
