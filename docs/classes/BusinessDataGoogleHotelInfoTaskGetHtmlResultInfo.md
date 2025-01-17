[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

# Class: BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

Defined in: main.ts:220032

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo()

> **new BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

Defined in: main.ts:220056

#### Parameters

##### data?

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:220046

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:220050

HTML pages

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:220048

the number of results returned in the items array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:220037

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:220041

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:220039

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:220052

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:220051

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:220065

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:220093

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

Defined in: main.ts:220086

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)
