**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

application id received in a POST array

#### Source

main.ts:193982

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:193993

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:193998

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:194012

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Source

main.ts:194009

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:193990

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:193988

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Source

main.ts:194004

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Source

main.ts:194006

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:193986

***

### title?

> **`optional`** **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Source

main.ts:194001

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:193984
