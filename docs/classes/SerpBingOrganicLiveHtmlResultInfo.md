[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveHtmlResultInfo

# Class: SerpBingOrganicLiveHtmlResultInfo

Defined in: main.ts:66413

## Implements

- [`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveHtmlResultInfo()

> **new SerpBingOrganicLiveHtmlResultInfo**(`data`?): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

Defined in: main.ts:66437

#### Parameters

##### data?

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:66429

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:66433

elements of search results found in SERP

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:66431

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:66416

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:66424

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:66422

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:66420

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:66418

type of element

#### Implementation of

[`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:66446

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:66474

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

Defined in: main.ts:66467

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)
