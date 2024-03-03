[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTripadvisorReviewsTaskGetResultInfo

# Interface: IBusinessDataTripadvisorReviewsTaskGetResultInfo

## Implemented by

- [`BusinessDataTripadvisorReviewsTaskGetResultInfo`](../classes/BusinessDataTripadvisorReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#check_url)
- [datetime](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#datetime)
- [items](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#items_count)
- [language\_code](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#language_code)
- [location](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#location)
- [rating](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#se_domain)
- [title](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#title)
- [type](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#type)
- [url\_path](IBusinessDataTripadvisorReviewsTaskGetResultInfo.md#url_path)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:202765

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:202770

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:202787

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:202784

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:202789

___

### location

• `Optional` **location**: `string`

location of the local establishment
address of the local establishment for which the reviews are collected

#### Defined in

main.ts:202776

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:202781

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:202778

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:202762

___

### title

• `Optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Defined in

main.ts:202773

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:202760

___

### url\_path

• `Optional` **url\_path**: `string`

URL path received in a POST array

#### Defined in

main.ts:202758
