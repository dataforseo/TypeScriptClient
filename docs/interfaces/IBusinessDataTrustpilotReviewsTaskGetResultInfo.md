[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTrustpilotReviewsTaskGetResultInfo

# Interface: IBusinessDataTrustpilotReviewsTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:226947

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:226952

***

### domain?

> `optional` **domain**: `string`

domain of the business entity

#### Defined in

main.ts:226940

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:226969

***

### items\_count?

> `optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:226966

***

### location?

> `optional` **location**: `string`

location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected

#### Defined in

main.ts:226958

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:226963

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:226960

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:226944

***

### title?

> `optional` **title**: `string`

title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected

#### Defined in

main.ts:226955

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:226942
