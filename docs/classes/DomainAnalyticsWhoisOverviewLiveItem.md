[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsWhoisOverviewLiveItem

# Class: DomainAnalyticsWhoisOverviewLiveItem

Defined in: main.ts:89609

items array

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsWhoisOverviewLiveItem()

> **new DomainAnalyticsWhoisOverviewLiveItem**(`data`?): [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

Defined in: main.ts:89659

#### Parameters

##### data?

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md)

#### Returns

[`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

Defined in: main.ts:89655

backlink data for the returned domain

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`backlinks_info`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#backlinks_info)

***

### changed\_datetime?

> `optional` **changed\_datetime**: `string`

Defined in: main.ts:89621

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`changed_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#changed_datetime)

***

### created\_datetime?

> `optional` **created\_datetime**: `string`

Defined in: main.ts:89616

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`created_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#created_datetime)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:89611

domain name

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`domain`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#domain)

***

### epp\_status\_codes?

> `optional` **epp\_status\_codes**: `string`[]

Defined in: main.ts:89639

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`epp_status_codes`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#epp_status_codes)

***

### expiration\_datetime?

> `optional` **expiration\_datetime**: `string`

Defined in: main.ts:89626

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`expiration_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#expiration_datetime)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:89636

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`first_seen`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#first_seen)

***

### metrics?

> `optional` **metrics**: [`MetricsBundleInfo`](MetricsBundleInfo.md)

Defined in: main.ts:89653

ranking data relevant to the specified domain

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`metrics`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#metrics)

***

### registered?

> `optional` **registered**: `boolean`

Defined in: main.ts:89646

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`registered`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#registered)

***

### registrar?

> `optional` **registrar**: `string`

Defined in: main.ts:89651

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`registrar`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#registrar)

***

### tld?

> `optional` **tld**: `string`

Defined in: main.ts:89642

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`tld`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#tld)

***

### updated\_datetime?

> `optional` **updated\_datetime**: `string`

Defined in: main.ts:89631

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Implementation of

[`IDomainAnalyticsWhoisOverviewLiveItem`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md).[`updated_datetime`](../interfaces/IDomainAnalyticsWhoisOverviewLiveItem.md#updated_datetime)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89668

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89700

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)

Defined in: main.ts:89693

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsWhoisOverviewLiveItem`](DomainAnalyticsWhoisOverviewLiveItem.md)
