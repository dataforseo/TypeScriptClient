[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostReferringDomainsLiveResultInfo

# Class: BacklinksBulkNewLostReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items)
- [items\_count](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items_count)

### Methods

- [init](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md#init)
- [toJSON](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md#tojson)
- [fromJS](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostReferringDomainsLiveResultInfo**(`data?`): [`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md) |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:146696

## Properties

### items

• `Optional` **items**: [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveResultInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md).[items](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items)

#### Defined in

main.ts:146692

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveResultInfo](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md).[items_count](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items_count)

#### Defined in

main.ts:146690

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

main.ts:146705

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

main.ts:146727

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:146720
