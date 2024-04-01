[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesLiveResultInfo

# Class: BusinessDataGoogleHotelSearchesLiveResultInfo

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesLiveResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataGoogleHotelSearchesLiveResultInfo.md#check_url)
- [datetime](BusinessDataGoogleHotelSearchesLiveResultInfo.md#datetime)
- [items](BusinessDataGoogleHotelSearchesLiveResultInfo.md#items)
- [items\_count](BusinessDataGoogleHotelSearchesLiveResultInfo.md#items_count)
- [keyword](BusinessDataGoogleHotelSearchesLiveResultInfo.md#keyword)
- [language\_code](BusinessDataGoogleHotelSearchesLiveResultInfo.md#language_code)
- [location\_code](BusinessDataGoogleHotelSearchesLiveResultInfo.md#location_code)

### Methods

- [init](BusinessDataGoogleHotelSearchesLiveResultInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesLiveResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesLiveResultInfo**(`data?`): [`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesLiveResultInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Defined in

main.ts:200084

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[check_url](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#check_url)

#### Defined in

main.ts:200069

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#datetime)

#### Defined in

main.ts:200074

___

### items

• `Optional` **items**: [`BusinessDataGoogleHotelSearchesItem`](BusinessDataGoogleHotelSearchesItem.md)[]

array of items
note: this field always equals null; use it to facilitate integration and ensure interoperability with the Hotel Info endpoint

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[items](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items)

#### Defined in

main.ts:200080

___

### items\_count

• `Optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[items_count](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#items_count)

#### Defined in

main.ts:200077

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[keyword](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#keyword)

#### Defined in

main.ts:200062

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#language_code)

#### Defined in

main.ts:200066

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveResultInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleHotelSearchesLiveResultInfo.md#location_code)

#### Defined in

main.ts:200064

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:200093

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:200120

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)

#### Defined in

main.ts:200113
