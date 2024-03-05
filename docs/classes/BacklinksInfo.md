[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksInfo

# Class: BacklinksInfo

## Implements

- [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksInfo.md#constructor)

### Properties

- [backlinks](BacklinksInfo.md#backlinks)
- [dofollow](BacklinksInfo.md#dofollow)
- [referring\_domains](BacklinksInfo.md#referring_domains)
- [referring\_main\_domains](BacklinksInfo.md#referring_main_domains)
- [referring\_pages](BacklinksInfo.md#referring_pages)
- [time\_update](BacklinksInfo.md#time_update)

### Methods

- [init](BacklinksInfo.md#init)
- [toJSON](BacklinksInfo.md#tojson)
- [fromJS](BacklinksInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksInfo**(`data?`): [`BacklinksInfo`](BacklinksInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md) |

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)

#### Defined in

[main.ts:76004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76004)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Implementation of

[IBacklinksInfo](../interfaces/IBacklinksInfo.md).[backlinks](../interfaces/IBacklinksInfo.md#backlinks)

#### Defined in

[main.ts:75995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75995)

___

### dofollow

• `Optional` **dofollow**: `number`

number of dofollow links

#### Implementation of

[IBacklinksInfo](../interfaces/IBacklinksInfo.md).[dofollow](../interfaces/IBacklinksInfo.md#dofollow)

#### Defined in

[main.ts:75992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75992)

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains

#### Implementation of

[IBacklinksInfo](../interfaces/IBacklinksInfo.md).[referring_domains](../interfaces/IBacklinksInfo.md#referring_domains)

#### Defined in

[main.ts:75986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75986)

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[IBacklinksInfo](../interfaces/IBacklinksInfo.md).[referring_main_domains](../interfaces/IBacklinksInfo.md#referring_main_domains)

#### Defined in

[main.ts:75988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75988)

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

number of referring pages

#### Implementation of

[IBacklinksInfo](../interfaces/IBacklinksInfo.md).[referring_pages](../interfaces/IBacklinksInfo.md#referring_pages)

#### Defined in

[main.ts:75990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75990)

___

### time\_update

• `Optional` **time\_update**: `string`

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksInfo](../interfaces/IBacklinksInfo.md).[time_update](../interfaces/IBacklinksInfo.md#time_update)

#### Defined in

[main.ts:76000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76000)

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

[main.ts:76013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76013)

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

[main.ts:76035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76035)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksInfo`](BacklinksInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)

#### Defined in

[main.ts:76028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76028)
