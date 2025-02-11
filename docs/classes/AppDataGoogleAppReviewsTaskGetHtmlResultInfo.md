[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Class: AppDataGoogleAppReviewsTaskGetHtmlResultInfo

Defined in: main.ts:204352

## Implements

- [`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskGetHtmlResultInfo()

> **new AppDataGoogleAppReviewsTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

Defined in: main.ts:204375

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:204354

app id received in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#app_id)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:204367

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:204371

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:204369

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:204362

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:204360

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:204358

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:204356

type of element

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:204384

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:204412

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

Defined in: main.ts:204405

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)
