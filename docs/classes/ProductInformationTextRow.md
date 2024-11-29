[**Documentation**](../README.md)

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

### new ProductInformationTextRow()

> **new ProductInformationTextRow**(`data`?): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

##### data?

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructors)

#### Defined in

main.ts:194254

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

main.ts:24320

***

### text?

> `optional` **text**: `string`

text specified under the given title within the section_name

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`text`](../interfaces/IProductInformationTextRow.md#text)

#### Defined in

main.ts:194250

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md).[`type`](../interfaces/IProductInformationTextRow.md#type)

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`type`](BaseProductInformationRowItem.md#type)

#### Defined in

main.ts:24316

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`init`](BaseProductInformationRowItem.md#init)

#### Defined in

main.ts:194259

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`toJSON`](BaseProductInformationRowItem.md#tojson)

#### Defined in

main.ts:194277

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

##### data

`any`

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)

#### Defined in

main.ts:194270
