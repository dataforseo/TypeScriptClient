[**Documentation**](../README.md)

***

[Documentation](../README.md) / RefineProductsElement

# Class: RefineProductsElement

## Implements

- [`IRefineProductsElement`](../interfaces/IRefineProductsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RefineProductsElement()

> **new RefineProductsElement**(`data`?): [`RefineProductsElement`](RefineProductsElement.md)

#### Parameters

##### data?

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md)

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)

#### Defined in

main.ts:37088

## Properties

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`image_url`](../interfaces/IRefineProductsElement.md#image_url)

#### Defined in

main.ts:37078

***

### keyword?

> `optional` **keyword**: `string`

keyword for the related refined search

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`keyword`](../interfaces/IRefineProductsElement.md#keyword)

#### Defined in

main.ts:37080

***

### refine\_type?

> `optional` **refine\_type**: `string`

type of search refinement

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`refine_type`](../interfaces/IRefineProductsElement.md#refine_type)

#### Defined in

main.ts:37082

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`title`](../interfaces/IRefineProductsElement.md#title)

#### Defined in

main.ts:37075

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`type`](../interfaces/IRefineProductsElement.md#type)

#### Defined in

main.ts:37073

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRefineProductsElement`](../interfaces/IRefineProductsElement.md).[`xpath`](../interfaces/IRefineProductsElement.md#xpath)

#### Defined in

main.ts:37084

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:37097

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:37119

***

### fromJS()

> `static` **fromJS**(`data`): [`RefineProductsElement`](RefineProductsElement.md)

#### Parameters

##### data

`any`

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)

#### Defined in

main.ts:37112
