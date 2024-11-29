[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskGetHtmlResultInfo

# Class: SerpGoogleOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetHtmlResultInfo()

> **new SerpGoogleOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:38527

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:38519

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:38523

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:38521

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:38506

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:38514

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:38512

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:38510

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:38508

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:38536

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:38564

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResultInfo`](SerpGoogleOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:38557
