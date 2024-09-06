[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AlternateLinkElementItem

# Class: AlternateLinkElementItem

## Extends

- [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

## Implements

- [`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AlternateLinkElementItem()

> **new AlternateLinkElementItem**(`data`?): [`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Parameters

• **data?**: [`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md)

#### Returns

[`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`constructor`](BaseOnPageLinkItemInfo.md#constructors)

#### Defined in

main.ts:158069

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`_discriminator`](BaseOnPageLinkItemInfo.md#_discriminator)

#### Defined in

main.ts:21681

***

### direction?

> `optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`direction`](../interfaces/IAlternateLinkElementItem.md#direction)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`direction`](BaseOnPageLinkItemInfo.md#direction)

#### Defined in

main.ts:21673

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`dofollow`](../interfaces/IAlternateLinkElementItem.md#dofollow)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`dofollow`](BaseOnPageLinkItemInfo.md#dofollow)

#### Defined in

main.ts:21666

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`domain_from`](../interfaces/IAlternateLinkElementItem.md#domain_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_from`](BaseOnPageLinkItemInfo.md#domain_from)

#### Defined in

main.ts:21648

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`domain_to`](../interfaces/IAlternateLinkElementItem.md#domain_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`domain_to`](BaseOnPageLinkItemInfo.md#domain_to)

#### Defined in

main.ts:21651

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`is_broken`](../interfaces/IAlternateLinkElementItem.md#is_broken)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_broken`](BaseOnPageLinkItemInfo.md#is_broken)

#### Defined in

main.ts:21676

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`is_link_relation_conflict`](../interfaces/IAlternateLinkElementItem.md#is_link_relation_conflict)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](BaseOnPageLinkItemInfo.md#is_link_relation_conflict)

#### Defined in

main.ts:21679

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`link_from`](../interfaces/IAlternateLinkElementItem.md#link_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_from`](BaseOnPageLinkItemInfo.md#link_from)

#### Defined in

main.ts:21660

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`link_to`](../interfaces/IAlternateLinkElementItem.md#link_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`link_to`](BaseOnPageLinkItemInfo.md#link_to)

#### Defined in

main.ts:21663

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_from`](../interfaces/IAlternateLinkElementItem.md#page_from)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from`](BaseOnPageLinkItemInfo.md#page_from)

#### Defined in

main.ts:21654

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_from_scheme`](../interfaces/IAlternateLinkElementItem.md#page_from_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_from_scheme`](BaseOnPageLinkItemInfo.md#page_from_scheme)

#### Defined in

main.ts:21668

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to`](../interfaces/IAlternateLinkElementItem.md#page_to)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to`](BaseOnPageLinkItemInfo.md#page_to)

#### Defined in

main.ts:21657

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to_scheme`](../interfaces/IAlternateLinkElementItem.md#page_to_scheme)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`page_to_scheme`](BaseOnPageLinkItemInfo.md#page_to_scheme)

#### Defined in

main.ts:21670

***

### page\_to\_status\_code?

> `optional` **page\_to\_status\_code**: `number`

status code of the referenced page
status code of the page to which the link is pointing

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`page_to_status_code`](../interfaces/IAlternateLinkElementItem.md#page_to_status_code)

#### Defined in

main.ts:158065

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAlternateLinkElementItem`](../interfaces/IAlternateLinkElementItem.md).[`type`](../interfaces/IAlternateLinkElementItem.md#type)

#### Inherited from

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`type`](BaseOnPageLinkItemInfo.md#type)

#### Defined in

main.ts:21645

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

main.ts:158074

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

main.ts:158092

***

### fromJS()

> `static` **fromJS**(`data`): [`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AlternateLinkElementItem`](AlternateLinkElementItem.md)

#### Overrides

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md).[`fromJS`](BaseOnPageLinkItemInfo.md#fromjs)

#### Defined in

main.ts:158085
