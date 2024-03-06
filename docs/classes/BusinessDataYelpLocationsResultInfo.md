[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpLocationsResultInfo

# Class: BusinessDataYelpLocationsResultInfo

## Implements

- [`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](BusinessDataYelpLocationsResultInfo.md#country_iso_code)
- [location\_code](BusinessDataYelpLocationsResultInfo.md#location_code)
- [location\_name](BusinessDataYelpLocationsResultInfo.md#location_name)
- [location\_name\_parent](BusinessDataYelpLocationsResultInfo.md#location_name_parent)
- [location\_type](BusinessDataYelpLocationsResultInfo.md#location_type)

### Methods

- [init](BusinessDataYelpLocationsResultInfo.md#init)
- [toJSON](BusinessDataYelpLocationsResultInfo.md#tojson)
- [fromJS](BusinessDataYelpLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpLocationsResultInfo**(`data?`): [`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md) |

#### Returns

[`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Defined in

[main.ts:202802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202802)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IBusinessDataYelpLocationsResultInfo](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[country_iso_code](../interfaces/IBusinessDataYelpLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:202796](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202796)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IBusinessDataYelpLocationsResultInfo](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[location_code](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:202786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202786)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IBusinessDataYelpLocationsResultInfo](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[location_name](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:202788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202788)

___


### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[IBusinessDataYelpLocationsResultInfo](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[location_name_parent](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_name_parent)

#### Defined in

[main.ts:202794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202794)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IBusinessDataYelpLocationsResultInfo](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[location_type](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:202798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202798)

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

[main.ts:202811](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202811)

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

[main.ts:202832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202832)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Defined in

[main.ts:202825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L202825)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")