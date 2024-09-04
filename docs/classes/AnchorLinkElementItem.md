[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AnchorLinkElementItem

# Class: AnchorLinkElementItem

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AnchorLinkElementItem()

> **new AnchorLinkElementItem**(`data`?): [`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Parameters

• **data?**: [`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md)

#### Returns

[`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructors)

#### Defined in

main.ts:161476

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

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`direction`](../interfaces/IAnchorLinkElementItem.md#direction)

#### Defined in

main.ts:161461

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`dofollow`](../interfaces/IAnchorLinkElementItem.md#dofollow)

#### Defined in

main.ts:161454

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`domain_from`](../interfaces/IAnchorLinkElementItem.md#domain_from)

#### Defined in

main.ts:161431

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`domain_to`](../interfaces/IAnchorLinkElementItem.md#domain_to)

#### Defined in

main.ts:161434

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`is_broken`](../interfaces/IAnchorLinkElementItem.md#is_broken)

#### Defined in

main.ts:161464

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IAnchorLinkElementItem.md#is_link_relation_conflict)

#### Defined in

main.ts:161469

***

### link\_attribute?

> `optional` **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`link_attribute`](../interfaces/IAnchorLinkElementItem.md#link_attribute)

#### Defined in

main.ts:161451

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`link_from`](../interfaces/IAnchorLinkElementItem.md#link_from)

#### Defined in

main.ts:161443

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`link_to`](../interfaces/IAnchorLinkElementItem.md#link_to)

#### Defined in

main.ts:161446

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_from`](../interfaces/IAnchorLinkElementItem.md#page_from)

#### Defined in

main.ts:161437

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_from_scheme`](../interfaces/IAnchorLinkElementItem.md#page_from_scheme)

#### Defined in

main.ts:161456

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_to`](../interfaces/IAnchorLinkElementItem.md#page_to)

#### Defined in

main.ts:161440

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_to_scheme`](../interfaces/IAnchorLinkElementItem.md#page_to_scheme)

#### Defined in

main.ts:161458

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_to_status_code`](../interfaces/IAnchorLinkElementItem.md#page_to_status_code)

#### Defined in

main.ts:161472

***

### text?

> `optional` **text**: `string`

anchor text

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`text`](../interfaces/IAnchorLinkElementItem.md#text)

#### Defined in

main.ts:161466

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

main.ts:161481

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

main.ts:161517

***

### fromJS()

> `static` **fromJS**(`data`): [`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)

#### Defined in

main.ts:161510
