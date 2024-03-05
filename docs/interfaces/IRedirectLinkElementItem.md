[dataforseo-client](../README.md) / [Exports](../modules.md) / IRedirectLinkElementItem

# Interface: IRedirectLinkElementItem

## Hierarchy

- [`IBaseOnPageLinkItemInfo`](IBaseOnPageLinkItemInfo.md)

  ↳ **`IRedirectLinkElementItem`**

## Implemented by

- [`RedirectLinkElementItem`](../classes/RedirectLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [direction](IRedirectLinkElementItem.md#direction)
- [dofollow](IRedirectLinkElementItem.md#dofollow)
- [domain\_from](IRedirectLinkElementItem.md#domain_from)
- [domain\_to](IRedirectLinkElementItem.md#domain_to)
- [is\_broken](IRedirectLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](IRedirectLinkElementItem.md#is_link_relation_conflict)
- [link\_from](IRedirectLinkElementItem.md#link_from)
- [link\_to](IRedirectLinkElementItem.md#link_to)
- [page\_from](IRedirectLinkElementItem.md#page_from)
- [page\_from\_scheme](IRedirectLinkElementItem.md#page_from_scheme)
- [page\_to](IRedirectLinkElementItem.md#page_to)
- [page\_to\_scheme](IRedirectLinkElementItem.md#page_to_scheme)

## Properties

### direction

• `Optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Defined in

[main.ts:148982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148982)

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Defined in

[main.ts:148975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148975)

___

### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Defined in

[main.ts:148957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148957)

___

### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Defined in

[main.ts:148960](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148960)

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Defined in

[main.ts:148985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148985)

___

### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to the URL in link_to has a rel="nofollow" attribute and at least one is dofollow

#### Defined in

[main.ts:148988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148988)

___

### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Defined in

[main.ts:148969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148969)

___

### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Defined in

[main.ts:148972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148972)

___

### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Defined in

[main.ts:148963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148963)

___

### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Defined in

[main.ts:148977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148977)

___

### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Defined in

[main.ts:148966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148966)

___

### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Defined in

[main.ts:148979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148979)
