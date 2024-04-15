**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductInformationExtendedItem

# Class: ProductInformationExtendedItem

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationExtendedItem(data)

> **new ProductInformationExtendedItem**(`data`?): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Parameters

• **data?**: [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

#### Source

main.ts:178337

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

#### Source

main.ts:22234

***

### contents?

> **`optional`** **contents**: [`ProductInformationRows`](ProductInformationRows.md)[]

contains information specified about the product within the section_name

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`contents`](../interfaces/IProductInformationExtendedItem.md#contents)

#### Source

main.ts:178333

***

### section\_name?

> **`optional`** **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`section_name`](../interfaces/IProductInformationExtendedItem.md#section_name)

#### Source

main.ts:178331

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`init`](BaseProductInformationItem.md#init)

#### Source

main.ts:178342

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

#### Source

main.ts:178365

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)

#### Source

main.ts:178358
