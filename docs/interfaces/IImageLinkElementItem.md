[Documentation](../README.md) / [Exports](../modules.md) / IImageLinkElementItem

# Interface: IImageLinkElementItem

## Hierarchy

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

  ↳ **`IImageLinkElementItem`**

## Implemented by

- [`ImageLinkElementItem`](../classes/ImageLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [direction](IImageLinkElementItem.md#direction)
- [dofollow](IImageLinkElementItem.md#dofollow)
- [domain\_from](IImageLinkElementItem.md#domain_from)
- [domain\_to](IImageLinkElementItem.md#domain_to)
- [image\_alt](IImageLinkElementItem.md#image_alt)
- [image\_src](IImageLinkElementItem.md#image_src)
- [is\_broken](IImageLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](IImageLinkElementItem.md#is_link_relation_conflict)
- [link\_attribute](IImageLinkElementItem.md#link_attribute)
- [link\_from](IImageLinkElementItem.md#link_from)
- [link\_to](IImageLinkElementItem.md#link_to)
- [page\_from](IImageLinkElementItem.md#page_from)
- [page\_from\_scheme](IImageLinkElementItem.md#page_from_scheme)
- [page\_to](IImageLinkElementItem.md#page_to)
- [page\_to\_scheme](IImageLinkElementItem.md#page_to_scheme)
- [page\_to\_status\_code](IImageLinkElementItem.md#page_to_status_code)
- [text](IImageLinkElementItem.md#text)

## Properties

### direction

• `Optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Defined in

main.ts:148646

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Defined in

main.ts:148639

___

### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Defined in

main.ts:148616

___

### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Defined in

main.ts:148619

___

### image\_alt

• `Optional` **image\_alt**: `string`

alternative text for the image

#### Defined in

main.ts:148653

___

### image\_src

• `Optional` **image\_src**: `string`

url of the image

#### Defined in

main.ts:148655

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Defined in

main.ts:148649

___

### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Defined in

main.ts:148658

___

### link\_attribute

• `Optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Defined in

main.ts:148636

___

### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Defined in

main.ts:148628

___

### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Defined in

main.ts:148631

___

### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Defined in

main.ts:148622

___

### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Defined in

main.ts:148641

___

### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Defined in

main.ts:148625

___

### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Defined in

main.ts:148643

___

### page\_to\_status\_code

• `Optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Defined in

main.ts:148661

___

### text

• `Optional` **text**: `string`

anchor text

#### Defined in

main.ts:148651
