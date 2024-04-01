[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataYelpReviewsTaskGetResultInfo

# Interface: IBusinessDataYelpReviewsTaskGetResultInfo

## Implemented by

- [`BusinessDataYelpReviewsTaskGetResultInfo`](../classes/BusinessDataYelpReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [alias](IBusinessDataYelpReviewsTaskGetResultInfo.md#alias)
- [check\_url](IBusinessDataYelpReviewsTaskGetResultInfo.md#check_url)
- [datetime](IBusinessDataYelpReviewsTaskGetResultInfo.md#datetime)
- [items](IBusinessDataYelpReviewsTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataYelpReviewsTaskGetResultInfo.md#items_count)
- [keyword](IBusinessDataYelpReviewsTaskGetResultInfo.md#keyword)
- [language\_code](IBusinessDataYelpReviewsTaskGetResultInfo.md#language_code)
- [location\_code](IBusinessDataYelpReviewsTaskGetResultInfo.md#location_code)
- [rating](IBusinessDataYelpReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](IBusinessDataYelpReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](IBusinessDataYelpReviewsTaskGetResultInfo.md#se_domain)
- [title](IBusinessDataYelpReviewsTaskGetResultInfo.md#title)
- [type](IBusinessDataYelpReviewsTaskGetResultInfo.md#type)

## Properties

### alias

• `Optional` **alias**: `string`

Yelp business identifier

#### Defined in

main.ts:210938

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:210950

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:210955

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:210968

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:210965

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Defined in

main.ts:210936

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:210947

___

### location\_code

• `Optional` **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Defined in

main.ts:210945

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

main.ts:210960

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:210962

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:210942

___

### title

• `Optional` **title**: `string`

title of the reviews from Yelp
the name of the local establishment for which the reviews are collected

#### Defined in

main.ts:210958

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:210940
