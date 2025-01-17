[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseProductInformationItem

# Class: BaseProductInformationItem

Defined in: main.ts:24251

## Extended by

- [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)
- [`ProductInformationTextItem`](ProductInformationTextItem.md)
- [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

## Implements

- [`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

## Constructors

### new BaseProductInformationItem()

> **new BaseProductInformationItem**(`data`?): [`BaseProductInformationItem`](BaseProductInformationItem.md)

Defined in: main.ts:24259

#### Parameters

##### data?

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:24257

***

### section\_name?

> `optional` **section\_name**: `string`

Defined in: main.ts:24255

name of the section related to product information specified in the contents

#### Implementation of

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md).[`section_name`](../interfaces/IBaseProductInformationItem.md#section_name)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24253

type of element

#### Implementation of

[`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md).[`type`](../interfaces/IBaseProductInformationItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24269

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24298

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseProductInformationItem`](BaseProductInformationItem.md)

Defined in: main.ts:24276

#### Parameters

##### data

`any`

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)
