[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetHtmlResultInfo

# Class: SerpNaverOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetHtmlResultInfo()

> **new SerpNaverOrganicTaskGetHtmlResultInfo**(`data`?): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:81974

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:81966

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:81970

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:81968

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:81953

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:81961

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:81959

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:81957

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:81955

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:81983

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:82011

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:82004
