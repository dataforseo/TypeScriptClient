[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkReferringDomainsLiveItem

# Class: BacklinksBulkReferringDomainsLiveItem

Defined in: main.ts:161558

## Implements

- [`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkReferringDomainsLiveItem()

> **new BacklinksBulkReferringDomainsLiveItem**(`data`?): [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

Defined in: main.ts:161574

#### Parameters

##### data?

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md)

#### Returns

[`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

## Properties

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:161563

number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_domains`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:161565

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_domains_nofollow)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:161568

number of referring main domains pointing to the target
the number of primary (root) domains referring to your target

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:161570

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains_nofollow)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:161560

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveItem`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md).[`target`](../interfaces/IBacklinksBulkReferringDomainsLiveItem.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:161583

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:161604

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)

Defined in: main.ts:161597

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)
