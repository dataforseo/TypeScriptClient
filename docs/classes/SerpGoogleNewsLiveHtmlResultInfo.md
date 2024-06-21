**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveHtmlResultInfo

# Class: SerpGoogleNewsLiveHtmlResultInfo

## Implements

- [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsLiveHtmlResultInfo(data)

> **new SerpGoogleNewsLiveHtmlResultInfo**(`data`?): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Source

main.ts:45498

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#datetime)

#### Source

main.ts:45490

***

### items?

> **`optional`** **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items)

#### Source

main.ts:45494

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items_count)

#### Source

main.ts:45492

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#keyword)

#### Source

main.ts:45477

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#language_code)

#### Source

main.ts:45485

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#location_code)

#### Source

main.ts:45483

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#se_domain)

#### Source

main.ts:45481

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#type)

#### Source

main.ts:45479

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:45507

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:45535

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Source

main.ts:45528
