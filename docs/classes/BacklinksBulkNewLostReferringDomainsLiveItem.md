**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostReferringDomainsLiveItem

# Class: BacklinksBulkNewLostReferringDomainsLiveItem

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostReferringDomainsLiveItem(data)

> **new BacklinksBulkNewLostReferringDomainsLiveItem**(`data`?): [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Source

main.ts:146784

## Properties

### lost\_referring\_domains?

> **`optional`** **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_domains)

#### Source

main.ts:146776

***

### lost\_referring\_main\_domains?

> **`optional`** **lost\_referring\_main\_domains**: `number`

number of lost referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_main_domains)

#### Source

main.ts:146780

***

### new\_referring\_domains?

> **`optional`** **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_domains)

#### Source

main.ts:146773

***

### new\_referring\_main\_domains?

> **`optional`** **new\_referring\_main\_domains**: `number`

number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_main_domains)

#### Source

main.ts:146778

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`target`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#target)

#### Source

main.ts:146770

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:146793

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:146814

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Source

main.ts:146807
