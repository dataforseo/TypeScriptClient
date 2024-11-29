[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseProductInformationRowItem

# Class: BaseProductInformationRowItem

## Extended by

- [`ProductInformationImageRow`](ProductInformationImageRow.md)
- [`ProductInformationTextRow`](ProductInformationTextRow.md)

## Implements

- [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseProductInformationRowItem()

> **new BaseProductInformationRowItem**(`data`?): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

##### data?

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Defined in

main.ts:24322

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:24320

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md).[`type`](../interfaces/IBaseProductInformationRowItem.md#type)

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

#### Defined in

main.ts:24332

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:24359

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Defined in

main.ts:24342
