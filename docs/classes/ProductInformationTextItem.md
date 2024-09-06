[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ProductInformationTextItem

# Class: ProductInformationTextItem

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationTextItem()

> **new ProductInformationTextItem**(`data`?): [`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Parameters

• **data?**: [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

#### Defined in

main.ts:182034

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

#### Defined in

main.ts:23359

***

### section\_name?

> `optional` **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`section_name`](../interfaces/IProductInformationTextItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

#### Defined in

main.ts:23357

***

### text?

> `optional` **text**: `string`

text specified under the given title within the section_name

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`text`](../interfaces/IProductInformationTextItem.md#text)

#### Defined in

main.ts:182030

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`type`](../interfaces/IProductInformationTextItem.md#type)

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

main.ts:182039

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

main.ts:182057

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)

#### Defined in

main.ts:182050
