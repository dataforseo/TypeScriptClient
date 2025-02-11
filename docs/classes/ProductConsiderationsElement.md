[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductConsiderationsElement

# Class: ProductConsiderationsElement

Defined in: main.ts:36719

## Implements

- [`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsElement()

> **new ProductConsiderationsElement**(`data`?): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

Defined in: main.ts:36732

#### Parameters

##### data?

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)

## Properties

### consideration\_category?

> `optional` **consideration\_category**: `string`

Defined in: main.ts:36726

category of the consideration element
the category is indicated just above the title fo the consideration element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`consideration_category`](../interfaces/IProductConsiderationsElement.md#consideration_category)

***

### expanded\_element?

> `optional` **expanded\_element**: [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

Defined in: main.ts:36728

expanded element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`expanded_element`](../interfaces/IProductConsiderationsElement.md#expanded_element)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36723

title of a given link element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`title`](../interfaces/IProductConsiderationsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:36721

type of element

#### Implementation of

[`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md).[`type`](../interfaces/IProductConsiderationsElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36741

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36761

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

Defined in: main.ts:36754

#### Parameters

##### data

`any`

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)
