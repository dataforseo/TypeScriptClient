**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TwitterElement

# Class: TwitterElement

## Implements

- [`ITwitterElement`](../interfaces/ITwitterElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TwitterElement(data)

> **new TwitterElement**(`data`?): [`TwitterElement`](TwitterElement.md)

#### Parameters

• **data?**: [`ITwitterElement`](../interfaces/ITwitterElement.md)

#### Returns

[`TwitterElement`](TwitterElement.md)

#### Source

main.ts:30538

## Properties

### date?

> **`optional`** **date**: `string`

the date when the page source of the element was published

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`date`](../interfaces/ITwitterElement.md#date)

#### Source

main.ts:30527

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`timestamp`](../interfaces/ITwitterElement.md#timestamp)

#### Source

main.ts:30532

***

### tweet?

> **`optional`** **tweet**: `string`

tweet message

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`tweet`](../interfaces/ITwitterElement.md#tweet)

#### Source

main.ts:30525

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`type`](../interfaces/ITwitterElement.md#type)

#### Source

main.ts:30523

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`url`](../interfaces/ITwitterElement.md#url)

#### Source

main.ts:30534

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:30547

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:30568

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TwitterElement`](TwitterElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`TwitterElement`](TwitterElement.md)

#### Source

main.ts:30561
