[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkNewLostReferringDomainsLiveItem

# Class: BacklinksBulkNewLostReferringDomainsLiveItem

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkNewLostReferringDomainsLiveItem.md#constructor)

### Properties

- [lost\_referring\_domains](BacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_domains)
- [lost\_referring\_main\_domains](BacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_main_domains)
- [new\_referring\_domains](BacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_domains)
- [new\_referring\_main\_domains](BacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_main_domains)
- [target](BacklinksBulkNewLostReferringDomainsLiveItem.md#target)

### Methods

- [init](BacklinksBulkNewLostReferringDomainsLiveItem.md#init)
- [toJSON](BacklinksBulkNewLostReferringDomainsLiveItem.md#tojson)
- [fromJS](BacklinksBulkNewLostReferringDomainsLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkNewLostReferringDomainsLiveItem**(`data?`): [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md) |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Defined in

main.ts:146626

## Properties

### lost\_referring\_domains

• `Optional` **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveItem](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[lost_referring_domains](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_domains)

#### Defined in

main.ts:146618

___

### lost\_referring\_main\_domains

• `Optional` **lost\_referring\_main\_domains**: `number`

number of lost referring main domains pointing to the target

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveItem](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[lost_referring_main_domains](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_main_domains)

#### Defined in

main.ts:146622

___

### new\_referring\_domains

• `Optional` **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveItem](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[new_referring_domains](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_domains)

#### Defined in

main.ts:146615

___

### new\_referring\_main\_domains

• `Optional` **new\_referring\_main\_domains**: `number`

number of new referring main domains pointing to the target

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveItem](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[new_referring_main_domains](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_main_domains)

#### Defined in

main.ts:146620

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[IBacklinksBulkNewLostReferringDomainsLiveItem](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[target](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#target)

#### Defined in

main.ts:146612

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

main.ts:146635

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

main.ts:146656

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Defined in

main.ts:146649
