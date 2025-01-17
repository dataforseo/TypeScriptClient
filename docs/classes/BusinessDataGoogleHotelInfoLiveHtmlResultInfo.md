[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoLiveHtmlResultInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlResultInfo

Defined in: main.ts:221260

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoLiveHtmlResultInfo()

> **new BusinessDataGoogleHotelInfoLiveHtmlResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

Defined in: main.ts:221283

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:221275

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:221279

HTML pages

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:221277

the number of results returned in the items array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:221262

unique hotel identifier specified as "hotel_id:$"

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:221270

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:221268

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:221266

search engine domain in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:221264

type of element

#### Implementation of

[`IBusinessDataGoogleHotelInfoLiveHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:221292

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:221320

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)

Defined in: main.ts:221313

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)
