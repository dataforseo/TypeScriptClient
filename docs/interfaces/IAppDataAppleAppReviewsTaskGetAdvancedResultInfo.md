[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAppDataAppleAppReviewsTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppReviewsTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

application id received in a POST array

#### Defined in

main.ts:200730

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:200741

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:200746

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found reviews

#### Defined in

main.ts:200760

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:200758

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:200738

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:200736

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Defined in

main.ts:200752

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews

#### Defined in

main.ts:200755

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:200734

***

### title?

> `optional` **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Defined in

main.ts:200749

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:200732
