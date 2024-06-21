**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTaskGetHtmlResultInfo

# Class: AppDataGoogleAppSearchesTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTaskGetHtmlResultInfo(data)

> **new AppDataGoogleAppSearchesTaskGetHtmlResultInfo**(`data`?): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Source

main.ts:187351

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#datetime)

#### Source

main.ts:187343

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`items`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items)

#### Source

main.ts:187347

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items_count)

#### Source

main.ts:187345

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST request

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#keyword)

#### Source

main.ts:187330

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#language_code)

#### Source

main.ts:187338

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#location_code)

#### Source

main.ts:187336

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#se_domain)

#### Source

main.ts:187334

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[`type`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#type)

#### Source

main.ts:187332

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:187360

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:187388

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Source

main.ts:187381
