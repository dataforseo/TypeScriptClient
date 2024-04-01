[Documentation](../README.md) / [Exports](../modules.md) / TargetInfo

# Class: TargetInfo

## Implements

- [`ITargetInfo`](../interfaces/ITargetInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TargetInfo.md#constructor)

### Properties

- [cms](TargetInfo.md#cms)
- [country](TargetInfo.md#country)
- [ip\_address](TargetInfo.md#ip_address)
- [is\_ip](TargetInfo.md#is_ip)
- [platform\_type](TargetInfo.md#platform_type)
- [server](TargetInfo.md#server)
- [target\_spam\_score](TargetInfo.md#target_spam_score)

### Methods

- [init](TargetInfo.md#init)
- [toJSON](TargetInfo.md#tojson)
- [fromJS](TargetInfo.md#fromjs)

## Constructors

### constructor

• **new TargetInfo**(`data?`): [`TargetInfo`](TargetInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITargetInfo`](../interfaces/ITargetInfo.md) |

#### Returns

[`TargetInfo`](TargetInfo.md)

#### Defined in

main.ts:134751

## Properties

### cms

• `Optional` **cms**: `string`

content management system

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[cms](../interfaces/ITargetInfo.md#cms)

#### Defined in

main.ts:134734

___

### country

• `Optional` **country**: `string`

country code that the target domain is determined to belong to

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[country](../interfaces/ITargetInfo.md#country)

#### Defined in

main.ts:134740

___

### ip\_address

• `Optional` **ip\_address**: `string`

IP address of the target

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[ip_address](../interfaces/ITargetInfo.md#ip_address)

#### Defined in

main.ts:134738

___

### is\_ip

• `Optional` **is\_ip**: `boolean`

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[is_ip](../interfaces/ITargetInfo.md#is_ip)

#### Defined in

main.ts:134743

___

### platform\_type

• `Optional` **platform\_type**: `string`[]

platform type

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[platform_type](../interfaces/ITargetInfo.md#platform_type)

#### Defined in

main.ts:134736

___

### server

• `Optional` **server**: `string`

server

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[server](../interfaces/ITargetInfo.md#server)

#### Defined in

main.ts:134732

___

### target\_spam\_score

• `Optional` **target\_spam\_score**: `number`

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[target_spam_score](../interfaces/ITargetInfo.md#target_spam_score)

#### Defined in

main.ts:134747

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

main.ts:134760

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

main.ts:134787

___

### fromJS

▸ **fromJS**(`data`): [`TargetInfo`](TargetInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TargetInfo`](TargetInfo.md)

#### Defined in

main.ts:134780
