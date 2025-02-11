[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTaskGetHtmlResultInfo

# Class: AppDataGoogleAppListTaskGetHtmlResultInfo

Defined in: main.ts:201766

## Implements

- [`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTaskGetHtmlResultInfo()

> **new AppDataGoogleAppListTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

Defined in: main.ts:201789

#### Parameters

##### data?

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:201781

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:201785

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:201783

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:201768

app collection received in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:201776

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:201774

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:201772

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:201770

type of element

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:201798

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:201826

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

Defined in: main.ts:201819

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)
