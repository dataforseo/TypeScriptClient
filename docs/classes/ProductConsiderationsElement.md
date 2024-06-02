**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductConsiderationsElement

# Class: ProductConsiderationsElement

## Implements

- [`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsElement(data)

> **new ProductConsiderationsElement**(`data`?): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Parameters

• **data?**: [`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Source

main.ts:35743

## Properties

### consideration\_category?

> **`optional`** **consideration\_category**: `string`

category of the consideration element
the category is indicated just above the title fo the consideration element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`consideration_category`](../interfaces/IProductConsiderationsElement.md#consideration_category)

#### Source

main.ts:35737

***

### expanded\_element?

> **`optional`** **expanded\_element**: [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

expanded element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`expanded_element`](../interfaces/IProductConsiderationsElement.md#expanded_element)

#### Source

main.ts:35739

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`title`](../interfaces/IProductConsiderationsElement.md#title)

#### Source

main.ts:35734

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`type`](../interfaces/IProductConsiderationsElement.md#type)

#### Source

main.ts:35732

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:35752

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:35772

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Source

main.ts:35765
