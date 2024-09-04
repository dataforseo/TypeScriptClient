[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkNewLostReferringDomainsLiveItem

# Class: BacklinksBulkNewLostReferringDomainsLiveItem

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostReferringDomainsLiveItem()

> **new BacklinksBulkNewLostReferringDomainsLiveItem**(`data`?): [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Defined in

main.ts:153998

## Properties

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_domains)

#### Defined in

main.ts:153990

***

### lost\_referring\_main\_domains?

> `optional` **lost\_referring\_main\_domains**: `number`

number of lost referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_main_domains)

#### Defined in

main.ts:153994

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_domains)

#### Defined in

main.ts:153987

***

### new\_referring\_main\_domains?

> `optional` **new\_referring\_main\_domains**: `number`

number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_main_domains)

#### Defined in

main.ts:153992

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`target`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#target)

#### Defined in

main.ts:153984

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:154007

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:154028

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Defined in

main.ts:154021
