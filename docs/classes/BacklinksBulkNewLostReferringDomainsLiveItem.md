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

main.ts:147907

## Properties

### lost\_referring\_domains?

> **`optional`** **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_domains)

#### Source

main.ts:147899

***

### lost\_referring\_main\_domains?

> **`optional`** **lost\_referring\_main\_domains**: `number`

number of lost referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_main_domains)

#### Source

main.ts:147903

***

### new\_referring\_domains?

> **`optional`** **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_domains)

#### Source

main.ts:147896

***

### new\_referring\_main\_domains?

> **`optional`** **new\_referring\_main\_domains**: `number`

number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_main_domains)

#### Source

main.ts:147901

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`target`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#target)

#### Source

main.ts:147893

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:147916

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:147937

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Source

main.ts:147930
