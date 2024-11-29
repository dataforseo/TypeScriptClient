[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductConsiderationsElement

# Class: ProductConsiderationsElement

## Implements

- [`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsElement()

> **new ProductConsiderationsElement**(`data`?): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Parameters

##### data?

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Defined in

main.ts:36716

## Properties

### consideration\_category?

> `optional` **consideration\_category**: `string`

category of the consideration element
the category is indicated just above the title fo the consideration element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`consideration_category`](../interfaces/IProductConsiderationsElement.md#consideration_category)

#### Defined in

main.ts:36710

***

### expanded\_element?

> `optional` **expanded\_element**: [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

expanded element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`expanded_element`](../interfaces/IProductConsiderationsElement.md#expanded_element)

#### Defined in

main.ts:36712

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`title`](../interfaces/IProductConsiderationsElement.md#title)

#### Defined in

main.ts:36707

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`type`](../interfaces/IProductConsiderationsElement.md#type)

#### Defined in

main.ts:36705

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:36725

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:36745

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Parameters

##### data

`any`

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Defined in

main.ts:36738
