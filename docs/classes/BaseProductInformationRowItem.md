**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseProductInformationRowItem

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

### new BaseProductInformationRowItem(data)

> **new BaseProductInformationRowItem**(`data`?): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

• **data?**: [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Source

main.ts:22522

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:22520

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22532

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22563

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Source

main.ts:22541
