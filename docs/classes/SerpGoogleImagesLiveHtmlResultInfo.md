[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveHtmlResultInfo

# Class: SerpGoogleImagesLiveHtmlResultInfo

## Implements

- [`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesLiveHtmlResultInfo()

> **new SerpGoogleImagesLiveHtmlResultInfo**(`data`?): [`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Defined in

main.ts:52330

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:52322

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:52326

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:52324

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:52309

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:52317

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:52315

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:52313

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleImagesLiveHtmlResultInfo`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:52311

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:52339

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:52367

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)

#### Defined in

main.ts:52360
