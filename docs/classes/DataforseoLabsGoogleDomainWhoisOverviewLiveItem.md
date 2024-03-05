[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveItem

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#constructor)

### Properties

- [backlinks\_info](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#backlinks_info)
- [changed\_datetime](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#changed_datetime)
- [created\_datetime](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#created_datetime)
- [domain](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#domain)
- [epp\_status\_codes](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#epp_status_codes)
- [expiration\_datetime](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#expiration_datetime)
- [first\_seen](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#first_seen)
- [metrics](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#metrics)
- [registered](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registered)
- [registrar](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registrar)
- [se\_type](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#se_type)
- [tld](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#tld)
- [updated\_datetime](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#updated_datetime)

### Methods

- [init](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainWhoisOverviewLiveItem**(`data?`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Defined in

[main.ts:85694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85694)

## Properties

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlink data for the returned domain

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[backlinks_info](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#backlinks_info)

#### Defined in

[main.ts:85690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85690)

___

### changed\_datetime

• `Optional` **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[changed_datetime](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#changed_datetime)

#### Defined in

[main.ts:85656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85656)

___

### created\_datetime

• `Optional` **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[created_datetime](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#created_datetime)

#### Defined in

[main.ts:85651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85651)

___

### domain

• `Optional` **domain**: `string`

domain name

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[domain](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#domain)

#### Defined in

[main.ts:85646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85646)

___

### epp\_status\_codes

• `Optional` **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[epp_status_codes](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#epp_status_codes)

#### Defined in

[main.ts:85674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85674)

___

### expiration\_datetime

• `Optional` **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[expiration_datetime](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#expiration_datetime)

#### Defined in

[main.ts:85661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85661)

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[first_seen](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#first_seen)

#### Defined in

[main.ts:85671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85671)

___

### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[metrics](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#metrics)

#### Defined in

[main.ts:85688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85688)

___

### registered

• `Optional` **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[registered](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registered)

#### Defined in

[main.ts:85681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85681)

___

### registrar

• `Optional` **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[registrar](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registrar)

#### Defined in

[main.ts:85686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85686)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#se_type)

#### Defined in

[main.ts:85644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85644)

___

### tld

• `Optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[tld](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#tld)

#### Defined in

[main.ts:85677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85677)

___

### updated\_datetime

• `Optional` **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveItem](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[updated_datetime](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#updated_datetime)

#### Defined in

[main.ts:85666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85666)

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

[main.ts:85703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85703)

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

[main.ts:85742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85742)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Defined in

[main.ts:85735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85735)
