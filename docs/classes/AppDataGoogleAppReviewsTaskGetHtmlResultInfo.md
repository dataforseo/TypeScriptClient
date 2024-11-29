[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Class: AppDataGoogleAppReviewsTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskGetHtmlResultInfo()

> **new AppDataGoogleAppReviewsTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:203805

## Properties

### app\_id?

> `optional` **app\_id**: `string`

app id received in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#app_id)

#### Defined in

main.ts:203784

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:203797

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:203801

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:203799

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:203792

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:203790

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:203788

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:203786

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:203814

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:203842

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:203835
