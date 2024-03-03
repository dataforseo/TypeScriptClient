[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessInfoTaskGetResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#constructor)

### Properties

- [check\_url](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#check_url)
- [datetime](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#datetime)
- [item\_types](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#item_types)
- [items](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items)
- [items\_count](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items_count)
- [keyword](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#keyword)
- [language\_code](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#language_code)
- [location\_code](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#location_code)
- [se\_domain](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#se_domain)

### Methods

- [init](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessInfoTaskGetResultInfo**(`data?`): [`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Defined in

main.ts:191904

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[check_url](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:191886

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[datetime](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:191891

___

### item\_types

• `Optional` **item\_types**: `string`[]

item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[item_types](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#item_types)

#### Defined in

main.ts:191895

___

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

array of directory items

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[items](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items)

#### Defined in

main.ts:191900

___

### items\_count

• `Optional` **items\_count**: `number`

item types
the number of items in the items array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[items_count](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:191898

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)
this field will contain the cid parameter if you specified it in the keyword field when setting a task;
example:
cid:2946633002421908862
learn more about the parameter in this help center article

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[keyword](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:191877

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[language_code](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:191883

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:191881

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain as specified in a POST array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md).[se_domain](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:191879

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

main.ts:191913

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

main.ts:191946

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskGetResultInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResultInfo.md)

#### Defined in

main.ts:191939
