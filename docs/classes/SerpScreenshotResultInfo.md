[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpScreenshotResultInfo

# Class: SerpScreenshotResultInfo

Defined in: main.ts:26259

## Implements

- [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpScreenshotResultInfo()

> **new SerpScreenshotResultInfo**(`data`?): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

Defined in: main.ts:26267

#### Parameters

##### data?

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

## Properties

### items?

> `optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

Defined in: main.ts:26263

items array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items`](../interfaces/ISerpScreenshotResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:26261

number of items in the results array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items_count`](../interfaces/ISerpScreenshotResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26276

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26298

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)

Defined in: main.ts:26291

#### Parameters

##### data

`any`

#### Returns

[`SerpScreenshotResultInfo`](SerpScreenshotResultInfo.md)
