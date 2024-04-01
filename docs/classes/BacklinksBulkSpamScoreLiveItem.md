[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkSpamScoreLiveItem

# Class: BacklinksBulkSpamScoreLiveItem

## Implements

- [`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkSpamScoreLiveItem.md#constructor)

### Properties

- [spam\_score](BacklinksBulkSpamScoreLiveItem.md#spam_score)
- [target](BacklinksBulkSpamScoreLiveItem.md#target)
- [type](BacklinksBulkSpamScoreLiveItem.md#type)

### Methods

- [init](BacklinksBulkSpamScoreLiveItem.md#init)
- [toJSON](BacklinksBulkSpamScoreLiveItem.md#tojson)
- [fromJS](BacklinksBulkSpamScoreLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkSpamScoreLiveItem**(`data?`): [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md) |

#### Returns

[`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Defined in

main.ts:145517

## Properties

### spam\_score

• `Optional` **spam\_score**: `number`

average spam score the target
learn more about how the metric is calculated

#### Implementation of

[IBacklinksBulkSpamScoreLiveItem](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[spam_score](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#spam_score)

#### Defined in

main.ts:145513

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[IBacklinksBulkSpamScoreLiveItem](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[target](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#target)

#### Defined in

main.ts:145510

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksBulkSpamScoreLiveItem](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[type](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#type)

#### Defined in

main.ts:145508

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

main.ts:145526

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

main.ts:145545

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)

#### Defined in

main.ts:145538
