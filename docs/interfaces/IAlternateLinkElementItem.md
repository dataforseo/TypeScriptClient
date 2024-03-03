[Documentation](../README.md) / [Exports](../modules.md) / IAlternateLinkElementItem

# Interface: IAlternateLinkElementItem

## Hierarchy

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

  ↳ **`IAlternateLinkElementItem`**

## Implemented by

- [`AlternateLinkElementItem`](../classes/AlternateLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [direction](IAlternateLinkElementItem.md#direction)
- [dofollow](IAlternateLinkElementItem.md#dofollow)
- [domain\_from](IAlternateLinkElementItem.md#domain_from)
- [domain\_to](IAlternateLinkElementItem.md#domain_to)
- [is\_broken](IAlternateLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](IAlternateLinkElementItem.md#is_link_relation_conflict)
- [link\_from](IAlternateLinkElementItem.md#link_from)
- [link\_to](IAlternateLinkElementItem.md#link_to)
- [page\_from](IAlternateLinkElementItem.md#page_from)
- [page\_from\_scheme](IAlternateLinkElementItem.md#page_from_scheme)
- [page\_to](IAlternateLinkElementItem.md#page_to)
- [page\_to\_scheme](IAlternateLinkElementItem.md#page_to_scheme)
- [page\_to\_status\_code](IAlternateLinkElementItem.md#page_to_status_code)

## Properties

### direction

• `Optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Defined in

main.ts:148794

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Defined in

main.ts:148787

___

### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Defined in

main.ts:148769

___

### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Defined in

main.ts:148772

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Defined in

main.ts:148797

___

### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Defined in

main.ts:148800

___

### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Defined in

main.ts:148781

___

### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Defined in

main.ts:148784

___

### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Defined in

main.ts:148775

___

### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Defined in

main.ts:148789

___

### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Defined in

main.ts:148778

___

### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Defined in

main.ts:148791

___

### page\_to\_status\_code

• `Optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Defined in

main.ts:148803
