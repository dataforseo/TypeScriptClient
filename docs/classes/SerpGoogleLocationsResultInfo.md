[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocationsResultInfo

# Class: SerpGoogleLocationsResultInfo

## Implements

- [`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](SerpGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](SerpGoogleLocationsResultInfo.md#location_code)
- [location\_code\_parent](SerpGoogleLocationsResultInfo.md#location_code_parent)
- [location\_name](SerpGoogleLocationsResultInfo.md#location_name)
- [location\_type](SerpGoogleLocationsResultInfo.md#location_type)

### Methods

- [init](SerpGoogleLocationsResultInfo.md#init)
- [toJSON](SerpGoogleLocationsResultInfo.md#tojson)
- [fromJS](SerpGoogleLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocationsResultInfo**(`data?`): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocationsResultInfo`](../interfaces/ISerpGoogleLocationsResultInfo.md) |

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Defined in

[main.ts:24079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24079)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[country_iso_code](../interfaces/ISerpGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

[main.ts:24073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24073)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_code](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code)

#### Defined in

[main.ts:24060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24060)

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_code_parent](../interfaces/ISerpGoogleLocationsResultInfo.md#location_code_parent)

#### Defined in

[main.ts:24071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24071)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_name](../interfaces/ISerpGoogleLocationsResultInfo.md#location_name)

#### Defined in

[main.ts:24062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24062)

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Implementation of

[ISerpGoogleLocationsResultInfo](../interfaces/ISerpGoogleLocationsResultInfo.md).[location_type](../interfaces/ISerpGoogleLocationsResultInfo.md#location_type)

#### Defined in

[main.ts:24075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24075)

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

[main.ts:24088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24088)

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

[main.ts:24109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24109)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocationsResultInfo`](SerpGoogleLocationsResultInfo.md)

#### Defined in

[main.ts:24102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24102)
