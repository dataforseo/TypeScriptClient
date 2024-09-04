[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleDomainWhoisOverviewLiveItem

# Interface: IDataforseoLabsGoogleDomainWhoisOverviewLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlink data for the returned domain

#### Defined in

main.ts:91930

***

### changed\_datetime?

> `optional` **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Defined in

main.ts:91896

***

### created\_datetime?

> `optional` **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Defined in

main.ts:91891

***

### domain?

> `optional` **domain**: `string`

domain name

#### Defined in

main.ts:91886

***

### epp\_status\_codes?

> `optional` **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Defined in

main.ts:91914

***

### expiration\_datetime?

> `optional` **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Defined in

main.ts:91901

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Defined in

main.ts:91911

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](../classes/DataforseoLabsMetricsInfo.md)

#### Defined in

main.ts:91928

***

### registered?

> `optional` **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Defined in

main.ts:91921

***

### registrar?

> `optional` **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Defined in

main.ts:91926

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:91884

***

### tld?

> `optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Defined in

main.ts:91917

***

### updated\_datetime?

> `optional` **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Defined in

main.ts:91906
