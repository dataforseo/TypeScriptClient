[Documentation](../README.md) / [Exports](../modules.md) / AnchorLinkElementItem

# Class: AnchorLinkElementItem

## Hierarchy

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

  ↳ **`AnchorLinkElementItem`**

## Implements

- [`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AnchorLinkElementItem.md#constructor)

### Properties

- [\_discriminator](AnchorLinkElementItem.md#_discriminator)
- [direction](AnchorLinkElementItem.md#direction)
- [dofollow](AnchorLinkElementItem.md#dofollow)
- [domain\_from](AnchorLinkElementItem.md#domain_from)
- [domain\_to](AnchorLinkElementItem.md#domain_to)
- [is\_broken](AnchorLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](AnchorLinkElementItem.md#is_link_relation_conflict)
- [link\_attribute](AnchorLinkElementItem.md#link_attribute)
- [link\_from](AnchorLinkElementItem.md#link_from)
- [link\_to](AnchorLinkElementItem.md#link_to)
- [page\_from](AnchorLinkElementItem.md#page_from)
- [page\_from\_scheme](AnchorLinkElementItem.md#page_from_scheme)
- [page\_to](AnchorLinkElementItem.md#page_to)
- [page\_to\_scheme](AnchorLinkElementItem.md#page_to_scheme)
- [page\_to\_status\_code](AnchorLinkElementItem.md#page_to_status_code)
- [text](AnchorLinkElementItem.md#text)

### Methods

- [init](AnchorLinkElementItem.md#init)
- [toJSON](AnchorLinkElementItem.md#tojson)
- [fromJS](AnchorLinkElementItem.md#fromjs)

## Constructors

### constructor

• **new AnchorLinkElementItem**(`data?`): [`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md) |

#### Returns

[`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[constructor](BaseOnPageLinkItemInfo.md#constructor)

#### Defined in

main.ts:153510

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[_discriminator](BaseOnPageLinkItemInfo.md#_discriminator)

#### Defined in

main.ts:20770

___

### direction

• `Optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[direction](../interfaces/IAnchorLinkElementItem.md#direction)

#### Defined in

main.ts:153495

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[dofollow](../interfaces/IAnchorLinkElementItem.md#dofollow)

#### Defined in

main.ts:153488

___

### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[domain_from](../interfaces/IAnchorLinkElementItem.md#domain_from)

#### Defined in

main.ts:153465

___

### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[domain_to](../interfaces/IAnchorLinkElementItem.md#domain_to)

#### Defined in

main.ts:153468

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[is_broken](../interfaces/IAnchorLinkElementItem.md#is_broken)

#### Defined in

main.ts:153498

___

### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[is_link_relation_conflict](../interfaces/IAnchorLinkElementItem.md#is_link_relation_conflict)

#### Defined in

main.ts:153503

___

### link\_attribute

• `Optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[link_attribute](../interfaces/IAnchorLinkElementItem.md#link_attribute)

#### Defined in

main.ts:153485

___

### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[link_from](../interfaces/IAnchorLinkElementItem.md#link_from)

#### Defined in

main.ts:153477

___

### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[link_to](../interfaces/IAnchorLinkElementItem.md#link_to)

#### Defined in

main.ts:153480

___

### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[page_from](../interfaces/IAnchorLinkElementItem.md#page_from)

#### Defined in

main.ts:153471

___

### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[page_from_scheme](../interfaces/IAnchorLinkElementItem.md#page_from_scheme)

#### Defined in

main.ts:153490

___

### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[page_to](../interfaces/IAnchorLinkElementItem.md#page_to)

#### Defined in

main.ts:153474

___

### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[page_to_scheme](../interfaces/IAnchorLinkElementItem.md#page_to_scheme)

#### Defined in

main.ts:153492

___

### page\_to\_status\_code

• `Optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[page_to_status_code](../interfaces/IAnchorLinkElementItem.md#page_to_status_code)

#### Defined in

main.ts:153506

___

### text

• `Optional` **text**: `string`

anchor text

#### Implementation of

[IAnchorLinkElementItem](../interfaces/IAnchorLinkElementItem.md).[text](../interfaces/IAnchorLinkElementItem.md#text)

#### Defined in

main.ts:153500

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

main.ts:153515

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

main.ts:153551

___

### fromJS

▸ **fromJS**(`data`): [`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[fromJS](BaseOnPageLinkItemInfo.md#fromjs)

#### Defined in

main.ts:153544
