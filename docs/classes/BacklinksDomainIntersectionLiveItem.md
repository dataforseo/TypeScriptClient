[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainIntersectionLiveItem

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

[main.ts:137074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137074)

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

[main.ts:137068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137068)

___

### summary

• `Optional` **summary**: [`Summary`](Summary.md)

contains the domain intersections summary

#### Implementation of

[IBacklinksDomainIntersectionLiveItem](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[summary](../interfaces/IBacklinksDomainIntersectionLiveItem.md#summary)

#### Defined in

[main.ts:137070](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137070)

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

[main.ts:137083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137083)

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

[main.ts:137107](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137107)

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

[main.ts:137100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137100)
