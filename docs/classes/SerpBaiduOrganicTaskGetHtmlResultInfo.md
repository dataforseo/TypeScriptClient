[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetHtmlResultInfo

# Class: SerpBaiduOrganicTaskGetHtmlResultInfo

Defined in: main.ts:80434

## Implements

- [`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetHtmlResultInfo()

> **new SerpBaiduOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:80458

#### Parameters

##### data?

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:80450

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:80454

elements of search results found in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:80452

the number of results returned in the items array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:80437

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:80445

language code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:80443

location code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:80441

search engine domain in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:80439

type of element

#### Implementation of

[`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:80467

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:80495

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:80488

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)
