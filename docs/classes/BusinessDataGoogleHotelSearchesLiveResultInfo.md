**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleHotelSearchesLiveResultInfo

# Class: BusinessDataGoogleHotelSearchesLiveResultInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleHotelSearchesLiveResultInfo(data)

> **new BusinessDataGoogleHotelSearchesLiveResultInfo**(`data`?): [`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Source

main.ts:200234

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#check_url)

#### Source

main.ts:200219

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#datetime)

#### Source

main.ts:200224

***

### items?

> **`optional`** **items**: [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)[]

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items)

#### Source

main.ts:200230

***

### items\_count?

> **`optional`** **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items_count)

#### Source

main.ts:200227

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#keyword)

#### Source

main.ts:200212

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#language_code)

#### Source

main.ts:200216

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#location_code)

#### Source

main.ts:200214

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:200243

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:200270

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Source

main.ts:200263
