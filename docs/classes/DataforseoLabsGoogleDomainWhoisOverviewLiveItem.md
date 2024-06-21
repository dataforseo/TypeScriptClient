**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveItem

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveItem

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainWhoisOverviewLiveItem(data)

> **new DataforseoLabsGoogleDomainWhoisOverviewLiveItem**(`data`?): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Source

main.ts:89830

## Properties

### backlinks\_info?

> **`optional`** **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlink data for the returned domain

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`backlinks_info`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#backlinks_info)

#### Source

main.ts:89826

***

### changed\_datetime?

> **`optional`** **changed\_datetime**: `string`

date and time when the domain entry was changed
date and time (in the ISO 8601 format) when the domain entry was last modified
example:
"2021-01-14 08:36:28 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`changed_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#changed_datetime)

#### Source

main.ts:89792

***

### created\_datetime?

> **`optional`** **created\_datetime**: `string`

date and time of registration
date and time (in the ISO 8601 format) when the domain was first registered
example:
"1997-03-29 03:00:00 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`created_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#created_datetime)

#### Source

main.ts:89787

***

### domain?

> **`optional`** **domain**: `string`

domain name

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`domain`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#domain)

#### Source

main.ts:89782

***

### epp\_status\_codes?

> **`optional`** **epp\_status\_codes**: `string`[]

extensive provisioning protocol status codes
the status of a domain name registration as defined by ICANN

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`epp_status_codes`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#epp_status_codes)

#### Source

main.ts:89810

***

### expiration\_datetime?

> **`optional`** **expiration\_datetime**: `string`

date and time when the domain will expire
date and time (in the ISO 8601 format) when the domain is due to expire
example:
"2022-11-26 17:21:23 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`expiration_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#expiration_datetime)

#### Source

main.ts:89797

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the domain for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
"2019-11-15 12:57:46 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`first_seen`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#first_seen)

#### Source

main.ts:89807

***

### metrics?

> **`optional`** **metrics**: `Object`

ranking data relevant to the specified domain

#### Index signature

 \[`key`: `string`\]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#metrics)

#### Source

main.ts:89824

***

### registered?

> **`optional`** **registered**: `boolean`

domain registration status
if false, the domain name registration has expired
Note: expired domains will remain in the database for only a short period of time

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`registered`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registered)

#### Source

main.ts:89817

***

### registrar?

> **`optional`** **registrar**: `string`

domain registrar
if null, the domain registrar is unknown
example:
NameCheap, Inc.

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`registrar`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#registrar)

#### Source

main.ts:89822

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#se_type)

#### Source

main.ts:89780

***

### tld?

> **`optional`** **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`tld`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#tld)

#### Source

main.ts:89813

***

### updated\_datetime?

> **`optional`** **updated\_datetime**: `string`

date and time when the domain was updated
date and time (in the ISO 8601 format) when the domain was last updated
example:
"2021-01-29 13:59:38 +00:00"

#### Implementation of

[`IDataforseoLabsGoogleDomainWhoisOverviewLiveItem`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md).[`updated_datetime`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveItem.md#updated_datetime)

#### Source

main.ts:89802

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:89839

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:89878

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveItem`](DataforseoLabsGoogleDomainWhoisOverviewLiveItem.md)

#### Source

main.ts:89871
