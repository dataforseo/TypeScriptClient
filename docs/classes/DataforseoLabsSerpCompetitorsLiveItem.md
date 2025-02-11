[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsSerpCompetitorsLiveItem

# Class: DataforseoLabsSerpCompetitorsLiveItem

Defined in: main.ts:102154

## Implements

- [`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsSerpCompetitorsLiveItem()

> **new DataforseoLabsSerpCompetitorsLiveItem**(`data`?): [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

Defined in: main.ts:102191

#### Parameters

##### data?

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md)

#### Returns

[`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

## Properties

### avg\_position?

> `optional` **avg\_position**: `number`

Defined in: main.ts:102161

the average position of the domain for the specified keywords
the arithmetic mean of values in the keywords_positions array

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#avg_position)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:102158

domain name of the detected SERP competitor

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`domain`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#domain)

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:102173

estimated traffic volume
represents the estimated monthly traffic that specified keywords are driving to the website
calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`etv`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#etv)

***

### keywords\_count?

> `optional` **keywords\_count**: `number`

Defined in: main.ts:102175

the number of specified keywords the domain has positions for in SERPs

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`keywords_count`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_count)

***

### keywords\_positions?

> `optional` **keywords\_positions**: `object`

Defined in: main.ts:102187

keyword positions
SERP positions the related domain holds in SERP for the specified keywords

#### Index Signature

\[`key`: `string`\]: `number`[]

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`keywords_positions`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_positions)

***

### median\_position?

> `optional` **median\_position**: `number`

Defined in: main.ts:102164

the median position of the domain for the specified keywords
the median of the values in the keywords_positions array

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`median_position`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#median_position)

***

### rating?

> `optional` **rating**: `number`

Defined in: main.ts:102168

the margin between the greatest possible and actual keyword positions
represents the relative visibility rate of the domain in SERP for the specified keywords
calculated as sum(100-keywords_positions)

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`rating`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#rating)

***

### relevant\_serp\_items?

> `optional` **relevant\_serp\_items**: `number`

Defined in: main.ts:102184

the number of SERP elements relevant to the domain
represents the number of search results in SERP relevant to the domain for the specified keywords

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`relevant_serp_items`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#relevant_serp_items)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:102156

search engine type

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#se_type)

***

### visibility?

> `optional` **visibility**: `number`

Defined in: main.ts:102181

SERP visibility rate
represents the website visibility rate based on the SERP positions of the specified keywords
Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively
Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05
keywords with positions from 20 to 100 have the visibility index equal to 0

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`visibility`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#visibility)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:102200

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:102232

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

Defined in: main.ts:102225

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)
