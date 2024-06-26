**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Class: AppDataGoogleAppReviewsTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppReviewsTaskGetHtmlResultInfo(data)

> **new AppDataGoogleAppReviewsTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Source

main.ts:191457

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

app id received in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#app_id)

#### Source

main.ts:191436

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:191449

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:191453

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:191451

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:191444

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:191442

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:191440

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:191438

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:191466

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:191494

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Source

main.ts:191487
