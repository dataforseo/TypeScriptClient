[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationExtendedItem

# Class: ProductInformationExtendedItem

Defined in: main.ts:194434

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductInformationExtendedItem()

> **new ProductInformationExtendedItem**(`data`?): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

Defined in: main.ts:194440

#### Parameters

##### data?

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24257

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

***

### contents?

> `optional` **contents**: [`ProductInformationRows`](ProductInformationRows.md)[]

Defined in: main.ts:194436

contains information specified about the product within the section_name

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`contents`](../interfaces/IProductInformationExtendedItem.md#contents)

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:24255

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`section_name`](../interfaces/IProductInformationExtendedItem.md#section_name)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`section_name`](BaseProductInformationItem.md#section_name)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24253

type of element

#### Implementation of

[`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md).[`type`](../interfaces/IProductInformationExtendedItem.md#type)

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`type`](BaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194445

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

Defined in: main.ts:194467

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`toJSON`](BaseProductInformationItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

Defined in: main.ts:194460

#### Parameters

##### data

`any`

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)
