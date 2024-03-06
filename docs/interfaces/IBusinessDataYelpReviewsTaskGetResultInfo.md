[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataYelpReviewsTaskGetResultInfo

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

[main.ts:205477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205477)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to Yelp results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:205489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205489)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:205494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205494)

___


### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](../classes/BaseBusinessDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:205507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205507)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:205504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205504)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Defined in

[main.ts:205475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205475)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:205486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205486)

___


### location\_code

• `Optional` **location\_code**: `string`

location code in a POST array
if location_code was not specified in a POST array, the value equals null

#### Defined in

[main.ts:205484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205484)

___


### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:205499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205499)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

[main.ts:205501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205501)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:205481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205481)

___


### title

• `Optional` **title**: `string`

title of the reviews from Yelp
the name of the local establishment for which the reviews are collected

#### Defined in

[main.ts:205497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205497)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:205479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205479)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")