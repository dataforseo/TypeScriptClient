[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkReferringDomainsLiveResultInfo

# Class: BacklinksBulkReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkReferringDomainsLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksBulkReferringDomainsLiveResultInfo.md#items)
- [items\_count](BacklinksBulkReferringDomainsLiveResultInfo.md#items_count)

### Methods

- [init](BacklinksBulkReferringDomainsLiveResultInfo.md#init)
- [toJSON](BacklinksBulkReferringDomainsLiveResultInfo.md#tojson)
- [fromJS](BacklinksBulkReferringDomainsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkReferringDomainsLiveResultInfo**(`data?`): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md) |

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Defined in

[main.ts:140509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140509)

## Properties

### items

• `Optional` **items**: [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResultInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[items](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items)

#### Defined in

[main.ts:140505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140505)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksBulkReferringDomainsLiveResultInfo](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[items_count](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:140503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140503)

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

[main.ts:140518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140518)

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

[main.ts:140540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140540)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Defined in

[main.ts:140533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140533)
