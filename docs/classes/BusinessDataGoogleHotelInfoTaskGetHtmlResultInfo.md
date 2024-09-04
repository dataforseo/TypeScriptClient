[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

# Class: BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo()

> **new BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo**(`data`?): [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:211262

## Properties

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:211252

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:211256

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:211254

***

### keyword?

> `optional` **keyword**: `string`

identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:211243

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:211247

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:211245

***

### se\_domain?

> `optional` **se\_domain**: `string`

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:211258

***

### type?

> `optional` **type**: `string`

#### Implementation of

[`IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:211257

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:211271

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:211299

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:211292
