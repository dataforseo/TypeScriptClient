[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTaskGetHtmlResultInfo

# Class: AppDataGoogleAppSearchesTaskGetHtmlResultInfo

Defined in: main.ts:200750

## Implements

- [`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTaskGetHtmlResultInfo()

> **new AppDataGoogleAppSearchesTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

Defined in: main.ts:200773

#### Parameters

##### data?

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:200765

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:200769

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:200767

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:200752

keyword received in a POST request

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:200760

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:200758

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:200756

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:200754

type of element

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:200782

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:200810

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

Defined in: main.ts:200803

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)
