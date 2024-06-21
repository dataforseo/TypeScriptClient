**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleDomainWhoisOverviewLiveItem

# Interface: IDataforseoLabsGoogleDomainWhoisOverviewLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

backlink data for the returned domain

#### Source

main.ts:89959

***

### changed\_datetime?

> **`optional`** **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Source

main.ts:89925

***

### created\_datetime?

> **`optional`** **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Source

main.ts:89920

***

### domain?

> **`optional`** **domain**: `string`

domain name

#### Source

main.ts:89915

***

### epp\_status\_codes?

> **`optional`** **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Source

main.ts:89943

***

### expiration\_datetime?

> **`optional`** **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Source

main.ts:89930

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Source

main.ts:89940

***

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Source

main.ts:89957

***

### registered?

> **`optional`** **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Source

main.ts:89950

***

### registrar?

> **`optional`** **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Source

main.ts:89955

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:89913

***

### tld?

> **`optional`** **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Source

main.ts:89946

***

### updated\_datetime?

> **`optional`** **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Source

main.ts:89935
