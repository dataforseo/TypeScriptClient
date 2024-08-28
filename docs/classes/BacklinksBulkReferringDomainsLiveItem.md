[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksBulkReferringDomainsLiveItem

# Class: BacklinksBulkReferringDomainsLiveItem

## Implements

- [`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkReferringDomainsLiveItem()

> **new BacklinksBulkReferringDomainsLiveItem**(`data`?): [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md)

#### Returns

[`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Defined in

main.ts:153238

## Properties

### referring\_domains?

> `optional` **referring\_domains**: `number`

number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_domains`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_domains)

#### Defined in

main.ts:153227

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:153229

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

number of referring main domains pointing to the target
the number of primary (root) domains referring to your target

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains)

#### Defined in

main.ts:153232

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:153234

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`target`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#target)

#### Defined in

main.ts:153224

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:153247

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:153268

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

#### Defined in

main.ts:153261
