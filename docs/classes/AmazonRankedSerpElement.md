[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonRankedSerpElement

# Class: AmazonRankedSerpElement

Defined in: main.ts:113296

## Implements

- [`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonRankedSerpElement()

> **new AmazonRankedSerpElement**(`data`?): [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

Defined in: main.ts:113325

#### Parameters

##### data?

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md)

#### Returns

[`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:113304

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`check_url`](../interfaces/IAmazonRankedSerpElement.md#check_url)

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:113316

date and time when SERP data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`last_updated_time`](../interfaces/IAmazonRankedSerpElement.md#last_updated_time)

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

Defined in: main.ts:113321

previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`previous_updated_time`](../interfaces/IAmazonRankedSerpElement.md#previous_updated_time)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:113311

total number of results in Amazon SERP

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`se_results_count`](../interfaces/IAmazonRankedSerpElement.md#se_results_count)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113298

search engine type

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`se_type`](../interfaces/IAmazonRankedSerpElement.md#se_type)

***

### serp\_item?

> `optional` **serp\_item**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

Defined in: main.ts:113301

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`serp_item`](../interfaces/IAmazonRankedSerpElement.md#serp_item)

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

Defined in: main.ts:113309

direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`serp_item_types`](../interfaces/IAmazonRankedSerpElement.md#serp_item_types)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113334

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113361

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

Defined in: main.ts:113354

#### Parameters

##### data

`any`

#### Returns

[`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)
