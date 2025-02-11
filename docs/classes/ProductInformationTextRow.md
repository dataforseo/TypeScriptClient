[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationTextRow

# Class: ProductInformationTextRow

Defined in: main.ts:194804

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductInformationTextRow()

> **new ProductInformationTextRow**(`data`?): [`ProductInformationTextRow`](ProductInformationTextRow.md)

Defined in: main.ts:194810

#### Parameters

##### data?

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24320

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:194806

text of the voucher

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`text`](../interfaces/IProductInformationTextRow.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24316

type of element

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`type`](../interfaces/IProductInformationTextRow.md#type)

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`type`](BaseProductInformationRowItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194815

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`init`](BaseProductInformationRowItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194833

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`toJSON`](BaseProductInformationRowItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationTextRow`](ProductInformationTextRow.md)

Defined in: main.ts:194826

#### Parameters

##### data

`any`

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)
