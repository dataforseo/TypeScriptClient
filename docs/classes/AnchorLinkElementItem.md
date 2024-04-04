**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AnchorLinkElementItem

# Class: AnchorLinkElementItem

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AnchorLinkElementItem(data)

> **new AnchorLinkElementItem**(`data`?): [`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Parameters

• **data?**: [`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md)

#### Returns

[`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructors)

#### Source

main.ts:153518

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

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`direction`](../interfaces/IAnchorLinkElementItem.md#direction)

#### Source

main.ts:153503

***

### dofollow?

> **`optional`** **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`dofollow`](../interfaces/IAnchorLinkElementItem.md#dofollow)

#### Source

main.ts:153496

***

### domain\_from?

> **`optional`** **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`domain_from`](../interfaces/IAnchorLinkElementItem.md#domain_from)

#### Source

main.ts:153473

***

### domain\_to?

> **`optional`** **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`domain_to`](../interfaces/IAnchorLinkElementItem.md#domain_to)

#### Source

main.ts:153476

***

### is\_broken?

> **`optional`** **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`is_broken`](../interfaces/IAnchorLinkElementItem.md#is_broken)

#### Source

main.ts:153506

***

### is\_link\_relation\_conflict?

> **`optional`** **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IAnchorLinkElementItem.md#is_link_relation_conflict)

#### Source

main.ts:153511

***

### link\_attribute?

> **`optional`** **link\_attribute**: `string`[]

link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
["ugc","noopener"]

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`link_attribute`](../interfaces/IAnchorLinkElementItem.md#link_attribute)

#### Source

main.ts:153493

***

### link\_from?

> **`optional`** **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`link_from`](../interfaces/IAnchorLinkElementItem.md#link_from)

#### Source

main.ts:153485

***

### link\_to?

> **`optional`** **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`link_to`](../interfaces/IAnchorLinkElementItem.md#link_to)

#### Source

main.ts:153488

***

### page\_from?

> **`optional`** **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_from`](../interfaces/IAnchorLinkElementItem.md#page_from)

#### Source

main.ts:153479

***

### page\_from\_scheme?

> **`optional`** **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_from_scheme`](../interfaces/IAnchorLinkElementItem.md#page_from_scheme)

#### Source

main.ts:153498

***

### page\_to?

> **`optional`** **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_to`](../interfaces/IAnchorLinkElementItem.md#page_to)

#### Source

main.ts:153482

***

### page\_to\_scheme?

> **`optional`** **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_to_scheme`](../interfaces/IAnchorLinkElementItem.md#page_to_scheme)

#### Source

main.ts:153500

***

### page\_to\_status\_code?

> **`optional`** **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`page_to_status_code`](../interfaces/IAnchorLinkElementItem.md#page_to_status_code)

#### Source

main.ts:153514

***

### text?

> **`optional`** **text**: `string`

anchor text

#### Implementation of

[`IAnchorLinkElementItem`](../interfaces/IAnchorLinkElementItem.md).[`text`](../interfaces/IAnchorLinkElementItem.md#text)

#### Source

main.ts:153508

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

main.ts:153523

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

main.ts:153559

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AnchorLinkElementItem`](AnchorLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)

#### Source

main.ts:153552
