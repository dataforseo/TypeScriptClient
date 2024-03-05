[dataforseo-client](../README.md) / [Exports](../modules.md) / ITargetInfo

# Interface: ITargetInfo

## Implemented by

- [`TargetInfo`](../classes/TargetInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cms](ITargetInfo.md#cms)
- [country](ITargetInfo.md#country)
- [ip\_address](ITargetInfo.md#ip_address)
- [is\_ip](ITargetInfo.md#is_ip)
- [platform\_type](ITargetInfo.md#platform_type)
- [server](ITargetInfo.md#server)
- [target\_spam\_score](ITargetInfo.md#target_spam_score)

## Properties

### cms

• `Optional` **cms**: `string`

content management system

#### Defined in

[main.ts:129445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129445)

___

### country

• `Optional` **country**: `string`

country code that the target domain is determined to belong to

#### Defined in

[main.ts:129451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129451)

___

### ip\_address

• `Optional` **ip\_address**: `string`

IP address of the target

#### Defined in

[main.ts:129449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129449)

___

### is\_ip

• `Optional` **is\_ip**: `boolean`

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Defined in

[main.ts:129454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129454)

___

### platform\_type

• `Optional` **platform\_type**: `string`[]

platform type

#### Defined in

[main.ts:129447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129447)

___

### server

• `Optional` **server**: `string`

server

#### Defined in

[main.ts:129443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129443)

___

### target\_spam\_score

• `Optional` **target\_spam\_score**: `number`

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:129458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129458)
