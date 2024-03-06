[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AvgBacklinksInfo

# Class: AvgBacklinksInfo

## Implements

- [`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AvgBacklinksInfo.md#constructor)

### Properties

- [backlinks](AvgBacklinksInfo.md#backlinks)
- [dofollow](AvgBacklinksInfo.md#dofollow)
- [last\_updated\_time](AvgBacklinksInfo.md#last_updated_time)
- [main\_domain\_rank](AvgBacklinksInfo.md#main_domain_rank)
- [rank](AvgBacklinksInfo.md#rank)
- [referring\_domains](AvgBacklinksInfo.md#referring_domains)
- [referring\_main\_domains](AvgBacklinksInfo.md#referring_main_domains)
- [referring\_pages](AvgBacklinksInfo.md#referring_pages)
- [se\_type](AvgBacklinksInfo.md#se_type)

### Methods

- [init](AvgBacklinksInfo.md#init)
- [toJSON](AvgBacklinksInfo.md#tojson)
- [fromJS](AvgBacklinksInfo.md#fromjs)

## Constructors

### constructor

• **new AvgBacklinksInfo**(`data?`): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAvgBacklinksInfo`](../interfaces/IAvgBacklinksInfo.md) |

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Defined in

[main.ts:79461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79461)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

average number of backlinks

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[backlinks](../interfaces/IAvgBacklinksInfo.md#backlinks)

#### Defined in

[main.ts:79438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79438)

___


### dofollow

• `Optional` **dofollow**: `number`

average number of dofollow links

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[dofollow](../interfaces/IAvgBacklinksInfo.md#dofollow)

#### Defined in

[main.ts:79440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79440)

___


### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when backlink data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[last_updated_time](../interfaces/IAvgBacklinksInfo.md#last_updated_time)

#### Defined in

[main.ts:79457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79457)

___


### main\_domain\_rank

• `Optional` **main\_domain\_rank**: `number`

average main domain rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[main_domain_rank](../interfaces/IAvgBacklinksInfo.md#main_domain_rank)

#### Defined in

[main.ts:79452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79452)

___


### rank

• `Optional` **rank**: `number`

average rank
learn more about the metric and its calculation formula in this help center article

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[rank](../interfaces/IAvgBacklinksInfo.md#rank)

#### Defined in

[main.ts:79449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79449)

___


### referring\_domains

• `Optional` **referring\_domains**: `number`

average number of referring domains

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[referring_domains](../interfaces/IAvgBacklinksInfo.md#referring_domains)

#### Defined in

[main.ts:79444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79444)

___


### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

average number of referring main domains

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[referring_main_domains](../interfaces/IAvgBacklinksInfo.md#referring_main_domains)

#### Defined in

[main.ts:79446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79446)

___


### referring\_pages

• `Optional` **referring\_pages**: `number`

average number of referring pages

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[referring_pages](../interfaces/IAvgBacklinksInfo.md#referring_pages)

#### Defined in

[main.ts:79442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79442)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IAvgBacklinksInfo](../interfaces/IAvgBacklinksInfo.md).[se_type](../interfaces/IAvgBacklinksInfo.md#se_type)

#### Defined in

[main.ts:79436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79436)

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

[main.ts:79470](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79470)

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

[main.ts:79495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79495)

___


### fromJS

▸ **fromJS**(`data`): [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AvgBacklinksInfo`](AvgBacklinksInfo.md)

#### Defined in

[main.ts:79488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79488)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")