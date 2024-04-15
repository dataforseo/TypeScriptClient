**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBusinessDataGoogleReviewsTaskGetResultInfo

# Interface: IBusinessDataGoogleReviewsTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:204128

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Source

main.ts:204152

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:204133

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Source

main.ts:204145

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:204160

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:204157

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:204117

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:204125

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:204123

***

### place\_id?

> **`optional`** **place\_id**: `string`

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Source

main.ts:204148

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Source

main.ts:204142

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Source

main.ts:204154

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:204121

***

### sub\_title?

> **`optional`** **sub\_title**: `string`

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Source

main.ts:204139

***

### title?

> **`optional`** **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Source

main.ts:204136

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:204119
