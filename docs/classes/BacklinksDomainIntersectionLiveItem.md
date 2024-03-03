[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainIntersectionLiveItem

# Class: BacklinksDomainIntersectionLiveItem

## Implements

- [`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainIntersectionLiveItem.md#constructor)

### Properties

- [domain\_intersection](BacklinksDomainIntersectionLiveItem.md#domain_intersection)
- [summary](BacklinksDomainIntersectionLiveItem.md#summary)

### Methods

- [init](BacklinksDomainIntersectionLiveItem.md#init)
- [toJSON](BacklinksDomainIntersectionLiveItem.md#tojson)
- [fromJS](BacklinksDomainIntersectionLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainIntersectionLiveItem**(`data?`): [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md) |

#### Returns

[`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Defined in

main.ts:137218

## Properties

### domain\_intersection

• `Optional` **domain\_intersection**: `Object`

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index signature

▪ [key: `string`]: [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Implementation of

[IBacklinksDomainIntersectionLiveItem](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[domain_intersection](../interfaces/IBacklinksDomainIntersectionLiveItem.md#domain_intersection)

#### Defined in

main.ts:137212

___

### summary

• `Optional` **summary**: [`Summary`](Summary.md)

contains the domain intersections summary

#### Implementation of

[IBacklinksDomainIntersectionLiveItem](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[summary](../interfaces/IBacklinksDomainIntersectionLiveItem.md#summary)

#### Defined in

main.ts:137214

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

main.ts:137227

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

main.ts:137251

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Defined in

main.ts:137244
