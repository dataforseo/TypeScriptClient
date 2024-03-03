[Documentation](../README.md) / [Exports](../modules.md) / MerchantAmazonLocationsResultInfo

# Class: MerchantAmazonLocationsResultInfo

## Implements

- [`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](MerchantAmazonLocationsResultInfo.md#country_iso_code)
- [location\_code](MerchantAmazonLocationsResultInfo.md#location_code)
- [location\_name](MerchantAmazonLocationsResultInfo.md#location_name)
- [location\_name\_parent](MerchantAmazonLocationsResultInfo.md#location_name_parent)
- [location\_type](MerchantAmazonLocationsResultInfo.md#location_type)

### Methods

- [init](MerchantAmazonLocationsResultInfo.md#init)
- [toJSON](MerchantAmazonLocationsResultInfo.md#tojson)
- [fromJS](MerchantAmazonLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonLocationsResultInfo**(`data?`): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md) |

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Defined in

main.ts:169885

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IMerchantAmazonLocationsResultInfo](../interfaces/IMerchantAmazonLocationsResultInfo.md).[country_iso_code](../interfaces/IMerchantAmazonLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:169879

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IMerchantAmazonLocationsResultInfo](../interfaces/IMerchantAmazonLocationsResultInfo.md).[location_code](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_code)

#### Defined in

main.ts:169869

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IMerchantAmazonLocationsResultInfo](../interfaces/IMerchantAmazonLocationsResultInfo.md).[location_name](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name)

#### Defined in

main.ts:169871

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[IMerchantAmazonLocationsResultInfo](../interfaces/IMerchantAmazonLocationsResultInfo.md).[location_name_parent](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:169877

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IMerchantAmazonLocationsResultInfo](../interfaces/IMerchantAmazonLocationsResultInfo.md).[location_type](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_type)

#### Defined in

main.ts:169881

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

main.ts:169894

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

main.ts:169915

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Defined in

main.ts:169908
