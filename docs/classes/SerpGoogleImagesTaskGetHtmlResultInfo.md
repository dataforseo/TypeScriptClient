[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTaskGetHtmlResultInfo

# Class: SerpGoogleImagesTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTaskGetHtmlResultInfo()

> **new SerpGoogleImagesTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:51336

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:51328

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:51332

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:51330

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:51315

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:51323

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:51321

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:51319

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:51317

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:51345

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:51373

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:51366
