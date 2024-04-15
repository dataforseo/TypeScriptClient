**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new ImageLinkElementItem(data)

> **new ImageLinkElementItem**(`data`?): [`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Parameters

• **data?**: [`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md)

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructors)

#### Source

main.ts:153979

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`_discriminator`](BaseOnPageLinkItemInfo.md#_discriminator)

#### Source

main.ts:20770

***

### direction?

> **`optional`** **direction**: `string`

direction of the link
possible values: internal, external

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`direction`](../interfaces/IImageLinkElementItem.md#direction)

#### Source

main.ts:153960

***

### dofollow?

> **`optional`** **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`dofollow`](../interfaces/IImageLinkElementItem.md#dofollow)

#### Source

main.ts:153953

***

### domain\_from?

> **`optional`** **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`domain_from`](../interfaces/IImageLinkElementItem.md#domain_from)

#### Source

main.ts:153930

***

### domain\_to?

> **`optional`** **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`domain_to`](../interfaces/IImageLinkElementItem.md#domain_to)

#### Source

main.ts:153933

***

### image\_alt?

> **`optional`** **image\_alt**: `string`

alternative text for the image

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`image_alt`](../interfaces/IImageLinkElementItem.md#image_alt)

#### Source

main.ts:153967

***

### image\_src?

> **`optional`** **image\_src**: `string`

url of the image

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`image_src`](../interfaces/IImageLinkElementItem.md#image_src)

#### Source

main.ts:153969

***

### is\_broken?

> **`optional`** **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`is_broken`](../interfaces/IImageLinkElementItem.md#is_broken)

#### Source

main.ts:153963

***

### is\_link\_relation\_conflict?

> **`optional`** **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IImageLinkElementItem.md#is_link_relation_conflict)

#### Source

main.ts:153972

***

### link\_attribute?

> **`optional`** **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_attribute`](../interfaces/IImageLinkElementItem.md#link_attribute)

#### Source

main.ts:153950

***

### link\_from?

> **`optional`** **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_from`](../interfaces/IImageLinkElementItem.md#link_from)

#### Source

main.ts:153942

***

### link\_to?

> **`optional`** **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`link_to`](../interfaces/IImageLinkElementItem.md#link_to)

#### Source

main.ts:153945

***

### page\_from?

> **`optional`** **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_from`](../interfaces/IImageLinkElementItem.md#page_from)

#### Source

main.ts:153936

***

### page\_from\_scheme?

> **`optional`** **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_from_scheme`](../interfaces/IImageLinkElementItem.md#page_from_scheme)

#### Source

main.ts:153955

***

### page\_to?

> **`optional`** **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to`](../interfaces/IImageLinkElementItem.md#page_to)

#### Source

main.ts:153939

***

### page\_to\_scheme?

> **`optional`** **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to_scheme`](../interfaces/IImageLinkElementItem.md#page_to_scheme)

#### Source

main.ts:153957

***

### page\_to\_status\_code?

> **`optional`** **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`page_to_status_code`](../interfaces/IImageLinkElementItem.md#page_to_status_code)

#### Source

main.ts:153975

***

### text?

> **`optional`** **text**: `string`

anchor text

#### Implementation of

[`IImageLinkElementItem`](../interfaces/IImageLinkElementItem.md).[`text`](../interfaces/IImageLinkElementItem.md#text)

#### Source

main.ts:153965

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`init`](BaseOnPageLinkItemInfo.md#init)

#### Source

main.ts:153984

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`toJSON`](BaseOnPageLinkItemInfo.md#tojson)

#### Source

main.ts:154022

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImageLinkElementItem`](ImageLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)

#### Source

main.ts:154015
