[**Documentation**](../README.md)

***

[Documentation](../README.md) / Urls

# Class: Urls

Defined in: main.ts:173628

## Implements

- [`IUrls`](../interfaces/IUrls.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Urls()

> **new Urls**(`data`?): [`Urls`](Urls.md)

Defined in: main.ts:173636

#### Parameters

##### data?

[`IUrls`](../interfaces/IUrls.md)

#### Returns

[`Urls`](Urls.md)

## Properties

### anchor\_text?

> `optional` **anchor\_text**: `string`

Defined in: main.ts:173632

text of the URL’s anchor

#### Implementation of

[`IUrls`](../interfaces/IUrls.md).[`anchor_text`](../interfaces/IUrls.md#anchor_text)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:173630

other URL found in the content element

#### Implementation of

[`IUrls`](../interfaces/IUrls.md).[`url`](../interfaces/IUrls.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173645

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173663

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Urls`](Urls.md)

Defined in: main.ts:173656

#### Parameters

##### data

`any`

#### Returns

[`Urls`](Urls.md)
