[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ProductInformationVideoRow

# Class: ProductInformationVideoRow

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationVideoRow()

> **new ProductInformationVideoRow**(`data`?): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

• **data?**: [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md)

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructors)

#### Defined in

main.ts:187106

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

main.ts:23099

***

### preview?

> `optional` **preview**: `string`

URL of the preview image for the related video

#### Implementation of

[`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md).[`preview`](../interfaces/IProductInformationVideoRow.md#preview)

#### Defined in

main.ts:187100

***

### url?

> `optional` **url**: `string`

URL of the image

#### Implementation of

[`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md).[`url`](../interfaces/IProductInformationVideoRow.md#url)

#### Defined in

main.ts:187102

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`init`](BaseProductInformationRowItem.md#init)

#### Defined in

main.ts:187111

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`toJSON`](BaseProductInformationRowItem.md#tojson)

#### Defined in

main.ts:187130

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)

#### Defined in

main.ts:187123
