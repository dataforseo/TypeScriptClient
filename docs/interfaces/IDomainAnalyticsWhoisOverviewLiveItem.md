[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDomainAnalyticsWhoisOverviewLiveItem

# Interface: IDomainAnalyticsWhoisOverviewLiveItem

Defined in: main.ts:89727

items array

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

Defined in: main.ts:89773

backlink data for the returned domain

***

### changed\_datetime?

> `optional` **changed\_datetime**: `string`

Defined in: main.ts:89739

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

***

### created\_datetime?

> `optional` **created\_datetime**: `string`

Defined in: main.ts:89734

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:89729

domain name

***

### epp\_status\_codes?

> `optional` **epp\_status\_codes**: `string`[]

Defined in: main.ts:89757

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

***

### expiration\_datetime?

> `optional` **expiration\_datetime**: `string`

Defined in: main.ts:89744

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:89754

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

***

### metrics?

> `optional` **metrics**: [`MetricsBundleInfo`](../classes/MetricsBundleInfo.md)

Defined in: main.ts:89771

ranking data relevant to the specified domain

***

### registered?

> `optional` **registered**: `boolean`

Defined in: main.ts:89764

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

***

### registrar?

> `optional` **registrar**: `string`

Defined in: main.ts:89769

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

***

### tld?

> `optional` **tld**: `string`

Defined in: main.ts:89760

top-level domain
top-level domain in the DNS root zone

***

### updated\_datetime?

> `optional` **updated\_datetime**: `string`

Defined in: main.ts:89749

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"
