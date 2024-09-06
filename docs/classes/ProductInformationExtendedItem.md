[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ProductInformationExtendedItem

# Class: ProductInformationExtendedItem

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationExtendedItem()

> **new ProductInformationExtendedItem**(`data`?): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Parameters

• **data?**: [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

#### Defined in

main.ts:182254

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

#### Defined in

main.ts:23359

***

### contents?

> `optional` **contents**: [`ProductInformationRows`](ProductInformationRows.md)[]

contains information specified about the product within the section_name

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`contents`](../interfaces/IProductInformationExtendedItem.md#contents)

#### Defined in

main.ts:182250

***

### section\_name?

> `optional` **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`section_name`](../interfaces/IProductInformationExtendedItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

#### Defined in

main.ts:23357

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`type`](../interfaces/IProductInformationExtendedItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

#### Defined in

main.ts:23355

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`init`](BaseProductInformationItem.md#init)

#### Defined in

main.ts:182259

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

#### Defined in

main.ts:182281

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)

#### Defined in

main.ts:182274
