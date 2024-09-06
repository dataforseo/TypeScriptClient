[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGoogleAppSearchesTaskGetHtmlResultInfo

# Class: AppDataGoogleAppSearchesTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTaskGetHtmlResultInfo()

> **new AppDataGoogleAppSearchesTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:187867

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:187859

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:187863

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:187861

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST request

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:187846

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:187854

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:187852

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:187850

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:187848

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:187876

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:187904

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:187897
