[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseOnPageLinkItemInfo

# Interface: IBaseOnPageLinkItemInfo

## Extended by

- [`IAnchorLinkElementItem`](IAnchorLinkElementItem.md)
- [`IImageLinkElementItem`](IImageLinkElementItem.md)
- [`IAlternateLinkElementItem`](IAlternateLinkElementItem.md)
- [`IRedirectLinkElementItem`](IRedirectLinkElementItem.md)

## Properties

### direction?

> `optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Defined in

main.ts:21783

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Defined in

main.ts:21776

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Defined in

main.ts:21758

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Defined in

main.ts:21761

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Defined in

main.ts:21786

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Defined in

main.ts:21789

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Defined in

main.ts:21770

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Defined in

main.ts:21773

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Defined in

main.ts:21764

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Defined in

main.ts:21778

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Defined in

main.ts:21767

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Defined in

main.ts:21780

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:21755
