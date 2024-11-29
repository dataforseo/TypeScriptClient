[**Documentation**](../README.md)

***

[Documentation](../README.md) / ScreenshotItem

# Class: ScreenshotItem

## Implements

- [`IScreenshotItem`](../interfaces/IScreenshotItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ScreenshotItem()

> **new ScreenshotItem**(`data`?): [`ScreenshotItem`](ScreenshotItem.md)

#### Parameters

##### data?

[`IScreenshotItem`](../interfaces/IScreenshotItem.md)

#### Returns

[`ScreenshotItem`](ScreenshotItem.md)

#### Defined in

main.ts:26213

## Properties

### image?

> `optional` **image**: `string`

screenshot of the requested page
URL of the page screenshot on the DataForSEO storage
note: the page screenshot saved on the DataForSEO storage only remains accessible for one day after making the request

#### Implementation of

[`IScreenshotItem`](../interfaces/IScreenshotItem.md).[`image`](../interfaces/IScreenshotItem.md#image)

#### Defined in

main.ts:26209

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:26222

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:26239

***

### fromJS()

> `static` **fromJS**(`data`): [`ScreenshotItem`](ScreenshotItem.md)

#### Parameters

##### data

`any`

#### Returns

[`ScreenshotItem`](ScreenshotItem.md)

#### Defined in

main.ts:26232
