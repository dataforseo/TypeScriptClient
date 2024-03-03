[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleReviewsTaskGetResultInfo

# Interface: IBusinessDataGoogleReviewsTaskGetResultInfo

## Implemented by

- [`BusinessDataGoogleReviewsTaskGetResultInfo`](../classes/BusinessDataGoogleReviewsTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IBusinessDataGoogleReviewsTaskGetResultInfo.md#check_url)
- [cid](IBusinessDataGoogleReviewsTaskGetResultInfo.md#cid)
- [datetime](IBusinessDataGoogleReviewsTaskGetResultInfo.md#datetime)
- [feature\_id](IBusinessDataGoogleReviewsTaskGetResultInfo.md#feature_id)
- [items](IBusinessDataGoogleReviewsTaskGetResultInfo.md#items)
- [items\_count](IBusinessDataGoogleReviewsTaskGetResultInfo.md#items_count)
- [keyword](IBusinessDataGoogleReviewsTaskGetResultInfo.md#keyword)
- [language\_code](IBusinessDataGoogleReviewsTaskGetResultInfo.md#language_code)
- [location\_code](IBusinessDataGoogleReviewsTaskGetResultInfo.md#location_code)
- [place\_id](IBusinessDataGoogleReviewsTaskGetResultInfo.md#place_id)
- [rating](IBusinessDataGoogleReviewsTaskGetResultInfo.md#rating)
- [reviews\_count](IBusinessDataGoogleReviewsTaskGetResultInfo.md#reviews_count)
- [se\_domain](IBusinessDataGoogleReviewsTaskGetResultInfo.md#se_domain)
- [sub\_title](IBusinessDataGoogleReviewsTaskGetResultInfo.md#sub_title)
- [title](IBusinessDataGoogleReviewsTaskGetResultInfo.md#title)
- [type](IBusinessDataGoogleReviewsTaskGetResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:198637

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Defined in

main.ts:198661

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:198642

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Defined in

main.ts:198654

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:198669

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:198666

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:198626

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:198634

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:198632

___

### place\_id

• `Optional` **place\_id**: `string`

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Defined in

main.ts:198657

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Defined in

main.ts:198651

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

main.ts:198663

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:198630

___

### sub\_title

• `Optional` **sub\_title**: `string`

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Defined in

main.ts:198648

___

### title

• `Optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Defined in

main.ts:198645

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:198628
