[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTrustpilotReviewsTaskGetResultInfo

# Interface: IBusinessDataTrustpilotReviewsTaskGetResultInfo

## Implemented by

- [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](../classes/BusinessDataTrustpilotReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#check_url)
- [datetime](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#datetime)
- [domain](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#domain)
- [items](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#items_count)
- [location](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#location)
- [rating](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#se_domain)
- [title](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#title)
- [type](IBusinessDataTrustpilotReviewsTaskGetResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:205668

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:205673

___

### domain

• `Optional` **domain**: `string`

domain of the business entity

#### Defined in

main.ts:205661

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:205690

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:205687

___

### location

• `Optional` **location**: `string`

location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected

#### Defined in

main.ts:205679

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:205684

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:205681

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:205665

___

### title

• `Optional` **title**: `string`

title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected

#### Defined in

main.ts:205676

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:205663
