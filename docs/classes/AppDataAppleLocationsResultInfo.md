[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleLocationsResultInfo

# Class: AppDataAppleLocationsResultInfo

## Implements

- [`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](AppDataAppleLocationsResultInfo.md#country_iso_code)
- [location\_code](AppDataAppleLocationsResultInfo.md#location_code)
- [location\_name](AppDataAppleLocationsResultInfo.md#location_name)
- [location\_name\_parent](AppDataAppleLocationsResultInfo.md#location_name_parent)
- [location\_type](AppDataAppleLocationsResultInfo.md#location_type)

### Methods

- [init](AppDataAppleLocationsResultInfo.md#init)
- [toJSON](AppDataAppleLocationsResultInfo.md#tojson)
- [fromJS](AppDataAppleLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleLocationsResultInfo**(`data?`): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md) |

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Defined in

[main.ts:182751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182751)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IAppDataAppleLocationsResultInfo](../interfaces/IAppDataAppleLocationsResultInfo.md).[country_iso_code](../interfaces/IAppDataAppleLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:182745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182745)

___


### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IAppDataAppleLocationsResultInfo](../interfaces/IAppDataAppleLocationsResultInfo.md).[location_code](../interfaces/IAppDataAppleLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:182732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182732)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IAppDataAppleLocationsResultInfo](../interfaces/IAppDataAppleLocationsResultInfo.md).[location_name](../interfaces/IAppDataAppleLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:182734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182734)

___


### location\_name\_parent

• `Optional` **location\_name\_parent**: `number`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"
note: Apple App Data API currently supports countries only, that is why this value will always be null

#### Implementation of

[IAppDataAppleLocationsResultInfo](../interfaces/IAppDataAppleLocationsResultInfo.md).[location_name_parent](../interfaces/IAppDataAppleLocationsResultInfo.md#location_name_parent)

#### Defined in

[main.ts:182743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182743)

___


### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[IAppDataAppleLocationsResultInfo](../interfaces/IAppDataAppleLocationsResultInfo.md).[location_type](../interfaces/IAppDataAppleLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:182747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182747)

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

[main.ts:182760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182760)

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

[main.ts:182781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182781)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Defined in

[main.ts:182774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182774)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")