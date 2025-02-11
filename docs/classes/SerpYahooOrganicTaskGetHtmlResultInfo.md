[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetHtmlResultInfo

# Class: SerpYahooOrganicTaskGetHtmlResultInfo

Defined in: main.ts:76624

## Implements

- [`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetHtmlResultInfo()

> **new SerpYahooOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:76648

#### Parameters

##### data?

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:76640

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:76644

elements of search results found in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:76642

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:76627

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:76635

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:76633

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:76631

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:76629

type of element

#### Implementation of

[`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76657

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:76685

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:76678

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)
