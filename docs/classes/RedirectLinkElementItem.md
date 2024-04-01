[Documentation](../README.md) / [Exports](../modules.md) / RedirectLinkElementItem

# Class: RedirectLinkElementItem

## Hierarchy

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

  ↳ **`RedirectLinkElementItem`**

## Implements

- [`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RedirectLinkElementItem.md#constructor)

### Properties

- [\_discriminator](RedirectLinkElementItem.md#_discriminator)
- [direction](RedirectLinkElementItem.md#direction)
- [dofollow](RedirectLinkElementItem.md#dofollow)
- [domain\_from](RedirectLinkElementItem.md#domain_from)
- [domain\_to](RedirectLinkElementItem.md#domain_to)
- [is\_broken](RedirectLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](RedirectLinkElementItem.md#is_link_relation_conflict)
- [link\_from](RedirectLinkElementItem.md#link_from)
- [link\_to](RedirectLinkElementItem.md#link_to)
- [page\_from](RedirectLinkElementItem.md#page_from)
- [page\_from\_scheme](RedirectLinkElementItem.md#page_from_scheme)
- [page\_to](RedirectLinkElementItem.md#page_to)
- [page\_to\_scheme](RedirectLinkElementItem.md#page_to_scheme)

### Methods

- [init](RedirectLinkElementItem.md#init)
- [toJSON](RedirectLinkElementItem.md#tojson)
- [fromJS](RedirectLinkElementItem.md#fromjs)

## Constructors

### constructor

• **new RedirectLinkElementItem**(`data?`): [`RedirectLinkElementItem`](RedirectLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRedirectLinkElementItem`](../interfaces/IRedirectLinkElementItem.md) |

#### Returns

[`RedirectLinkElementItem`](RedirectLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[constructor](BaseOnPageLinkItemInfo.md#constructor)

#### Defined in

main.ts:154324

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

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[direction](../interfaces/IRedirectLinkElementItem.md#direction)

#### Defined in

main.ts:154314

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[dofollow](../interfaces/IRedirectLinkElementItem.md#dofollow)

#### Defined in

main.ts:154307

___

### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[domain_from](../interfaces/IRedirectLinkElementItem.md#domain_from)

#### Defined in

main.ts:154289

___

### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[domain_to](../interfaces/IRedirectLinkElementItem.md#domain_to)

#### Defined in

main.ts:154292

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[is_broken](../interfaces/IRedirectLinkElementItem.md#is_broken)

#### Defined in

main.ts:154317

___

### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to the URL in link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[is_link_relation_conflict](../interfaces/IRedirectLinkElementItem.md#is_link_relation_conflict)

#### Defined in

main.ts:154320

___

### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[link_from](../interfaces/IRedirectLinkElementItem.md#link_from)

#### Defined in

main.ts:154301

___

### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[link_to](../interfaces/IRedirectLinkElementItem.md#link_to)

#### Defined in

main.ts:154304

___

### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[page_from](../interfaces/IRedirectLinkElementItem.md#page_from)

#### Defined in

main.ts:154295

___

### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[page_from_scheme](../interfaces/IRedirectLinkElementItem.md#page_from_scheme)

#### Defined in

main.ts:154309

___

### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[page_to](../interfaces/IRedirectLinkElementItem.md#page_to)

#### Defined in

main.ts:154298

___

### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[IRedirectLinkElementItem](../interfaces/IRedirectLinkElementItem.md).[page_to_scheme](../interfaces/IRedirectLinkElementItem.md#page_to_scheme)

#### Defined in

main.ts:154311

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

main.ts:154329

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

main.ts:154358

___

### fromJS

▸ **fromJS**(`data`): [`RedirectLinkElementItem`](RedirectLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RedirectLinkElementItem`](RedirectLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[fromJS](BaseOnPageLinkItemInfo.md#fromjs)

#### Defined in

main.ts:154351
