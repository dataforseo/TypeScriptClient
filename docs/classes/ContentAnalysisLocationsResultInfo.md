[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisLocationsResultInfo

# Class: ContentAnalysisLocationsResultInfo

## Implements

- [`IContentAnalysisLocationsResultInfo`](../interfaces/IContentAnalysisLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](ContentAnalysisLocationsResultInfo.md#country_iso_code)
- [location\_name](ContentAnalysisLocationsResultInfo.md#location_name)

### Methods

- [init](ContentAnalysisLocationsResultInfo.md#init)
- [toJSON](ContentAnalysisLocationsResultInfo.md#tojson)
- [fromJS](ContentAnalysisLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisLocationsResultInfo**(`data?`): [`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisLocationsResultInfo`](../interfaces/IContentAnalysisLocationsResultInfo.md) |

#### Returns

[`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Defined in

main.ts:155671

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IContentAnalysisLocationsResultInfo](../interfaces/IContentAnalysisLocationsResultInfo.md).[country_iso_code](../interfaces/IContentAnalysisLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:155667

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IContentAnalysisLocationsResultInfo](../interfaces/IContentAnalysisLocationsResultInfo.md).[location_name](../interfaces/IContentAnalysisLocationsResultInfo.md#location_name)

#### Defined in

main.ts:155665

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

main.ts:155680

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

main.ts:155698

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Defined in

main.ts:155691
