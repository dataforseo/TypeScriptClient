[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveItem

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveItem()

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveItem**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Defined in

main.ts:91801

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlink data for the returned domain

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`backlinks_info`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#backlinks_info)

#### Defined in

main.ts:91797

***

### changed\_datetime?

> `optional` **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`changed_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#changed_datetime)

#### Defined in

main.ts:91763

***

### created\_datetime?

> `optional` **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`created_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#created_datetime)

#### Defined in

main.ts:91758

***

### domain?

> `optional` **domain**: `string`

domain name

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`domain`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#domain)

#### Defined in

main.ts:91753

***

### epp\_status\_codes?

> `optional` **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`epp_status_codes`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#epp_status_codes)

#### Defined in

main.ts:91781

***

### expiration\_datetime?

> `optional` **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`expiration_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#expiration_datetime)

#### Defined in

main.ts:91768

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`first_seen`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#first_seen)

#### Defined in

main.ts:91778

***

### metrics?

> `optional` **metrics**: `object`

ranking data relevant to the specified domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#metrics)

#### Defined in

main.ts:91795

***

### registered?

> `optional` **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`registered`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registered)

#### Defined in

main.ts:91788

***

### registrar?

> `optional` **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`registrar`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registrar)

#### Defined in

main.ts:91793

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#se_type)

#### Defined in

main.ts:91751

***

### tld?

> `optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`tld`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#tld)

#### Defined in

main.ts:91784

***

### updated\_datetime?

> `optional` **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`updated_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#updated_datetime)

#### Defined in

main.ts:91773

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:91810

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:91849

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Defined in

main.ts:91842
