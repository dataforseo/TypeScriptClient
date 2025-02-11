[**Documentation**](../README.md)

***

[Documentation](../README.md) / Source

# Class: Source

Defined in: main.ts:223712

## Implements

- [`ISource`](../interfaces/ISource.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Source()

> **new Source**(`data`?): [`Source`](Source.md)

Defined in: main.ts:223722

#### Parameters

##### data?

[`ISource`](../interfaces/ISource.md)

#### Returns

[`Source`](Source.md)

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:223718

domain of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`domain`](../interfaces/ISource.md#domain)

***

### image?

> `optional` **image**: `string`

Defined in: main.ts:223716

featured image of the source

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`image`](../interfaces/ISource.md#image)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:223714

name of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`title`](../interfaces/ISource.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:223731

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:223750

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Source`](Source.md)

Defined in: main.ts:223743

#### Parameters

##### data

`any`

#### Returns

[`Source`](Source.md)
