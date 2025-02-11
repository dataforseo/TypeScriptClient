[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveHtmlResultInfo

# Class: SerpGoogleNewsLiveHtmlResultInfo

Defined in: main.ts:47689

## Implements

- [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsLiveHtmlResultInfo()

> **new SerpGoogleNewsLiveHtmlResultInfo**(`data`?): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

Defined in: main.ts:47713

#### Parameters

##### data?

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:47705

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:47709

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:47707

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:47692

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:47700

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:47698

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:47696

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:47694

type of element

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:47722

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:47750

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

Defined in: main.ts:47743

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)
