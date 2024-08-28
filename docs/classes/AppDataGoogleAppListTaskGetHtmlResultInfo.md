[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataGoogleAppListTaskGetHtmlResultInfo

# Class: AppDataGoogleAppListTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTaskGetHtmlResultInfo()

> **new AppDataGoogleAppListTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:193322

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:193314

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:193318

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:193316

***

### keyword?

> `optional` **keyword**: `string`

app collection received in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:193301

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:193309

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:193307

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:193305

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:193303

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:193331

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:193359

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:193352
