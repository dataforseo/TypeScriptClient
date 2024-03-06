[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / TargetInfo

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

[main.ts:129384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129384)

## Properties

### cms

• `Optional` **cms**: `string`

content management system

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[cms](../interfaces/ITargetInfo.md#cms)

#### Defined in

[main.ts:129367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129367)

___


### country

• `Optional` **country**: `string`

country code that the target domain is determined to belong to

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[country](../interfaces/ITargetInfo.md#country)

#### Defined in

[main.ts:129373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129373)

___


### ip\_address

• `Optional` **ip\_address**: `string`

IP address of the target

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[ip_address](../interfaces/ITargetInfo.md#ip_address)

#### Defined in

[main.ts:129371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129371)

___


### is\_ip

• `Optional` **is\_ip**: `boolean`

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[is_ip](../interfaces/ITargetInfo.md#is_ip)

#### Defined in

[main.ts:129376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129376)

___


### platform\_type

• `Optional` **platform\_type**: `string`[]

platform type

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[platform_type](../interfaces/ITargetInfo.md#platform_type)

#### Defined in

[main.ts:129369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129369)

___


### server

• `Optional` **server**: `string`

server

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[server](../interfaces/ITargetInfo.md#server)

#### Defined in

[main.ts:129365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129365)

___


### target\_spam\_score

• `Optional` **target\_spam\_score**: `number`

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Implementation of

[ITargetInfo](../interfaces/ITargetInfo.md).[target_spam_score](../interfaces/ITargetInfo.md#target_spam_score)

#### Defined in

[main.ts:129380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129380)

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

[main.ts:129393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129393)

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

[main.ts:129420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129420)

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

[main.ts:129413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129413)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")