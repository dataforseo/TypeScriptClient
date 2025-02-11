[**Documentation**](../README.md)

***

[Documentation](../README.md) / FaqBox

# Class: FaqBox

Defined in: main.ts:31301

## Implements

- [`IFaqBox`](../interfaces/IFaqBox.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FaqBox()

> **new FaqBox**(`data`?): [`FaqBox`](FaqBox.md)

Defined in: main.ts:31310

#### Parameters

##### data?

[`IFaqBox`](../interfaces/IFaqBox.md)

#### Returns

[`FaqBox`](FaqBox.md)

## Properties

### items?

> `optional` **items**: [`FaqBoxElement`](FaqBoxElement.md)[]

Defined in: main.ts:31306

additional items present in the element
if there are none, equals null

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`items`](../interfaces/IFaqBox.md#items)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31303

type of element

#### Implementation of

[`IFaqBox`](../interfaces/IFaqBox.md).[`type`](../interfaces/IFaqBox.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31319

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:31341

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`FaqBox`](FaqBox.md)

Defined in: main.ts:31334

#### Parameters

##### data

`any`

#### Returns

[`FaqBox`](FaqBox.md)
