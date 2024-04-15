**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo(data)

> **new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo**(`data`?): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:187065

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

application id received in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#app_id)

#### Source

main.ts:187031

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:187042

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:187047

***

### items?

> **`optional`** **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:187061

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:187058

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:187039

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:187037

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

rating of the app
rating of the application for which the reviews are collected

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#rating)

#### Source

main.ts:187053

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Source

main.ts:187055

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:187035

***

### title?

> **`optional`** **title**: `string`

title of the app
title of the application for which the reviews are collected

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#title)

#### Source

main.ts:187050

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:187033

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:187074

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:187106

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppReviewsTaskGetAdvancedResultInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:187099
