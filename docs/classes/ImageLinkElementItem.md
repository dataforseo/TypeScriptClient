[Documentation](../README.md) / [Exports](../modules.md) / ImageLinkElementItem

# Class: ImageLinkElementItem

## Hierarchy

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

  ↳ **`ImageLinkElementItem`**

## Implements

- [`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImageLinkElementItem.md#constructor)

### Properties

- [\_discriminator](ImageLinkElementItem.md#_discriminator)
- [direction](ImageLinkElementItem.md#direction)
- [dofollow](ImageLinkElementItem.md#dofollow)
- [domain\_from](ImageLinkElementItem.md#domain_from)
- [domain\_to](ImageLinkElementItem.md#domain_to)
- [image\_alt](ImageLinkElementItem.md#image_alt)
- [image\_src](ImageLinkElementItem.md#image_src)
- [is\_broken](ImageLinkElementItem.md#is_broken)
- [is\_link\_relation\_conflict](ImageLinkElementItem.md#is_link_relation_conflict)
- [link\_attribute](ImageLinkElementItem.md#link_attribute)
- [link\_from](ImageLinkElementItem.md#link_from)
- [link\_to](ImageLinkElementItem.md#link_to)
- [page\_from](ImageLinkElementItem.md#page_from)
- [page\_from\_scheme](ImageLinkElementItem.md#page_from_scheme)
- [page\_to](ImageLinkElementItem.md#page_to)
- [page\_to\_scheme](ImageLinkElementItem.md#page_to_scheme)
- [page\_to\_status\_code](ImageLinkElementItem.md#page_to_status_code)
- [text](ImageLinkElementItem.md#text)

### Methods

- [init](ImageLinkElementItem.md#init)
- [toJSON](ImageLinkElementItem.md#tojson)
- [fromJS](ImageLinkElementItem.md#fromjs)

## Constructors

### constructor

• **new ImageLinkElementItem**(`data?`): [`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md) |

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[constructor](BaseOnPageLinkItemInfo.md#constructor)

#### Defined in

main.ts:153821

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

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[direction](../interfaces/IImageLinkElementItem.md#direction)

#### Defined in

main.ts:153802

___

### dofollow

• `Optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[dofollow](../interfaces/IImageLinkElementItem.md#dofollow)

#### Defined in

main.ts:153795

___

### domain\_from

• `Optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[domain_from](../interfaces/IImageLinkElementItem.md#domain_from)

#### Defined in

main.ts:153772

___

### domain\_to

• `Optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[domain_to](../interfaces/IImageLinkElementItem.md#domain_to)

#### Defined in

main.ts:153775

___

### image\_alt

• `Optional` **image\_alt**: `string`

alternative text for the image

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[image_alt](../interfaces/IImageLinkElementItem.md#image_alt)

#### Defined in

main.ts:153809

___

### image\_src

• `Optional` **image\_src**: `string`

url of the image

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[image_src](../interfaces/IImageLinkElementItem.md#image_src)

#### Defined in

main.ts:153811

___

### is\_broken

• `Optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[is_broken](../interfaces/IImageLinkElementItem.md#is_broken)

#### Defined in

main.ts:153805

___

### is\_link\_relation\_conflict

• `Optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[is_link_relation_conflict](../interfaces/IImageLinkElementItem.md#is_link_relation_conflict)

#### Defined in

main.ts:153814

___

### link\_attribute

• `Optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[link_attribute](../interfaces/IImageLinkElementItem.md#link_attribute)

#### Defined in

main.ts:153792

___

### link\_from

• `Optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[link_from](../interfaces/IImageLinkElementItem.md#link_from)

#### Defined in

main.ts:153784

___

### link\_to

• `Optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[link_to](../interfaces/IImageLinkElementItem.md#link_to)

#### Defined in

main.ts:153787

___

### page\_from

• `Optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[page_from](../interfaces/IImageLinkElementItem.md#page_from)

#### Defined in

main.ts:153778

___

### page\_from\_scheme

• `Optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[page_from_scheme](../interfaces/IImageLinkElementItem.md#page_from_scheme)

#### Defined in

main.ts:153797

___

### page\_to

• `Optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[page_to](../interfaces/IImageLinkElementItem.md#page_to)

#### Defined in

main.ts:153781

___

### page\_to\_scheme

• `Optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[page_to_scheme](../interfaces/IImageLinkElementItem.md#page_to_scheme)

#### Defined in

main.ts:153799

___

### page\_to\_status\_code

• `Optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[page_to_status_code](../interfaces/IImageLinkElementItem.md#page_to_status_code)

#### Defined in

main.ts:153817

___

### text

• `Optional` **text**: `string`

anchor text

#### Implementation of

[IImageLinkElementItem](../interfaces/IImageLinkElementItem.md).[text](../interfaces/IImageLinkElementItem.md#text)

#### Defined in

main.ts:153807

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

main.ts:153826

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

main.ts:153864

___

### fromJS

▸ **fromJS**(`data`): [`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[BaseOnPageLinkItemInfo](BaseOnPageLinkItemInfo.md).[fromJS](BaseOnPageLinkItemInfo.md#fromjs)

#### Defined in

main.ts:153857
