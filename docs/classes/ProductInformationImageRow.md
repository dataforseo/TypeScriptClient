[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ProductInformationImageRow

# Class: ProductInformationImageRow

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationImageRow()

> **new ProductInformationImageRow**(`data`?): [`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Parameters

• **data?**: [`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md)

#### Returns

[`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructors)

#### Defined in

main.ts:182084

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

main.ts:23422

***

### alt?

> `optional` **alt**: `string`

alternative text of the related product image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`alt`](../interfaces/IProductInformationImageRow.md#alt)

#### Defined in

main.ts:182078

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`type`](../interfaces/IProductInformationImageRow.md#type)

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`type`](BaseProductInformationRowItem.md#type)

#### Defined in

main.ts:23418

***

### url?

> `optional` **url**: `string`

URL of the image

#### Implementation of

[`IProductInformationImageRow`](../interfaces/IProductInformationImageRow.md).[`url`](../interfaces/IProductInformationImageRow.md#url)

#### Defined in

main.ts:182080

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

main.ts:182089

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

main.ts:182108

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationImageRow`](ProductInformationImageRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)

#### Defined in

main.ts:182101
