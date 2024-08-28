[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAmazonRankedSerpElement

# Interface: IAmazonRankedSerpElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:106455

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

date and time when SERP data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:106467

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z

#### Defined in

main.ts:106472

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in Amazon SERP

#### Defined in

main.ts:106462

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:106449

***

### serp\_item?

> `optional` **serp\_item**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Defined in

main.ts:106452

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Defined in

main.ts:106460
