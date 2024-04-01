[Documentation](../README.md) / [Exports](../modules.md) / OnPageNonIndexableItem

# Class: OnPageNonIndexableItem

## Implements

- [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageNonIndexableItem.md#constructor)

### Properties

- [reason](OnPageNonIndexableItem.md#reason)
- [url](OnPageNonIndexableItem.md#url)

### Methods

- [init](OnPageNonIndexableItem.md#init)
- [toJSON](OnPageNonIndexableItem.md#tojson)
- [fromJS](OnPageNonIndexableItem.md#fromjs)

## Constructors

### constructor

• **new OnPageNonIndexableItem**(`data?`): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md) |

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Defined in

main.ts:154813

## Properties

### reason

• `Optional` **reason**: `string`

the reason why the page is non-indexable
can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects

#### Implementation of

[IOnPageNonIndexableItem](../interfaces/IOnPageNonIndexableItem.md).[reason](../interfaces/IOnPageNonIndexableItem.md#reason)

#### Defined in

main.ts:154807

___

### url

• `Optional` **url**: `string`

url of the non-indexable page

#### Implementation of

[IOnPageNonIndexableItem](../interfaces/IOnPageNonIndexableItem.md).[url](../interfaces/IOnPageNonIndexableItem.md#url)

#### Defined in

main.ts:154809

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

main.ts:154822

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

main.ts:154840

___

### fromJS

▸ **fromJS**(`data`): [`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageNonIndexableItem`](OnPageNonIndexableItem.md)

#### Defined in

main.ts:154833
