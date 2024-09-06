[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseOnPageLinkItemInfo

# Class: BaseOnPageLinkItemInfo

## Extended by

- [`AnchorLinkElementItem`](AnchorLinkElementItem.md)
- [`ImageLinkElementItem`](ImageLinkElementItem.md)
- [`AlternateLinkElementItem`](AlternateLinkElementItem.md)
- [`RedirectLinkElementItem`](RedirectLinkElementItem.md)

## Implements

- [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

## Constructors

### new BaseOnPageLinkItemInfo()

> **new BaseOnPageLinkItemInfo**(`data`?): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

• **data?**: [`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md)

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Defined in

main.ts:21683

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21681

***

### direction?

> `optional` **direction**: `string`

direction of the link
possible values: internal, external

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`direction`](../interfaces/IBaseOnPageLinkItemInfo.md#direction)

#### Defined in

main.ts:21673

***

### dofollow?

> `optional` **dofollow**: `boolean`

indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel="nofollow" attribute

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`dofollow`](../interfaces/IBaseOnPageLinkItemInfo.md#dofollow)

#### Defined in

main.ts:21666

***

### domain\_from?

> `optional` **domain\_from**: `string`

referring domain
the link was found on this domain

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`domain_from`](../interfaces/IBaseOnPageLinkItemInfo.md#domain_from)

#### Defined in

main.ts:21648

***

### domain\_to?

> `optional` **domain\_to**: `string`

referenced domain
the link is pointing to this domain

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`domain_to`](../interfaces/IBaseOnPageLinkItemInfo.md#domain_to)

#### Defined in

main.ts:21651

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

link is broken
indicates whether a link is directing to a broken page or resource

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`is_broken`](../interfaces/IBaseOnPageLinkItemInfo.md#is_broken)

#### Defined in

main.ts:21676

***

### is\_link\_relation\_conflict?

> `optional` **is\_link\_relation\_conflict**: `boolean`

indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel="nofollow" attribute and at least one is dofollow

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`is_link_relation_conflict`](../interfaces/IBaseOnPageLinkItemInfo.md#is_link_relation_conflict)

#### Defined in

main.ts:21679

***

### link\_from?

> `optional` **link\_from**: `string`

referring page
absolute URL of the page on which the link was found

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`link_from`](../interfaces/IBaseOnPageLinkItemInfo.md#link_from)

#### Defined in

main.ts:21660

***

### link\_to?

> `optional` **link\_to**: `string`

referenced page
absolute URL of the page to which the link is pointing

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`link_to`](../interfaces/IBaseOnPageLinkItemInfo.md#link_to)

#### Defined in

main.ts:21663

***

### page\_from?

> `optional` **page\_from**: `string`

referring page
relative URL of the page on which the link was found

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_from`](../interfaces/IBaseOnPageLinkItemInfo.md#page_from)

#### Defined in

main.ts:21654

***

### page\_from\_scheme?

> `optional` **page\_from\_scheme**: `string`

url scheme of the referring page

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_from_scheme`](../interfaces/IBaseOnPageLinkItemInfo.md#page_from_scheme)

#### Defined in

main.ts:21668

***

### page\_to?

> `optional` **page\_to**: `string`

referenced page
relative URL of the page to which the link is pointing

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_to`](../interfaces/IBaseOnPageLinkItemInfo.md#page_to)

#### Defined in

main.ts:21657

***

### page\_to\_scheme?

> `optional` **page\_to\_scheme**: `string`

url scheme of the referenced page

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`page_to_scheme`](../interfaces/IBaseOnPageLinkItemInfo.md#page_to_scheme)

#### Defined in

main.ts:21670

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseOnPageLinkItemInfo`](../interfaces/IBaseOnPageLinkItemInfo.md).[`type`](../interfaces/IBaseOnPageLinkItemInfo.md#type)

#### Defined in

main.ts:21645

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21693

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21738

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseOnPageLinkItemInfo`](BaseOnPageLinkItemInfo.md)

#### Defined in

main.ts:21711
