[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBusinessDataGoogleReviewsTaskGetResultInfo

# Interface: IBusinessDataGoogleReviewsTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:213512

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Defined in

main.ts:213536

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:213517

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Defined in

main.ts:213529

***

### items?

> `optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:213544

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:213541

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:213501

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:213509

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:213507

***

### place\_id?

> `optional` **place\_id**: `string`

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Defined in

main.ts:213532

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:213526

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:213538

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:213505

***

### sub\_title?

> `optional` **sub\_title**: `string`

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Defined in

main.ts:213523

***

### title?

> `optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Defined in

main.ts:213520

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:213503
