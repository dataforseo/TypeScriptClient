[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsSerpCompetitorsLiveItem

# Class: DataforseoLabsSerpCompetitorsLiveItem

## Implements

- [`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsSerpCompetitorsLiveItem()

> **new DataforseoLabsSerpCompetitorsLiveItem**(`data`?): [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md)

#### Returns

[`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Defined in

main.ts:92344

## Properties

### avg\_position?

> `optional` **avg\_position**: `number`

the average position of the domain for the specified keywords
the arithmetic mean of values in the keywords_positions array

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#avg_position)

#### Defined in

main.ts:92314

***

### domain?

> `optional` **domain**: `string`

domain name of the detected SERP competitor

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`domain`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#domain)

#### Defined in

main.ts:92311

***

### etv?

> `optional` **etv**: `number`

estimated traffic volume
represents the estimated monthly traffic that specified keywords are driving to the website
calculated as the sum of the products of the specified keywords’ search volume values and CTR (click-through-rate) rates at certain positions in SERP
learn more about how the metric is calculated in this help center article

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`etv`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#etv)

#### Defined in

main.ts:92326

***

### keywords\_count?

> `optional` **keywords\_count**: `number`

the number of specified keywords the domain has positions for in SERPs

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`keywords_count`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_count)

#### Defined in

main.ts:92328

***

### keywords\_positions?

> `optional` **keywords\_positions**: `object`

keyword positions
SERP positions the related domain holds in SERP for the specified keywords

#### Index Signature

 \[`key`: `string`\]: (`number` \| `undefined`)[]

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`keywords_positions`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#keywords_positions)

#### Defined in

main.ts:92340

***

### median\_position?

> `optional` **median\_position**: `number`

the median position of the domain for the specified keywords
the median of the values in the keywords_positions array

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`median_position`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#median_position)

#### Defined in

main.ts:92317

***

### rating?

> `optional` **rating**: `number`

the margin between the greatest possible and actual keyword positions
represents the relative visibility rate of the domain in SERP for the specified keywords
calculated as sum(100-keywords_positions)

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`rating`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#rating)

#### Defined in

main.ts:92321

***

### relevant\_serp\_items?

> `optional` **relevant\_serp\_items**: `number`

the number of SERP elements relevant to the domain
represents the number of search results in SERP relevant to the domain for the specified keywords

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`relevant_serp_items`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#relevant_serp_items)

#### Defined in

main.ts:92337

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#se_type)

#### Defined in

main.ts:92309

***

### visibility?

> `optional` **visibility**: `number`

SERP visibility rate
represents the website visibility rate based on the SERP positions of the specified keywords
Keywords with positions in the range from 1 to 10 are assigned the visibility index from 1 to 0.1, respectively
Keywords with positions in the range from 11 to 20 have the fixed visibility index of 0.05
keywords with positions from 20 to 100 have the visibility index equal to 0

#### Implementation of

[`IDataforseoLabsSerpCompetitorsLiveItem`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md).[`visibility`](../interfaces/IDataforseoLabsSerpCompetitorsLiveItem.md#visibility)

#### Defined in

main.ts:92334

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:92353

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:92385

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsSerpCompetitorsLiveItem`](DataforseoLabsSerpCompetitorsLiveItem.md)

#### Defined in

main.ts:92378
