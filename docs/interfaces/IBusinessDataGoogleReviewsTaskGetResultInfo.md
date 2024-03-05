[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleReviewsTaskGetResultInfo

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

[main.ts:198517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198517)

___

### cid

• `Optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Defined in

[main.ts:198541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198541)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:198522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198522)

___

### feature\_id

• `Optional` **feature\_id**: `string`

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Defined in

[main.ts:198534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198534)

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:198549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198549)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:198546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198546)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:198506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198506)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:198514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198514)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:198512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198512)

___

### place\_id

• `Optional` **place\_id**: `string`

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Defined in

[main.ts:198537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198537)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:198531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198531)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

[main.ts:198543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198543)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:198510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198510)

___

### sub\_title

• `Optional` **sub\_title**: `string`

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Defined in

[main.ts:198528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198528)

___

### title

• `Optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Defined in

[main.ts:198525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198525)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:198508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198508)
