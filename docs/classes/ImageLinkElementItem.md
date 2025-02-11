[**Documentation**](../README.md)

***

[Documentation](../README.md) / ImageLinkElementItem

# Class: ImageLinkElementItem

Defined in: main.ts:169841

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ImageLinkElementItem()

> **new ImageLinkElementItem**(`data`?): [`ImageLinkElementItem`](ImageLinkElementItem.md)

Defined in: main.ts:169859

#### Parameters

##### data?

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md)

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22579

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`_discriminator`](BaseOnPageLinkItemInfo.md#_discriminator)

***

### direction?

> `optional` **direction**: `string`

Defined in: main.ts:22571

direction of the link
possible values: internal, external

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`direction`](../interfaces/IImageLinkElementItem.md#direction)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`direction`](BaseOnPageLinkItemInfo.md#direction)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:22564

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`dofollow`](../interfaces/IImageLinkElementItem.md#dofollow)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`dofollow`](BaseOnPageLinkItemInfo.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:22546

referring domain
the link was found on this domain

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`domain_from`](../interfaces/IImageLinkElementItem.md#domain_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_from`](BaseOnPageLinkItemInfo.md#domain_from)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:22549

referenced domain
the link is pointing to this domain

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`domain_to`](../interfaces/IImageLinkElementItem.md#domain_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_to`](BaseOnPageLinkItemInfo.md#domain_to)

***

### image\_alt?

> `optional` **image\_alt**: `string`

Defined in: main.ts:169850

alternative text for the image

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`image_alt`](../interfaces/IImageLinkElementItem.md#image_alt)

***

### image\_src?

> `optional` **image\_src**: `string`

Defined in: main.ts:169852

url of the image

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`image_src`](../interfaces/IImageLinkElementItem.md#image_src)

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:22574

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`is_broken`](../interfaces/IImageLinkElementItem.md#is_broken)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_broken`](BaseOnPageLinkItemInfo.md#is_broken)

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

Defined in: main.ts:22577

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IImageLinkElementItem.md#is_link_relation_conflict)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](BaseOnPageLinkItemInfo.md#is_link_relation_conflict)

***

### link\_attribute?

> `optional` **link\_attribute**: `string`[]

Defined in: main.ts:169846

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_attribute`](../interfaces/IImageLinkElementItem.md#link_attribute)

***

### link\_from?

> `optional` **link\_from**: `string`

Defined in: main.ts:22558

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_from`](../interfaces/IImageLinkElementItem.md#link_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_from`](BaseOnPageLinkItemInfo.md#link_from)

***

### link\_to?

> `optional` **link\_to**: `string`

Defined in: main.ts:22561

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_to`](../interfaces/IImageLinkElementItem.md#link_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_to`](BaseOnPageLinkItemInfo.md#link_to)

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:22552

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_from`](../interfaces/IImageLinkElementItem.md#page_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from`](BaseOnPageLinkItemInfo.md#page_from)

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

Defined in: main.ts:22566

url scheme of the referring page

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_from_scheme`](../interfaces/IImageLinkElementItem.md#page_from_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from_scheme`](BaseOnPageLinkItemInfo.md#page_from_scheme)

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:22555

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to`](../interfaces/IImageLinkElementItem.md#page_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to`](BaseOnPageLinkItemInfo.md#page_to)

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

Defined in: main.ts:22568

url scheme of the referenced page

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to_scheme`](../interfaces/IImageLinkElementItem.md#page_to_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to_scheme`](BaseOnPageLinkItemInfo.md#page_to_scheme)

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

Defined in: main.ts:169855

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to_status_code`](../interfaces/IImageLinkElementItem.md#page_to_status_code)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:169848

anchor text

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`text`](../interfaces/IImageLinkElementItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22543

type of element

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`type`](../interfaces/IImageLinkElementItem.md#type)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`type`](BaseOnPageLinkItemInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169864

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`init`](BaseOnPageLinkItemInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169890

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`toJSON`](BaseOnPageLinkItemInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ImageLinkElementItem`](ImageLinkElementItem.md)

Defined in: main.ts:169883

#### Parameters

##### data

`any`

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)
