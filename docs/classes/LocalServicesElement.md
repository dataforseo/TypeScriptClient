**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LocalServicesElement

# Class: LocalServicesElement

## Implements

- [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocalServicesElement(data)

> **new LocalServicesElement**(`data`?): [`LocalServicesElement`](LocalServicesElement.md)

#### Parameters

• **data?**: [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

#### Returns

[`LocalServicesElement`](LocalServicesElement.md)

#### Source

main.ts:35300

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`description`](../interfaces/ILocalServicesElement.md#description)

#### Source

main.ts:35291

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`domain`](../interfaces/ILocalServicesElement.md#domain)

#### Source

main.ts:35289

***

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL of the image featured in the element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`profile_image_url`](../interfaces/ILocalServicesElement.md#profile_image_url)

#### Source

main.ts:35296

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`rating`](../interfaces/ILocalServicesElement.md#rating)

#### Source

main.ts:35294

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`title`](../interfaces/ILocalServicesElement.md#title)

#### Source

main.ts:35285

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`type`](../interfaces/ILocalServicesElement.md#type)

#### Source

main.ts:35283

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`ILocalServicesElement`](../interfaces/ILocalServicesElement.md).[`url`](../interfaces/ILocalServicesElement.md#url)

#### Source

main.ts:35287

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:35309

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:35332

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LocalServicesElement`](LocalServicesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocalServicesElement`](LocalServicesElement.md)

#### Source

main.ts:35325
