[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleDomainWhoisOverviewLiveItem

# Interface: IDataforseoLabsGoogleDomainWhoisOverviewLiveItem

## Implemented by

- [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../classes/DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_info](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#backlinks_info)
- [changed\_datetime](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#changed_datetime)
- [created\_datetime](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#created_datetime)
- [domain](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#domain)
- [epp\_status\_codes](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#epp_status_codes)
- [expiration\_datetime](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#expiration_datetime)
- [first\_seen](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#first_seen)
- [metrics](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#metrics)
- [registered](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registered)
- [registrar](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registrar)
- [se\_type](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#se_type)
- [tld](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#tld)
- [updated\_datetime](IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#updated_datetime)

## Properties

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlink data for the returned domain

#### Defined in

[main.ts:85823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85823)

___


### changed\_datetime

• `Optional` **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Defined in

[main.ts:85789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85789)

___


### created\_datetime

• `Optional` **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Defined in

[main.ts:85784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85784)

___


### domain

• `Optional` **domain**: `string`

domain name

#### Defined in

[main.ts:85779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85779)

___


### epp\_status\_codes

• `Optional` **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Defined in

[main.ts:85807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85807)

___


### expiration\_datetime

• `Optional` **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Defined in

[main.ts:85794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85794)

___


### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Defined in

[main.ts:85804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85804)

___


### metrics

• `Optional` **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

[main.ts:85821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85821)

___


### registered

• `Optional` **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Defined in

[main.ts:85814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85814)

___


### registrar

• `Optional` **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Defined in

[main.ts:85819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85819)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:85777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85777)

___


### tld

• `Optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Defined in

[main.ts:85810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85810)

___


### updated\_datetime

• `Optional` **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Defined in

[main.ts:85799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85799)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")