**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsWhoisOverviewLiveItem

# Class: DomainAnalyticsWhoisOverviewLiveItem

items array

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsWhoisOverviewLiveItem(data)

> **new DomainAnalyticsWhoisOverviewLiveItem**(`data`?): [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md)

#### Returns

[`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Source

main.ts:78648

## Properties

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlink data for the returned domain

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`backlinks_info`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#backlinks_info)

#### Source

main.ts:78644

***

### changed\_datetime?

> **`optional`** **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`changed_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#changed_datetime)

#### Source

main.ts:78610

***

### created\_datetime?

> **`optional`** **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`created_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#created_datetime)

#### Source

main.ts:78605

***

### domain?

> **`optional`** **domain**: `string`

domain name

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`domain`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#domain)

#### Source

main.ts:78600

***

### epp\_status\_codes?

> **`optional`** **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`epp_status_codes`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#epp_status_codes)

#### Source

main.ts:78628

***

### expiration\_datetime?

> **`optional`** **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`expiration_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#expiration_datetime)

#### Source

main.ts:78615

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`first_seen`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#first_seen)

#### Source

main.ts:78625

***

### metrics?

> **`optional`** **metrics**: [`MetricsBundleInfo`](MetricsBundleInfo.md)

ranking data relevant to the specified domain

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`metrics`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#metrics)

#### Source

main.ts:78642

***

### registered?

> **`optional`** **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`registered`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#registered)

#### Source

main.ts:78635

***

### registrar?

> **`optional`** **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`registrar`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#registrar)

#### Source

main.ts:78640

***

### tld?

> **`optional`** **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`tld`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#tld)

#### Source

main.ts:78631

***

### updated\_datetime?

> **`optional`** **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`updated_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#updated_datetime)

#### Source

main.ts:78620

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:78657

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:78689

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

#### Source

main.ts:78682
