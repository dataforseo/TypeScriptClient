[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsWhoisOverviewLiveItem

# Class: DomainAnalyticsWhoisOverviewLiveItem

items array

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsWhoisOverviewLiveItem.md#constructor)

### Properties

- [backlinks\_info](DomainAnalyticsWhoisOverviewLiveItem.md#backlinks_info)
- [changed\_datetime](DomainAnalyticsWhoisOverviewLiveItem.md#changed_datetime)
- [created\_datetime](DomainAnalyticsWhoisOverviewLiveItem.md#created_datetime)
- [domain](DomainAnalyticsWhoisOverviewLiveItem.md#domain)
- [epp\_status\_codes](DomainAnalyticsWhoisOverviewLiveItem.md#epp_status_codes)
- [expiration\_datetime](DomainAnalyticsWhoisOverviewLiveItem.md#expiration_datetime)
- [first\_seen](DomainAnalyticsWhoisOverviewLiveItem.md#first_seen)
- [metrics](DomainAnalyticsWhoisOverviewLiveItem.md#metrics)
- [registered](DomainAnalyticsWhoisOverviewLiveItem.md#registered)
- [registrar](DomainAnalyticsWhoisOverviewLiveItem.md#registrar)
- [tld](DomainAnalyticsWhoisOverviewLiveItem.md#tld)
- [updated\_datetime](DomainAnalyticsWhoisOverviewLiveItem.md#updated_datetime)

### Methods

- [init](DomainAnalyticsWhoisOverviewLiveItem.md#init)
- [toJSON](DomainAnalyticsWhoisOverviewLiveItem.md#tojson)
- [fromJS](DomainAnalyticsWhoisOverviewLiveItem.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsWhoisOverviewLiveItem**(`data?`): [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md) |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Defined in

[main.ts:76123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76123)

## Properties

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlink data for the returned domain

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[backlinks_info](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#backlinks_info)

#### Defined in

[main.ts:76119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76119)

___


### changed\_datetime

• `Optional` **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[changed_datetime](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#changed_datetime)

#### Defined in

[main.ts:76085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76085)

___


### created\_datetime

• `Optional` **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[created_datetime](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#created_datetime)

#### Defined in

[main.ts:76080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76080)

___


### domain

• `Optional` **domain**: `string`

domain name

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[domain](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#domain)

#### Defined in

[main.ts:76075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76075)

___


### epp\_status\_codes

• `Optional` **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[epp_status_codes](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#epp_status_codes)

#### Defined in

[main.ts:76103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76103)

___


### expiration\_datetime

• `Optional` **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[expiration_datetime](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#expiration_datetime)

#### Defined in

[main.ts:76090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76090)

___


### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[first_seen](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#first_seen)

#### Defined in

[main.ts:76100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76100)

___


### metrics

• `Optional` **metrics**: [`MetricsBundleInfo`](MetricsBundleInfo.md)

ranking data relevant to the specified domain

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[metrics](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#metrics)

#### Defined in

[main.ts:76117](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76117)

___


### registered

• `Optional` **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[registered](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#registered)

#### Defined in

[main.ts:76110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76110)

___


### registrar

• `Optional` **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[registrar](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#registrar)

#### Defined in

[main.ts:76115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76115)

___


### tld

• `Optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[tld](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#tld)

#### Defined in

[main.ts:76106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76106)

___


### updated\_datetime

• `Optional` **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveItem](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[updated_datetime](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#updated_datetime)

#### Defined in

[main.ts:76095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76095)

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

[main.ts:76132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76132)

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

[main.ts:76164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76164)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Defined in

[main.ts:76157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76157)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")