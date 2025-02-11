[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetHtmlResultInfo

# Class: SerpSeznamOrganicTaskGetHtmlResultInfo

Defined in: main.ts:84156

## Implements

- [`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetHtmlResultInfo()

> **new SerpSeznamOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:84180

#### Parameters

##### data?

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:84172

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:84176

elements of search results found in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:84174

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:84159

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:84167

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:84165

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:84163

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:84161

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84189

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:84217

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:84210

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResultInfo`](SerpSeznamOrganicTaskGetHtmlResultInfo.md)
