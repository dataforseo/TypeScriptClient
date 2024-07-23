**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonRankedSerpElement

# Class: AmazonRankedSerpElement

## Implements

- [`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonRankedSerpElement(data)

> **new AmazonRankedSerpElement**(`data`?): [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Parameters

• **data?**: [`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md)

#### Returns

[`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Source

main.ts:105760

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`check_url`](../interfaces/IAmazonRankedSerpElement.md#check_url)

#### Source

main.ts:105739

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when SERP data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`last_updated_time`](../interfaces/IAmazonRankedSerpElement.md#last_updated_time)

#### Source

main.ts:105751

***

### previous\_updated\_time?

> **`optional`** **previous\_updated\_time**: `string`

previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`previous_updated_time`](../interfaces/IAmazonRankedSerpElement.md#previous_updated_time)

#### Source

main.ts:105756

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in Amazon SERP

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`se_results_count`](../interfaces/IAmazonRankedSerpElement.md#se_results_count)

#### Source

main.ts:105746

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`se_type`](../interfaces/IAmazonRankedSerpElement.md#se_type)

#### Source

main.ts:105733

***

### serp\_item?

> **`optional`** **serp\_item**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`serp_item`](../interfaces/IAmazonRankedSerpElement.md#serp_item)

#### Source

main.ts:105736

***

### serp\_item\_types?

> **`optional`** **serp\_item\_types**: `string`[]

direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Implementation of

[`IAmazonRankedSerpElement`](../interfaces/IAmazonRankedSerpElement.md).[`serp_item_types`](../interfaces/IAmazonRankedSerpElement.md#serp_item_types)

#### Source

main.ts:105744

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:105769

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:105796

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonRankedSerpElement`](AmazonRankedSerpElement.md)

#### Source

main.ts:105789
