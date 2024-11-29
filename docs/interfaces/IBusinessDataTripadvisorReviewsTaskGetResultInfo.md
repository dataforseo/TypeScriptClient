[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorReviewsTaskGetResultInfo

# Interface: IBusinessDataTripadvisorReviewsTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:229424

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:229429

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:229449

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:229446

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:229451

***

### location?

> `optional` **location**: `string`

location of the local establishment
address of the local establishment for which the reviews are collected

#### Defined in

main.ts:229435

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:229440

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:229443

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:229437

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:229421

***

### title?

> `optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Defined in

main.ts:229432

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:229419

***

### url\_path?

> `optional` **url\_path**: `string`

URL path received in a POST array

#### Defined in

main.ts:229417
