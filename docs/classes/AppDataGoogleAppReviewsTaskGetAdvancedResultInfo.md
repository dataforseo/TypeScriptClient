[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo()

> **new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:203568

## Properties

### app\_id?

> `optional` **app\_id**: `string`

application id received in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

#### Defined in

main.ts:203534

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:203545

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:203550

***

### items?

> `optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:203564

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:203561

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:203542

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:203540

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#rating)

#### Defined in

main.ts:203556

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Defined in

main.ts:203558

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:203538

***

### title?

> `optional` **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:203553

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:203536

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:203577

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:203609

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:203602
