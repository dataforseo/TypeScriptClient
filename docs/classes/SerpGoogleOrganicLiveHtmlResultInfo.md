[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveHtmlResultInfo

# Class: SerpGoogleOrganicLiveHtmlResultInfo

Defined in: main.ts:40309

## Implements

- [`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveHtmlResultInfo()

> **new SerpGoogleOrganicLiveHtmlResultInfo**(`data`?): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

Defined in: main.ts:40333

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:40325

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:40329

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:40327

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:40312

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:40320

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:40318

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:40316

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:40314

type of element

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:40342

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:40370

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

Defined in: main.ts:40363

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)
