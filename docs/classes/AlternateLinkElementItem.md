[Documentation](../README.md) / [Exports](../modules.md) / AlternateLinkElementItem

# Class: AlternateLinkElementItem

## Hierarchy

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

  ↳ **`AlternateLinkElementItem`**

## Implements

- [`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AlternateLinkElementItem.md#constructor)

### Properties

- [\_discriminator](AlternateLinkElementItem.md#_discriminator)
- [direction](AlternateLinkElementItem.md#direction)
- [dofollow](AlternateLinkElementItem.md#dofollow)
- [domain\_from](AlternateLinkElementItem.md#domain_from)
- [domain\_to](AlternateLinkElementItem.md#domain_to)
- [is\_broken](AlternateLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](AlternateLinkElementItem.md#is_link_relation_conflict)
- [link\_from](AlternateLinkElementItem.md#link_from)
- [link\_to](AlternateLinkElementItem.md#link_to)
- [page\_from](AlternateLinkElementItem.md#page_from)
- [page\_from\_scheme](AlternateLinkElementItem.md#page_from_scheme)
- [page\_to](AlternateLinkElementItem.md#page_to)
- [page\_to\_scheme](AlternateLinkElementItem.md#page_to_scheme)
- [page\_to\_status\_code](AlternateLinkElementItem.md#page_to_status_code)

### Methods

- [init](AlternateLinkElementItem.md#init)
- [toJSON](AlternateLinkElementItem.md#tojson)
- [fromJS](AlternateLinkElementItem.md#fromjs)

## Constructors

### constructor

• **new AlternateLinkElementItem**(`data?`): [`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md) |

#### Returns

[`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[constructor](BaseOnPageLinkItemInfo.md#constructor)

#### Defined in

main.ts:148707

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[_discriminator](BaseOnPageLinkItemInfo.md#_discriminator)

#### Defined in

main.ts:20314

___

### direction

• `Optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[direction](../interfaces/IAlternateLinkElementItem.md#direction)

#### Defined in

main.ts:148694

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[dofollow](../interfaces/IAlternateLinkElementItem.md#dofollow)

#### Defined in

main.ts:148687

___

### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[domain_from](../interfaces/IAlternateLinkElementItem.md#domain_from)

#### Defined in

main.ts:148669

___

### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[domain_to](../interfaces/IAlternateLinkElementItem.md#domain_to)

#### Defined in

main.ts:148672

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[is_broken](../interfaces/IAlternateLinkElementItem.md#is_broken)

#### Defined in

main.ts:148697

___

### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[is_link_relation_conflict](../interfaces/IAlternateLinkElementItem.md#is_link_relation_conflict)

#### Defined in

main.ts:148700

___

### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[link_from](../interfaces/IAlternateLinkElementItem.md#link_from)

#### Defined in

main.ts:148681

___

### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[link_to](../interfaces/IAlternateLinkElementItem.md#link_to)

#### Defined in

main.ts:148684

___

### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[page_from](../interfaces/IAlternateLinkElementItem.md#page_from)

#### Defined in

main.ts:148675

___

### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[page_from_scheme](../interfaces/IAlternateLinkElementItem.md#page_from_scheme)

#### Defined in

main.ts:148689

___

### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[page_to](../interfaces/IAlternateLinkElementItem.md#page_to)

#### Defined in

main.ts:148678

___

### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[page_to_scheme](../interfaces/IAlternateLinkElementItem.md#page_to_scheme)

#### Defined in

main.ts:148691

___

### page\_to\_status\_code

• `Optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[IAlternateLinkElementItem](../interfaces/IAlternateLinkElementItem.md).[page_to_status_code](../interfaces/IAlternateLinkElementItem.md#page_to_status_code)

#### Defined in

main.ts:148703

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[init](BaseOnPageLinkItemInfo.md#init)

#### Defined in

main.ts:148712

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[toJSON](BaseOnPageLinkItemInfo.md#tojson)

#### Defined in

main.ts:148742

___

### fromJS

▸ **fromJS**(`data`): [`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[fromJS](BaseOnPageLinkItemInfo.md#fromjs)

#### Defined in

main.ts:148735
