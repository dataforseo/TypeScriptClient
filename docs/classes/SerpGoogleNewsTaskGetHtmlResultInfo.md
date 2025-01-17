[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTaskGetHtmlResultInfo

# Class: SerpGoogleNewsTaskGetHtmlResultInfo

Defined in: main.ts:46633

## Implements

- [`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTaskGetHtmlResultInfo()

> **new SerpGoogleNewsTaskGetHtmlResultInfo**(`data`?): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

Defined in: main.ts:46657

#### Parameters

##### data?

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:46649

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:46653

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:46651

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:46636

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:46644

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:46642

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:46640

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:46638

type of element

#### Implementation of

[`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:46666

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:46694

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

Defined in: main.ts:46687

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)
