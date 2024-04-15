**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductInformationTextItem

# Class: ProductInformationTextItem

## Extends

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

## Implements

- [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationTextItem(data)

> **new ProductInformationTextItem**(`data`?): [`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Parameters

• **data?**: [`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md)

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`constructor`](BaseProductInformationItem.md#constructors)

#### Source

main.ts:178111

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`_discriminator`](BaseProductInformationItem.md#_discriminator)

#### Source

main.ts:22234

***

### section\_name?

> **`optional`** **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`section_name`](../interfaces/IProductInformationTextItem.md#section_name)

#### Source

main.ts:178105

***

### text?

> **`optional`** **text**: `string`

text specified under the given title within the section_name

#### Implementation of

[`IProductInformationTextItem`](../interfaces/IProductInformationTextItem.md).[`text`](../interfaces/IProductInformationTextItem.md#text)

#### Source

main.ts:178107

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

main.ts:178116

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

main.ts:178135

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationTextItem`](ProductInformationTextItem.md)

#### Overrides

[`BaseProductInformationItem`](BaseProductInformationItem.md).[`fromJS`](BaseProductInformationItem.md#fromjs)

#### Source

main.ts:178128
