[**Documentation**](../README.md)

***

[Documentation](../README.md) / Source

# Class: Source

## Implements

- [`ISource`](../interfaces/ISource.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Source()

> **new Source**(`data`?): [`Source`](Source.md)

#### Parameters

##### data?

[`ISource`](../interfaces/ISource.md)

#### Returns

[`Source`](Source.md)

#### Defined in

main.ts:223146

## Properties

### domain?

> `optional` **domain**: `string`

domain of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`domain`](../interfaces/ISource.md#domain)

#### Defined in

main.ts:223142

***

### image?

> `optional` **image**: `string`

featured image of the source

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`image`](../interfaces/ISource.md#image)

#### Defined in

main.ts:223140

***

### title?

> `optional` **title**: `string`

name of the source where the review was posted

#### Implementation of

[`ISource`](../interfaces/ISource.md).[`title`](../interfaces/ISource.md#title)

#### Defined in

main.ts:223138

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:223155

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:223174

***

### fromJS()

> `static` **fromJS**(`data`): [`Source`](Source.md)

#### Parameters

##### data

`any`

#### Returns

[`Source`](Source.md)

#### Defined in

main.ts:223167
