[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGoogleAppInfoTaskGetHtmlResultInfo

# Class: AppDataGoogleAppInfoTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTaskGetHtmlResultInfo()

> **new AppDataGoogleAppInfoTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:190160

## Properties

### app\_id?

> `optional` **app\_id**: `string`

application ID received in a POST request

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`app_id`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#app_id)

#### Defined in

main.ts:190139

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:190152

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:190156

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:190154

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:190147

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:190145

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:190143

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:190141

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:190169

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:190197

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:190190
