[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationDetailsItem

# Class: ProductInformationDetailsItem

Defined in: main.ts:194642

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductInformationDetailsItem()

> **new ProductInformationDetailsItem**(`data`?): [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

Defined in: main.ts:194648

#### Parameters

##### data?

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md)

#### Returns

[`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24257

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

***

### body?

> `optional` **body**: `object`

Defined in: main.ts:194644

contains information specified about the product within the section_name

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`body`](../interfaces/IProductInformationDetailsItem.md#body)

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:24255

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`section_name`](../interfaces/IProductInformationDetailsItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24253

type of element

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`type`](../interfaces/IProductInformationDetailsItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194653

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`init`](BaseProductInformationItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194677

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

Defined in: main.ts:194670

#### Parameters

##### data

`any`

#### Returns

[`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)
