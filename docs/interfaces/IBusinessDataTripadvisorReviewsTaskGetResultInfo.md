[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorReviewsTaskGetResultInfo

# Interface: IBusinessDataTripadvisorReviewsTaskGetResultInfo

Defined in: main.ts:229483

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:229492

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:229497

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:229517

found reviews
you can get more results by using the depth parameter when setting a task

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:229514

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:229519

language code in a POST array

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:229503

location of the local establishment
address of the local establishment for which the reviews are collected

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:229508

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

***

### rating\_distribution?

> `optional` **rating\_distribution**: `object`

Defined in: main.ts:229511

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index Signature

\[`key`: `string`\]: `number`

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:229505

the total number of reviews

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:229489

search engine domain in a POST array

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:229500

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:229487

type of element

***

### url\_path?

> `optional` **url\_path**: `string`

Defined in: main.ts:229485

URL path received in a POST array
