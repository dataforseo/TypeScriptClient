[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ShoppingElement

# Class: ShoppingElement

## Implements

- [`IShoppingElement`](../interfaces/IShoppingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShoppingElement()

> **new ShoppingElement**(`data`?): [`ShoppingElement`](ShoppingElement.md)

#### Parameters

• **data?**: [`IShoppingElement`](../interfaces/IShoppingElement.md)

#### Returns

[`ShoppingElement`](ShoppingElement.md)

#### Defined in

main.ts:31576

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`description`](../interfaces/IShoppingElement.md#description)

#### Defined in

main.ts:31562

***

### marketplace?

> `optional` **marketplace**: `string`

merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`marketplace`](../interfaces/IShoppingElement.md#marketplace)

#### Defined in

main.ts:31567

***

### marketplace\_url?

> `optional` **marketplace\_url**: `string`

relevant marketplace URL
URL of the page on the marketplace website where the product is hosted

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`marketplace_url`](../interfaces/IShoppingElement.md#marketplace_url)

#### Defined in

main.ts:31570

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`price`](../interfaces/IShoppingElement.md#price)

#### Defined in

main.ts:31557

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`source`](../interfaces/IShoppingElement.md#source)

#### Defined in

main.ts:31560

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`title`](../interfaces/IShoppingElement.md#title)

#### Defined in

main.ts:31555

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`type`](../interfaces/IShoppingElement.md#type)

#### Defined in

main.ts:31553

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`url`](../interfaces/IShoppingElement.md#url)

#### Defined in

main.ts:31572

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:31585

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:31609

***

### fromJS()

> `static` **fromJS**(`data`): [`ShoppingElement`](ShoppingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShoppingElement`](ShoppingElement.md)

#### Defined in

main.ts:31602
