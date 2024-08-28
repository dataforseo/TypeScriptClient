[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ImageLinkElementItem

# Class: ImageLinkElementItem

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImageLinkElementItem()

> **new ImageLinkElementItem**(`data`?): [`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Parameters

• **data?**: [`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md)

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructors)

#### Defined in

main.ts:161787

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`_discriminator`](BaseOnPageLinkItemInfo.md#_discriminator)

#### Defined in

main.ts:21502

***

### direction?

> `optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`direction`](../interfaces/IImageLinkElementItem.md#direction)

#### Defined in

main.ts:161768

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`dofollow`](../interfaces/IImageLinkElementItem.md#dofollow)

#### Defined in

main.ts:161761

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`domain_from`](../interfaces/IImageLinkElementItem.md#domain_from)

#### Defined in

main.ts:161738

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`domain_to`](../interfaces/IImageLinkElementItem.md#domain_to)

#### Defined in

main.ts:161741

***

### image\_alt?

> `optional` **image\_alt**: `string`

alternative text for the image

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`image_alt`](../interfaces/IImageLinkElementItem.md#image_alt)

#### Defined in

main.ts:161775

***

### image\_src?

> `optional` **image\_src**: `string`

url of the image

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`image_src`](../interfaces/IImageLinkElementItem.md#image_src)

#### Defined in

main.ts:161777

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`is_broken`](../interfaces/IImageLinkElementItem.md#is_broken)

#### Defined in

main.ts:161771

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IImageLinkElementItem.md#is_link_relation_conflict)

#### Defined in

main.ts:161780

***

### link\_attribute?

> `optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_attribute`](../interfaces/IImageLinkElementItem.md#link_attribute)

#### Defined in

main.ts:161758

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_from`](../interfaces/IImageLinkElementItem.md#link_from)

#### Defined in

main.ts:161750

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_to`](../interfaces/IImageLinkElementItem.md#link_to)

#### Defined in

main.ts:161753

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_from`](../interfaces/IImageLinkElementItem.md#page_from)

#### Defined in

main.ts:161744

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_from_scheme`](../interfaces/IImageLinkElementItem.md#page_from_scheme)

#### Defined in

main.ts:161763

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to`](../interfaces/IImageLinkElementItem.md#page_to)

#### Defined in

main.ts:161747

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to_scheme`](../interfaces/IImageLinkElementItem.md#page_to_scheme)

#### Defined in

main.ts:161765

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to_status_code`](../interfaces/IImageLinkElementItem.md#page_to_status_code)

#### Defined in

main.ts:161783

***

### text?

> `optional` **text**: `string`

anchor text

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`text`](../interfaces/IImageLinkElementItem.md#text)

#### Defined in

main.ts:161773

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`init`](BaseOnPageLinkItemInfo.md#init)

#### Defined in

main.ts:161792

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`toJSON`](BaseOnPageLinkItemInfo.md#tojson)

#### Defined in

main.ts:161830

***

### fromJS()

> `static` **fromJS**(`data`): [`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)

#### Defined in

main.ts:161823
