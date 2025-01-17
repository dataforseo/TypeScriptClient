[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderLiveHtmlResultInfo

# Class: SerpGoogleLocalFinderLiveHtmlResultInfo

Defined in: main.ts:44983

## Implements

- [`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderLiveHtmlResultInfo()

> **new SerpGoogleLocalFinderLiveHtmlResultInfo**(`data`?): [`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

Defined in: main.ts:45007

#### Parameters

##### data?

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:44999

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:45003

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:45001

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:44986

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:44994

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:44992

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:44990

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:44988

type of element

#### Implementation of

[`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:45016

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:45044

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

Defined in: main.ts:45037

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)
