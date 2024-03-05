[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesNewLostSummaryLiveItem

# Class: BacklinksTimeseriesNewLostSummaryLiveItem

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesNewLostSummaryLiveItem.md#constructor)

### Properties

- [date](BacklinksTimeseriesNewLostSummaryLiveItem.md#date)
- [lost\_backlinks](BacklinksTimeseriesNewLostSummaryLiveItem.md#lost_backlinks)
- [lost\_referring\_domains](BacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_domains)
- [lost\_referring\_main\_domains](BacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_main_domains)
- [new\_backlinks](BacklinksTimeseriesNewLostSummaryLiveItem.md#new_backlinks)
- [new\_referring\_domains](BacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_domains)
- [new\_referring\_main\_domains](BacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_main_domains)
- [type](BacklinksTimeseriesNewLostSummaryLiveItem.md#type)

### Methods

- [init](BacklinksTimeseriesNewLostSummaryLiveItem.md#init)
- [toJSON](BacklinksTimeseriesNewLostSummaryLiveItem.md#tojson)
- [fromJS](BacklinksTimeseriesNewLostSummaryLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesNewLostSummaryLiveItem**(`data?`): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesNewLostSummaryLiveItem`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md) |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Defined in

[main.ts:139006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139006)

## Properties

### date

• `Optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[date](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#date)

#### Defined in

[main.ts:138984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138984)

___

### lost\_backlinks

• `Optional` **lost\_backlinks**: `number`

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[lost_backlinks](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_backlinks)

#### Defined in

[main.ts:138990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138990)

___

### lost\_referring\_domains

• `Optional` **lost\_referring\_domains**: `number`

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[lost_referring_domains](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_domains)

#### Defined in

[main.ts:138996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138996)

___

### lost\_referring\_main\_domains

• `Optional` **lost\_referring\_main\_domains**: `number`

number of lost referring main domains
number of lost referring main domains of the target

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[lost_referring_main_domains](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#lost_referring_main_domains)

#### Defined in

[main.ts:139002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139002)

___

### new\_backlinks

• `Optional` **new\_backlinks**: `number`

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[new_backlinks](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_backlinks)

#### Defined in

[main.ts:138987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138987)

___

### new\_referring\_domains

• `Optional` **new\_referring\_domains**: `number`

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[new_referring_domains](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_domains)

#### Defined in

[main.ts:138993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138993)

___

### new\_referring\_main\_domains

• `Optional` **new\_referring\_main\_domains**: `number`

number of new referring main domains
number of new referring main domains pointing to the target

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[new_referring_main_domains](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#new_referring_main_domains)

#### Defined in

[main.ts:138999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138999)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveItem](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md).[type](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveItem.md#type)

#### Defined in

[main.ts:138979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138979)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:139015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139015)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:139039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139039)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveItem`](BacklinksTimeseriesNewLostSummaryLiveItem.md)

#### Defined in

[main.ts:139032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139032)
