**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordInfo

# Class: KeywordInfo

## Implements

- [`IKeywordInfo`](../interfaces/IKeywordInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordInfo(data)

> **new KeywordInfo**(`data`?): [`KeywordInfo`](KeywordInfo.md)

#### Parameters

• **data?**: [`IKeywordInfo`](../interfaces/IKeywordInfo.md)

#### Returns

[`KeywordInfo`](KeywordInfo.md)

#### Source

main.ts:82882

## Properties

### categories?

> **`optional`** **categories**: `number`[]

product and service categories
you can download the full list of possible categories

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`categories`](../interfaces/IKeywordInfo.md#categories)

#### Source

main.ts:82875

***

### competition?

> **`optional`** **competition**: `number`

competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive)

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`competition`](../interfaces/IKeywordInfo.md#competition)

#### Source

main.ts:82852

***

### competition\_level?

> **`optional`** **competition\_level**: `string`

competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`competition_level`](../interfaces/IKeywordInfo.md#competition_level)

#### Source

main.ts:82858

***

### cpc?

> **`optional`** **cpc**: `number`

cost-per-click
represents the average cost per click (USD) historically paid for the keyword

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`cpc`](../interfaces/IKeywordInfo.md#cpc)

#### Source

main.ts:82861

***

### high\_top\_of\_page\_bid?

> **`optional`** **high\_top\_of\_page\_bid**: `number`

maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`high_top_of_page_bid`](../interfaces/IKeywordInfo.md#high_top_of_page_bid)

#### Source

main.ts:82872

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`last_updated_time`](../interfaces/IKeywordInfo.md#last_updated_time)

#### Source

main.ts:82849

***

### low\_top\_of\_page\_bid?

> **`optional`** **low\_top\_of\_page\_bid**: `number`

minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`low_top_of_page_bid`](../interfaces/IKeywordInfo.md#low_top_of_page_bid)

#### Source

main.ts:82868

***

### monthly\_searches?

> **`optional`** **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`monthly_searches`](../interfaces/IKeywordInfo.md#monthly_searches)

#### Source

main.ts:82878

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`se_type`](../interfaces/IKeywordInfo.md#se_type)

#### Source

main.ts:82844

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com

#### Implementation of

[`IKeywordInfo`](../interfaces/IKeywordInfo.md).[`search_volume`](../interfaces/IKeywordInfo.md#search_volume)

#### Source

main.ts:82864

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:82891

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:82925

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordInfo`](KeywordInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordInfo`](KeywordInfo.md)

#### Source

main.ts:82918
