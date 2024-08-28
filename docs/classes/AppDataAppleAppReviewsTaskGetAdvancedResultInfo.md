[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataAppleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataAppleAppReviewsTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppReviewsTaskGetAdvancedResultInfo()

> **new AppDataAppleAppReviewsTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:200661

## Properties

### app\_id?

> `optional` **app\_id**: `string`

application id received in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

#### Defined in

main.ts:200627

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:200638

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:200643

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found reviews

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:200657

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:200655

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:200635

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:200633

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#rating)

#### Defined in

main.ts:200649

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Defined in

main.ts:200652

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:200631

***

### title?

> `optional` **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:200646

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:200629

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:200670

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:200702

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:200695
