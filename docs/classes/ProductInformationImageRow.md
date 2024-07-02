**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductInformationImageRow

# Class: ProductInformationImageRow

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationImageRow(data)

> **new ProductInformationImageRow**(`data`?): [`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Parameters

• **data?**: [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

#### Returns

[`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructors)

#### Source

main.ts:181904

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

#### Source

main.ts:22520

***

### alt?

> **`optional`** **alt**: `string`

alternative text of the related product image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`alt`](../interfaces/IProductInformationImageRow.md#alt)

#### Source

main.ts:181898

***

### url?

> **`optional`** **url**: `string`

URL of the image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`url`](../interfaces/IProductInformationImageRow.md#url)

#### Source

main.ts:181900

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

main.ts:181909

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

main.ts:181928

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)

#### Source

main.ts:181921
