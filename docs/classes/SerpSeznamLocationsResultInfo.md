[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamLocationsResultInfo

# Class: SerpSeznamLocationsResultInfo

## Implements

- [`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpSeznamLocationsResultInfo.md#country_iso_code)
- [location\_code](SerpSeznamLocationsResultInfo.md#location_code)
- [location\_code\_parent](SerpSeznamLocationsResultInfo.md#location_code_parent)
- [location\_name](SerpSeznamLocationsResultInfo.md#location_name)
- [location\_type](SerpSeznamLocationsResultInfo.md#location_type)

### Methods

- [init](SerpSeznamLocationsResultInfo.md#init)
- [toJSON](SerpSeznamLocationsResultInfo.md#tojson)
- [fromJS](SerpSeznamLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamLocationsResultInfo**(`data?`): [`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md) |

#### Returns

[`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Defined in

[main.ts:68768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68768)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpSeznamLocationsResultInfo](../interfaces/ISerpSeznamLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpSeznamLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:68762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68762)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpSeznamLocationsResultInfo](../interfaces/ISerpSeznamLocationsResultInfo.md).[location_code](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:68754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68754)

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[ISerpSeznamLocationsResultInfo](../interfaces/ISerpSeznamLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code_parent)

#### Defined in

[main.ts:68760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68760)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpSeznamLocationsResultInfo](../interfaces/ISerpSeznamLocationsResultInfo.md).[location_name](../interfaces/ISerpSeznamLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:68756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68756)

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpSeznamLocationsResultInfo](../interfaces/ISerpSeznamLocationsResultInfo.md).[location_type](../interfaces/ISerpSeznamLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:68764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68764)

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

[main.ts:68777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68777)

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

[main.ts:68798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68798)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

#### Defined in

[main.ts:68791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68791)
