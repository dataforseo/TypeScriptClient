[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskGetHtmlResultInfo

# Class: SerpGoogleOrganicTaskGetHtmlResultInfo

Defined in: main.ts:38503

## Implements

- [`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetHtmlResultInfo()

> **new SerpGoogleOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:38527

#### Parameters

##### data?

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:38519

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:38523

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:38521

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:38506

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:38514

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:38512

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:38510

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38508

type of element

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38536

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:38564

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

Defined in: main.ts:38557

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)
