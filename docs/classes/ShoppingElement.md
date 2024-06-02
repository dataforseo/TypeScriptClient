**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ShoppingElement

# Class: ShoppingElement

## Implements

- [`IShoppingElement`](../interfaces/IShoppingElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShoppingElement(data)

> **new ShoppingElement**(`data`?): [`ShoppingElement`](ShoppingElement.md)

#### Parameters

• **data?**: [`IShoppingElement`](../interfaces/IShoppingElement.md)

#### Returns

[`ShoppingElement`](ShoppingElement.md)

#### Source

main.ts:31477

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`description`](../interfaces/IShoppingElement.md#description)

#### Source

main.ts:31463

***

### marketplace?

> **`optional`** **marketplace**: `string`

merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`marketplace`](../interfaces/IShoppingElement.md#marketplace)

#### Source

main.ts:31468

***

### marketplace\_url?

> **`optional`** **marketplace\_url**: `string`

relevant marketplace URL
URL of the page on the marketplace website where the product is hosted

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`marketplace_url`](../interfaces/IShoppingElement.md#marketplace_url)

#### Source

main.ts:31471

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`price`](../interfaces/IShoppingElement.md#price)

#### Source

main.ts:31458

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`source`](../interfaces/IShoppingElement.md#source)

#### Source

main.ts:31461

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`title`](../interfaces/IShoppingElement.md#title)

#### Source

main.ts:31456

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`type`](../interfaces/IShoppingElement.md#type)

#### Source

main.ts:31454

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IShoppingElement`](../interfaces/IShoppingElement.md).[`url`](../interfaces/IShoppingElement.md#url)

#### Source

main.ts:31473

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:31486

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:31510

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ShoppingElement`](ShoppingElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShoppingElement`](ShoppingElement.md)

#### Source

main.ts:31503
