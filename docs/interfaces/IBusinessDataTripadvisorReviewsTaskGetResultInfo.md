**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataTripadvisorReviewsTaskGetResultInfo

# Interface: IBusinessDataTripadvisorReviewsTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:213853

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:213858

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:213878

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:213875

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:213880

***

### location?

> **`optional`** **location**: `string`

location of the local establishment
address of the local establishment for which the reviews are collected

#### Source

main.ts:213864

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Source

main.ts:213869

***

### rating\_distribution?

> **`optional`** **rating\_distribution**: `Object`

rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:213872

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Source

main.ts:213866

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:213850

***

### title?

> **`optional`** **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Source

main.ts:213861

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:213848

***

### url\_path?

> **`optional`** **url\_path**: `string`

URL path received in a POST array

#### Source

main.ts:213846
