[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesSummaryLiveItem

# Class: BacklinksTimeseriesSummaryLiveItem

## Implements

- [`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesSummaryLiveItem.md#constructor)

### Properties

- [backlinks](BacklinksTimeseriesSummaryLiveItem.md#backlinks)
- [backlinks\_nofollow](BacklinksTimeseriesSummaryLiveItem.md#backlinks_nofollow)
- [date](BacklinksTimeseriesSummaryLiveItem.md#date)
- [rank](BacklinksTimeseriesSummaryLiveItem.md#rank)
- [referring\_domains](BacklinksTimeseriesSummaryLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksTimeseriesSummaryLiveItem.md#referring_domains_nofollow)
- [referring\_ips](BacklinksTimeseriesSummaryLiveItem.md#referring_ips)
- [referring\_main\_domains](BacklinksTimeseriesSummaryLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksTimeseriesSummaryLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](BacklinksTimeseriesSummaryLiveItem.md#referring_pages)
- [referring\_subnets](BacklinksTimeseriesSummaryLiveItem.md#referring_subnets)
- [type](BacklinksTimeseriesSummaryLiveItem.md#type)

### Methods

- [init](BacklinksTimeseriesSummaryLiveItem.md#init)
- [toJSON](BacklinksTimeseriesSummaryLiveItem.md#tojson)
- [fromJS](BacklinksTimeseriesSummaryLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesSummaryLiveItem**(`data?`): [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesSummaryLiveItem`](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md) |

#### Returns

[`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Defined in

[main.ts:138529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138529)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

number of backlinks for the given date

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[backlinks](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks)

#### Defined in

[main.ts:138507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138507)

___


### backlinks\_nofollow

• `Optional` **backlinks\_nofollow**: `number`

number of nofollow backlinks for the given date

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[backlinks_nofollow](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#backlinks_nofollow)

#### Defined in

[main.ts:138509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138509)

___


### date

• `Optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[date](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#date)

#### Defined in

[main.ts:138502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138502)

___


### rank

• `Optional` **rank**: `number`

target rank for the given date
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[rank](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#rank)

#### Defined in

[main.ts:138505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138505)

___


### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[referring_domains](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains)

#### Defined in

[main.ts:138514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138514)

___


### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[referring_domains_nofollow](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_domains_nofollow)

#### Defined in

[main.ts:138516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138516)

___


### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses for the given date
number of IP addresses pointing to this page

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[referring_ips](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_ips)

#### Defined in

[main.ts:138523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138523)

___


### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains for the given date

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[referring_main_domains](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains)

#### Defined in

[main.ts:138518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138518)

___


### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target for the given date

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[referring_main_domains_nofollow](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_main_domains_nofollow)

#### Defined in

[main.ts:138520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138520)

___


### referring\_pages

• `Optional` **referring\_pages**: `number`

number of pages pointing to target for the given date

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[referring_pages](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_pages)

#### Defined in

[main.ts:138511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138511)

___


### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks for the given date

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[referring_subnets](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#referring_subnets)

#### Defined in

[main.ts:138525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138525)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksTimeseriesSummaryLiveItem](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md).[type](../interfaces/IBacklinksTimeseriesSummaryLiveItem.md#type)

#### Defined in

[main.ts:138497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138497)

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

[main.ts:138538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138538)

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

[main.ts:138566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138566)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesSummaryLiveItem`](BacklinksTimeseriesSummaryLiveItem.md)

#### Defined in

[main.ts:138559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138559)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")