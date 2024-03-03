[Documentation](../README.md) / [Exports](../modules.md) / IAmazonRankedSerpElement

# Interface: IAmazonRankedSerpElement

## Implemented by

- [`AmazonRankedSerpElement`](../classes/AmazonRankedSerpElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IAmazonRankedSerpElement.md#check_url)
- [last\_updated\_time](IAmazonRankedSerpElement.md#last_updated_time)
- [previous\_updated\_time](IAmazonRankedSerpElement.md#previous_updated_time)
- [se\_results\_count](IAmazonRankedSerpElement.md#se_results_count)
- [se\_type](IAmazonRankedSerpElement.md#se_type)
- [serp\_item](IAmazonRankedSerpElement.md#serp_item)
- [serp\_item\_types](IAmazonRankedSerpElement.md#serp_item_types)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:100272

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when SERP data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:100284

___

### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z

#### Defined in

main.ts:100289

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in Amazon SERP

#### Defined in

main.ts:100279

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:100266

___

### serp\_item

• `Optional` **serp\_item**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Defined in

main.ts:100269

___

### serp\_item\_types

• `Optional` **serp\_item\_types**: `string`[]

direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Defined in

main.ts:100277
