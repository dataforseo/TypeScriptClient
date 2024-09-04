[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpScreenshotRequestInfo

# Class: SerpScreenshotRequestInfo

## Implements

- [`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpScreenshotRequestInfo()

> **new SerpScreenshotRequestInfo**(`data`?): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Parameters

• **data?**: [`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md)

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Defined in

main.ts:25062

## Properties

### browser\_preset?

> `optional` **browser\_preset**: `string`

browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
note: by default, browser preset corresponds to the device type specified in the POST request

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_preset`](../interfaces/ISerpScreenshotRequestInfo.md#browser_preset)

#### Defined in

main.ts:25046

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

height of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_height)

#### Defined in

main.ts:25054

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

browser scale factor
optional field
can be specified in the following range: 0.5-3

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_scale_factor)

#### Defined in

main.ts:25058

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

width of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_width)

#### Defined in

main.ts:25050

***

### task\_id?

> `optional` **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`task_id`](../interfaces/ISerpScreenshotRequestInfo.md#task_id)

#### Defined in

main.ts:25040

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:25071

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:25092

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Defined in

main.ts:25085
