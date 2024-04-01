[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppReviewsTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppReviewsTaskGetAdvancedResultInfo

## Implemented by

- [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../classes/AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#app_id)
- [check\_url](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#datetime)
- [items](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items)
- [items\_count](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#location_code)
- [rating](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#rating)
- [reviews\_count](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)
- [se\_domain](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)
- [title](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#title)
- [type](IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#type)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application id received in a POST array

#### Defined in

main.ts:191874

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:191885

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:191890

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found reviews

#### Defined in

main.ts:191904

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:191902

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:191882

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:191880

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Defined in

main.ts:191896

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews

#### Defined in

main.ts:191899

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:191878

___

### title

• `Optional` **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Defined in

main.ts:191893

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:191876
