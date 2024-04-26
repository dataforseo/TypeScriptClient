**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataYelpReviewsTaskGetResultInfo

# Interface: IBusinessDataYelpReviewsTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### alias?

> **`optional`** **alias**: `string`

Yelp business identifier

#### Source

main.ts:211948

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Source

main.ts:211960

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:211965

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:211978

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:211975

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Source

main.ts:211946

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:211957

***

### location\_code?

> **`optional`** **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Source

main.ts:211955

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Source

main.ts:211970

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Source

main.ts:211972

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:211952

***

### title?

> **`optional`** **title**: `string`

title of the reviews from Yelp
the name of the local establishment for which the reviews are collected

#### Source

main.ts:211968

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:211950
