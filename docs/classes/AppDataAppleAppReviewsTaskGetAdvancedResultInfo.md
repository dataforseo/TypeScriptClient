**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataAppleAppReviewsTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppReviewsTaskGetAdvancedResultInfo(data)

> **new AppDataAppleAppReviewsTaskGetAdvancedResultInfo**(`data`?): [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:194144

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

application id received in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

#### Source

main.ts:194110

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:194121

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:194126

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found reviews

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:194140

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:194138

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:194118

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:194116

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#rating)

#### Source

main.ts:194132

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews
in this case, the value will be null as App Store does not indicate the total number of app reviews

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Source

main.ts:194135

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:194114

***

### title?

> **`optional`** **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#title)

#### Source

main.ts:194129

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAppDataAppleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IAppDataAppleAppReviewsTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:194112

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:194153

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:194185

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppReviewsTaskGetAdvancedResultInfo`](AppDataAppleAppReviewsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:194178
