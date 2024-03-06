[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAnchorLinkElementItem

# Interface: IAnchorLinkElementItem

## Hierarchy

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)
  
  ↳ **`IAnchorLinkElementItem`**

## Implemented by

- [`AnchorLinkElementItem`](../classes/AnchorLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [direction](IAnchorLinkElementItem.md#direction)
- [dofollow](IAnchorLinkElementItem.md#dofollow)
- [domain\_from](IAnchorLinkElementItem.md#domain_from)
- [domain\_to](IAnchorLinkElementItem.md#domain_to)
- [is\_broken](IAnchorLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](IAnchorLinkElementItem.md#is_link_relation_conflict)
- [link\_attribute](IAnchorLinkElementItem.md#link_attribute)
- [link\_from](IAnchorLinkElementItem.md#link_from)
- [link\_to](IAnchorLinkElementItem.md#link_to)
- [page\_from](IAnchorLinkElementItem.md#page_from)
- [page\_from\_scheme](IAnchorLinkElementItem.md#page_from_scheme)
- [page\_to](IAnchorLinkElementItem.md#page_to)
- [page\_to\_scheme](IAnchorLinkElementItem.md#page_to_scheme)
- [page\_to\_status\_code](IAnchorLinkElementItem.md#page_to_status_code)
- [text](IAnchorLinkElementItem.md#text)

## Properties

### direction

• `Optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Defined in

[main.ts:148187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148187)

___


### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Defined in

[main.ts:148180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148180)

___


### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Defined in

[main.ts:148157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148157)

___


### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Defined in

[main.ts:148160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148160)

___


### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Defined in

[main.ts:148190](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148190)

___


### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Defined in

[main.ts:148195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148195)

___


### link\_attribute

• `Optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Defined in

[main.ts:148177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148177)

___


### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Defined in

[main.ts:148169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148169)

___


### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Defined in

[main.ts:148172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148172)

___


### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Defined in

[main.ts:148163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148163)

___


### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Defined in

[main.ts:148182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148182)

___


### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Defined in

[main.ts:148166](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148166)

___


### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Defined in

[main.ts:148184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148184)

___


### page\_to\_status\_code

• `Optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Defined in

[main.ts:148198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148198)

___


### text

• `Optional` **text**: `string`

anchor text

#### Defined in

[main.ts:148192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148192)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")