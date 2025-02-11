[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTaskGetHtmlResultInfo

# Class: AppDataGoogleAppInfoTaskGetHtmlResultInfo

Defined in: main.ts:203076

## Implements

- [`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskGetHtmlResultInfo()

> **new AppDataGoogleAppInfoTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

Defined in: main.ts:203099

#### Parameters

##### data?

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:203078

application ID received in a POST request

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#app_id)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:203091

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:203095

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:203093

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:203086

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:203084

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:203082

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:203080

type of element

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203108

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:203136

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

Defined in: main.ts:203129

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)
