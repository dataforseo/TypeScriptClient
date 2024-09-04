[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAnchorLinkElementItem

# Interface: IAnchorLinkElementItem

## Extends

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### direction?

> `optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`direction`](IBaseOnPageLinkItemInfo.md#direction)

#### Defined in

main.ts:21783

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`dofollow`](IBaseOnPageLinkItemInfo.md#dofollow)

#### Defined in

main.ts:21776

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`domain_from`](IBaseOnPageLinkItemInfo.md#domain_from)

#### Defined in

main.ts:21758

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`domain_to`](IBaseOnPageLinkItemInfo.md#domain_to)

#### Defined in

main.ts:21761

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`is_broken`](IBaseOnPageLinkItemInfo.md#is_broken)

#### Defined in

main.ts:21786

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](IBaseOnPageLinkItemInfo.md#is_link_relation_conflict)

#### Defined in

main.ts:21789

***

### link\_attribute?

> `optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Defined in

main.ts:157792

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`link_from`](IBaseOnPageLinkItemInfo.md#link_from)

#### Defined in

main.ts:21770

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`link_to`](IBaseOnPageLinkItemInfo.md#link_to)

#### Defined in

main.ts:21773

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_from`](IBaseOnPageLinkItemInfo.md#page_from)

#### Defined in

main.ts:21764

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_from_scheme`](IBaseOnPageLinkItemInfo.md#page_from_scheme)

#### Defined in

main.ts:21778

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_to`](IBaseOnPageLinkItemInfo.md#page_to)

#### Defined in

main.ts:21767

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`page_to_scheme`](IBaseOnPageLinkItemInfo.md#page_to_scheme)

#### Defined in

main.ts:21780

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Defined in

main.ts:157797

***

### text?

> `optional` **text**: `string`

anchor text

#### Defined in

main.ts:157794

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md).[`type`](IBaseOnPageLinkItemInfo.md#type)

#### Defined in

main.ts:21755
