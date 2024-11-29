[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveHtmlResultInfo

# Class: SerpGoogleOrganicLiveHtmlResultInfo

## Implements

- [`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicLiveHtmlResultInfo()

> **new SerpGoogleOrganicLiveHtmlResultInfo**(`data`?): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:40317

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:40309

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:40313

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:40311

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:40296

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:40304

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:40302

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:40300

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:40298

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:40326

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:40354

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:40347
