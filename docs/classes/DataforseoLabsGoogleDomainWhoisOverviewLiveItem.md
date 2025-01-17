[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveItem

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveItem

Defined in: main.ts:100240

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveItem()

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveItem**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

Defined in: main.ts:100292

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

Defined in: main.ts:100288

backlink data for the returned domain

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`backlinks_info`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#backlinks_info)

***

### changed\_datetime?

> `optional` **changed\_datetime**: `string`

Defined in: main.ts:100254

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`changed_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#changed_datetime)

***

### created\_datetime?

> `optional` **created\_datetime**: `string`

Defined in: main.ts:100249

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`created_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#created_datetime)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:100244

domain name

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`domain`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#domain)

***

### epp\_status\_codes?

> `optional` **epp\_status\_codes**: `string`[]

Defined in: main.ts:100272

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`epp_status_codes`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#epp_status_codes)

***

### expiration\_datetime?

> `optional` **expiration\_datetime**: `string`

Defined in: main.ts:100259

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`expiration_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#expiration_datetime)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:100269

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`first_seen`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#first_seen)

***

### metrics?

> `optional` **metrics**: `object`

Defined in: main.ts:100286

ranking data relevant to the specified domain

#### Index Signature

\[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#metrics)

***

### registered?

> `optional` **registered**: `boolean`

Defined in: main.ts:100279

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`registered`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registered)

***

### registrar?

> `optional` **registrar**: `string`

Defined in: main.ts:100284

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`registrar`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registrar)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:100242

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#se_type)

***

### tld?

> `optional` **tld**: `string`

Defined in: main.ts:100275

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`tld`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#tld)

***

### updated\_datetime?

> `optional` **updated\_datetime**: `string`

Defined in: main.ts:100264

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`updated_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#updated_datetime)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:100301

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:100340

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

Defined in: main.ts:100333

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)
