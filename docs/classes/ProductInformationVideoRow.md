**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductInformationVideoRow

# Class: ProductInformationVideoRow

## Extends

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

## Implements

- [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationVideoRow(data)

> **new ProductInformationVideoRow**(`data`?): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

• **data?**: [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md)

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`constructor`](BaseProductInformationRowItem.md#constructors)

#### Source

main.ts:182581

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`_discriminator`](BaseProductInformationRowItem.md#_discriminator)

#### Source

main.ts:22520

***

### preview?

> **`optional`** **preview**: `string`

URL of the preview image for the related video

#### Implementation of

[`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md).[`preview`](../interfaces/IProductInformationVideoRow.md#preview)

#### Source

main.ts:182575

***

### url?

> **`optional`** **url**: `string`

URL of the image

#### Implementation of

[`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md).[`url`](../interfaces/IProductInformationVideoRow.md#url)

#### Source

main.ts:182577

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

main.ts:182586

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

main.ts:182605

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md).[`fromJS`](BaseProductInformationRowItem.md#fromjs)

#### Source

main.ts:182598
