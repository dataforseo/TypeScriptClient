[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLocationsResultInfo

# Class: BusinessDataGoogleLocationsResultInfo

## Implements

- [`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](BusinessDataGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](BusinessDataGoogleLocationsResultInfo.md#location_code)
- [location\_name](BusinessDataGoogleLocationsResultInfo.md#location_name)
- [location\_name\_parent](BusinessDataGoogleLocationsResultInfo.md#location_name_parent)
- [location\_type](BusinessDataGoogleLocationsResultInfo.md#location_type)

### Methods

- [init](BusinessDataGoogleLocationsResultInfo.md#init)
- [toJSON](BusinessDataGoogleLocationsResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLocationsResultInfo**(`data?`): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLocationsResultInfo`](../interfaces/IBusinessDataGoogleLocationsResultInfo.md) |

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Defined in

[main.ts:190186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190186)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[country_iso_code](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:190180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190180)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_code](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:190170](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190170)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_name](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:190172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190172)

___


### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_name_parent](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_name_parent)

#### Defined in

[main.ts:190178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190178)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IBusinessDataGoogleLocationsResultInfo](../interfaces/IBusinessDataGoogleLocationsResultInfo.md).[location_type](../interfaces/IBusinessDataGoogleLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:190182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190182)

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

[main.ts:190195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190195)

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

[main.ts:190216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190216)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)

#### Defined in

[main.ts:190209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190209)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")