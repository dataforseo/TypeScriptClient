[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ProductInformationDetailsItem

# Class: ProductInformationDetailsItem

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationDetailsItem()

> **new ProductInformationDetailsItem**(`data`?): [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Parameters

• **data?**: [`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md)

#### Returns

[`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

#### Defined in

main.ts:181974

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

#### Defined in

main.ts:23359

***

### body?

> `optional` **body**: `object`

contains information specified about the product within the section_name

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`body`](../interfaces/IProductInformationDetailsItem.md#body)

#### Defined in

main.ts:181970

***

### section\_name?

> `optional` **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`section_name`](../interfaces/IProductInformationDetailsItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

#### Defined in

main.ts:23357

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md).[`type`](../interfaces/IProductInformationDetailsItem.md#type)

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

main.ts:181979

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

main.ts:182003

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)

#### Defined in

main.ts:181996
