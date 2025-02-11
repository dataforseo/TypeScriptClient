[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleReviewsTaskGetResultInfo

# Interface: IBusinessDataGoogleReviewsTaskGetResultInfo

Defined in: main.ts:222973

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:222987

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:223011

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:222992

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:223004

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

Defined in: main.ts:223019

found reviews
you can get more results by using the depth parameter when setting a task

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:223016

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:222976

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:222984

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:222982

location code in a POST array

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:223007

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:223001

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:223013

the total number of reviews

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:222980

search engine domain in a POST array

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:222998

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:222995

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:222978

type of element
