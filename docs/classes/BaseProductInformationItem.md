**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseProductInformationItem

# Class: BaseProductInformationItem

## Extended by

- [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)
- [`ProductInformationTextItem`](ProductInformationTextItem.md)
- [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

## Implements

- [`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseProductInformationItem(data)

> **new BaseProductInformationItem**(`data`?): [`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Parameters

• **data?**: [`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Source

main.ts:22267

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:22265

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22277

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22308

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Source

main.ts:22286
