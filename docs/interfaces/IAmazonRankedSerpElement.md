[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonRankedSerpElement

# Interface: IAmazonRankedSerpElement

Defined in: main.ts:113314

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:113322

direct URL to Amazon results
you can use it to make sure that we provided accurate results

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:113334

date and time when SERP data was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

Defined in: main.ts:113339

previous to the most recent update of SERP data
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2020-09-12T00:07:43.0733218Z

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:113329

total number of results in Amazon SERP

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113316

search engine type

***

### serp\_item?

> `optional` **serp\_item**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)

Defined in: main.ts:113319

contains data on the SERP element
the list of supported SERP elements can be found below

***

### serp\_item\_types?

> `optional` **serp\_item\_types**: `string`[]

Defined in: main.ts:113327

direct URL to Amazon results
contains types of all search results (items) found in the returned SERP;
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches
