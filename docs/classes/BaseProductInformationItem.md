[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseProductInformationItem

# Class: BaseProductInformationItem

## Extended by

- [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)
- [`ProductInformationTextItem`](ProductInformationTextItem.md)
- [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

## Implements

- [`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

## Constructors

### new BaseProductInformationItem()

> **new BaseProductInformationItem**(`data`?): [`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Parameters

##### data?

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Defined in

main.ts:24259

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:24257

***

### section\_name?

> `optional` **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md).[`section_name`](../interfaces/IBaseProductInformationItem.md#section_name)

#### Defined in

main.ts:24255

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md).[`type`](../interfaces/IBaseProductInformationItem.md#type)

#### Defined in

main.ts:24253

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:24269

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:24298

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Defined in

main.ts:24276
