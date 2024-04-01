[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleLocationsResultInfo

# Class: AppDataGoogleLocationsResultInfo

## Implements

- [`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](AppDataGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](AppDataGoogleLocationsResultInfo.md#location_code)
- [location\_name](AppDataGoogleLocationsResultInfo.md#location_name)
- [location\_name\_parent](AppDataGoogleLocationsResultInfo.md#location_name_parent)
- [location\_type](AppDataGoogleLocationsResultInfo.md#location_type)

### Methods

- [init](AppDataGoogleLocationsResultInfo.md#init)
- [toJSON](AppDataGoogleLocationsResultInfo.md#tojson)
- [fromJS](AppDataGoogleLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleLocationsResultInfo**(`data?`): [`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md) |

#### Returns

[`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:182607

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IAppDataGoogleLocationsResultInfo](../interfaces/IAppDataGoogleLocationsResultInfo.md).[country_iso_code](../interfaces/IAppDataGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:182601

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IAppDataGoogleLocationsResultInfo](../interfaces/IAppDataGoogleLocationsResultInfo.md).[location_code](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:182589

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IAppDataGoogleLocationsResultInfo](../interfaces/IAppDataGoogleLocationsResultInfo.md).[location_name](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:182591

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"

#### Implementation of

[IAppDataGoogleLocationsResultInfo](../interfaces/IAppDataGoogleLocationsResultInfo.md).[location_name_parent](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:182599

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IAppDataGoogleLocationsResultInfo](../interfaces/IAppDataGoogleLocationsResultInfo.md).[location_type](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:182603

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

main.ts:182616

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

main.ts:182637

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:182630
