[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveHtmlResultInfo

# Class: SerpGoogleNewsLiveHtmlResultInfo

## Implements

- [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsLiveHtmlResultInfo()

> **new SerpGoogleNewsLiveHtmlResultInfo**(`data`?): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Defined in

main.ts:47697

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:47689

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:47693

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:47691

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:47676

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:47684

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:47682

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:47680

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:47678

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:47706

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:47734

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Defined in

main.ts:47727
