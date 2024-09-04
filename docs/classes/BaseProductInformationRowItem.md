[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseProductInformationRowItem

# Class: BaseProductInformationRowItem

## Extended by

- [`ProductInformationImageRow`](ProductInformationImageRow.md)
- [`ProductInformationTextRow`](ProductInformationTextRow.md)
- [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

## Implements

- [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseProductInformationRowItem()

> **new BaseProductInformationRowItem**(`data`?): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

• **data?**: [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Defined in

main.ts:23101

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:23099

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:23111

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:23142

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Defined in

main.ts:23120
