**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RefineProductsElement

# Class: RefineProductsElement

## Implements

- [`IRefineProductsElement`](../interfaces/IRefineProductsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RefineProductsElement(data)

> **new RefineProductsElement**(`data`?): [`RefineProductsElement`](RefineProductsElement.md)

#### Parameters

• **data?**: [`IRefineProductsElement`](../interfaces/IRefineProductsElement.md)

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)

#### Source

main.ts:36363

## Properties

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`image_url`](../interfaces/IRefineProductsElement.md#image_url)

#### Source

main.ts:36353

***

### keyword?

> **`optional`** **keyword**: `string`

keyword for the related refined search

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`keyword`](../interfaces/IRefineProductsElement.md#keyword)

#### Source

main.ts:36355

***

### refine\_type?

> **`optional`** **refine\_type**: `string`

type of search refinement

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`refine_type`](../interfaces/IRefineProductsElement.md#refine_type)

#### Source

main.ts:36357

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`title`](../interfaces/IRefineProductsElement.md#title)

#### Source

main.ts:36351

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`type`](../interfaces/IRefineProductsElement.md#type)

#### Source

main.ts:36349

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`xpath`](../interfaces/IRefineProductsElement.md#xpath)

#### Source

main.ts:36359

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:36372

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:36394

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RefineProductsElement`](RefineProductsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)

#### Source

main.ts:36387
