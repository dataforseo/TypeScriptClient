**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AlternateLinkElementItem

# Class: AlternateLinkElementItem

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AlternateLinkElementItem(data)

> **new AlternateLinkElementItem**(`data`?): [`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Parameters

• **data?**: [`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md)

#### Returns

[`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructors)

#### Source

main.ts:157009

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`_discriminator`](BaseOnPageLinkItemInfo.md#_discriminator)

#### Source

main.ts:20993

***

### direction?

> **`optional`** **direction**: `string`

direction of the link
possible values: internal, external

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`direction`](../interfaces/IAlternateLinkElementItem.md#direction)

#### Source

main.ts:156996

***

### dofollow?

> **`optional`** **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`dofollow`](../interfaces/IAlternateLinkElementItem.md#dofollow)

#### Source

main.ts:156989

***

### domain\_from?

> **`optional`** **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`domain_from`](../interfaces/IAlternateLinkElementItem.md#domain_from)

#### Source

main.ts:156971

***

### domain\_to?

> **`optional`** **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`domain_to`](../interfaces/IAlternateLinkElementItem.md#domain_to)

#### Source

main.ts:156974

***

### is\_broken?

> **`optional`** **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`is_broken`](../interfaces/IAlternateLinkElementItem.md#is_broken)

#### Source

main.ts:156999

***

### is\_link\_relation\_conflict?

> **`optional`** **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IAlternateLinkElementItem.md#is_link_relation_conflict)

#### Source

main.ts:157002

***

### link\_from?

> **`optional`** **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`link_from`](../interfaces/IAlternateLinkElementItem.md#link_from)

#### Source

main.ts:156983

***

### link\_to?

> **`optional`** **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`link_to`](../interfaces/IAlternateLinkElementItem.md#link_to)

#### Source

main.ts:156986

***

### page\_from?

> **`optional`** **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_from`](../interfaces/IAlternateLinkElementItem.md#page_from)

#### Source

main.ts:156977

***

### page\_from\_scheme?

> **`optional`** **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_from_scheme`](../interfaces/IAlternateLinkElementItem.md#page_from_scheme)

#### Source

main.ts:156991

***

### page\_to?

> **`optional`** **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to`](../interfaces/IAlternateLinkElementItem.md#page_to)

#### Source

main.ts:156980

***

### page\_to\_scheme?

> **`optional`** **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to_scheme`](../interfaces/IAlternateLinkElementItem.md#page_to_scheme)

#### Source

main.ts:156993

***

### page\_to\_status\_code?

> **`optional`** **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to_status_code`](../interfaces/IAlternateLinkElementItem.md#page_to_status_code)

#### Source

main.ts:157005

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

main.ts:157014

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

main.ts:157044

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)

#### Source

main.ts:157037
