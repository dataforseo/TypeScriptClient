[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotReviewsTaskGetResultInfo

# Interface: IBusinessDataTrustpilotReviewsTaskGetResultInfo

Defined in: main.ts:227514

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:227523

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:227528

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:227516

domain of the business entity

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:227545

found reviews
you can get more results by using the depth parameter when setting a task

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:227542

the number of items in the results array
you can get more results by using the depth parameter when setting a task

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:227534

location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:227539

rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:227536

the total number of reviews

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:227520

search engine domain in a POST array

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:227531

title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:227518

type of element
