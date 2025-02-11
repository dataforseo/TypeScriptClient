[**Documentation**](../README.md)

***

[Documentation](../README.md) / Pages

# Class: Pages

Defined in: main.ts:169136

## Implements

- [`IPages`](../interfaces/IPages.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Pages()

> **new Pages**(`data`?): [`Pages`](Pages.md)

Defined in: main.ts:169146

#### Parameters

##### data?

[`IPages`](../interfaces/IPages.md)

#### Returns

[`Pages`](Pages.md)

## Properties

### page?

> `optional` **page**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:169142

information about the page with duplicate content

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`page`](../interfaces/IPages.md#page)

***

### similarity?

> `optional` **similarity**: `number`

Defined in: main.ts:169140

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`similarity`](../interfaces/IPages.md#similarity)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169155

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169177

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Pages`](Pages.md)

Defined in: main.ts:169170

#### Parameters

##### data

`any`

#### Returns

[`Pages`](Pages.md)
