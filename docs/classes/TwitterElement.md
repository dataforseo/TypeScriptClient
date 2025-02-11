[**Documentation**](../README.md)

***

[Documentation](../README.md) / TwitterElement

# Class: TwitterElement

Defined in: main.ts:32269

## Implements

- [`ITwitterElement`](../interfaces/ITwitterElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TwitterElement()

> **new TwitterElement**(`data`?): [`TwitterElement`](TwitterElement.md)

Defined in: main.ts:32286

#### Parameters

##### data?

[`ITwitterElement`](../interfaces/ITwitterElement.md)

#### Returns

[`TwitterElement`](TwitterElement.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:32275

the date when the page source of the element was published

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`date`](../interfaces/ITwitterElement.md#date)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:32280

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`timestamp`](../interfaces/ITwitterElement.md#timestamp)

***

### tweet?

> `optional` **tweet**: `string`

Defined in: main.ts:32273

tweet message

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`tweet`](../interfaces/ITwitterElement.md#tweet)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:32271

type of element

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`type`](../interfaces/ITwitterElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:32282

URL

#### Implementation of

[`ITwitterElement`](../interfaces/ITwitterElement.md).[`url`](../interfaces/ITwitterElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32295

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32316

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TwitterElement`](TwitterElement.md)

Defined in: main.ts:32309

#### Parameters

##### data

`any`

#### Returns

[`TwitterElement`](TwitterElement.md)
