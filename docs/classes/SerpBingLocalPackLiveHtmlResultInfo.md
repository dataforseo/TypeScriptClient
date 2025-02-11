[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackLiveHtmlResultInfo

# Class: SerpBingLocalPackLiveHtmlResultInfo

Defined in: main.ts:68743

## Implements

- [`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackLiveHtmlResultInfo()

> **new SerpBingLocalPackLiveHtmlResultInfo**(`data`?): [`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

Defined in: main.ts:68767

#### Parameters

##### data?

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md)

#### Returns

[`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:68759

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:68763

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:68761

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:68746

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:68754

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:68752

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:68750

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:68748

type of element

#### Implementation of

[`ISerpBingLocalPackLiveHtmlResultInfo`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:68776

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:68804

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)

Defined in: main.ts:68797

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackLiveHtmlResultInfo`](SerpBingLocalPackLiveHtmlResultInfo.md)
