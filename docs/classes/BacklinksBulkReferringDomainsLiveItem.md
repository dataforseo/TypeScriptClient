[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBulkReferringDomainsLiveItem

# Class: BacklinksBulkReferringDomainsLiveItem

## Implements

- [`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkReferringDomainsLiveItem.md#constructor)

### Properties

- [referring\_domains](BacklinksBulkReferringDomainsLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksBulkReferringDomainsLiveItem.md#referring_domains_nofollow)
- [referring\_main\_domains](BacklinksBulkReferringDomainsLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksBulkReferringDomainsLiveItem.md#referring_main_domains_nofollow)
- [target](BacklinksBulkReferringDomainsLiveItem.md#target)

### Methods

- [init](BacklinksBulkReferringDomainsLiveItem.md#init)
- [toJSON](BacklinksBulkReferringDomainsLiveItem.md#tojson)
- [fromJS](BacklinksBulkReferringDomainsLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkReferringDomainsLiveItem**(`data?`): [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md) |

#### Returns

[`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Defined in

main.ts:145866

## Properties

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Implementation of

[IBacklinksBulkReferringDomainsLiveItem](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[referring_domains](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_domains)

#### Defined in

main.ts:145855

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksBulkReferringDomainsLiveItem](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[referring_domains_nofollow](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:145857

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains pointing to the target
the number of primary (root) domains referring to your target

#### Implementation of

[IBacklinksBulkReferringDomainsLiveItem](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[referring_main_domains](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains)

#### Defined in

main.ts:145860

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksBulkReferringDomainsLiveItem](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[referring_main_domains_nofollow](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:145862

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[IBacklinksBulkReferringDomainsLiveItem](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[target](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#target)

#### Defined in

main.ts:145852

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

main.ts:145875

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

main.ts:145896

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Defined in

main.ts:145889
