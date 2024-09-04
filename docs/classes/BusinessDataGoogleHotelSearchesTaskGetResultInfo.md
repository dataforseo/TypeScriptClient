[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleHotelSearchesTaskGetResultInfo

# Class: BusinessDataGoogleHotelSearchesTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesTaskGetResultInfo()

> **new BusinessDataGoogleHotelSearchesTaskGetResultInfo**(`data`?): [`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Defined in

main.ts:204203

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:204188

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:204193

***

### items?

> `optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)[]

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items)

#### Defined in

main.ts:204199

***

### items\_count?

> `optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:204196

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character);
in order to obtain accurate search results, the location name is appended to the keyword automatically

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:204181

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:204185

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesTaskGetResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:204183

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:204212

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:204239

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)

#### Defined in

main.ts:204232
