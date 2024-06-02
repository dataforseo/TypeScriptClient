**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductInformationTextRow

# Class: ProductInformationTextRow

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationTextRow(data)

> **new ProductInformationTextRow**(`data`?): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

• **data?**: [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructors)

#### Source

main.ts:180376

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

#### Source

main.ts:22328

***

### text?

> **`optional`** **text**: `string`

text specified under the given title within the section_name

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`text`](../interfaces/IProductInformationTextRow.md#text)

#### Source

main.ts:180372

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`init`](BaseProductInformationRowItem.md#init)

#### Source

main.ts:180381

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`toJSON`](BaseProductInformationRowItem.md#tojson)

#### Source

main.ts:180399

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)

#### Source

main.ts:180392
