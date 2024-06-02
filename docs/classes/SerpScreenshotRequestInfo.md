**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpScreenshotRequestInfo

# Class: SerpScreenshotRequestInfo

## Implements

- [`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpScreenshotRequestInfo(data)

> **new SerpScreenshotRequestInfo**(`data`?): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Parameters

• **data?**: [`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md)

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Source

main.ts:23975

## Properties

### browser\_preset?

> **`optional`** **browser\_preset**: `string`

browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
note: by default, browser preset corresponds to the device type specified in the POST request

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_preset`](../interfaces/ISerpScreenshotRequestInfo.md#browser_preset)

#### Source

main.ts:23959

***

### browser\_screen\_height?

> **`optional`** **browser\_screen\_height**: `number`

height of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_height)

#### Source

main.ts:23967

***

### browser\_screen\_scale\_factor?

> **`optional`** **browser\_screen\_scale\_factor**: `number`

browser scale factor
optional field
can be specified in the following range: 0.5-3

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_scale_factor)

#### Source

main.ts:23971

***

### browser\_screen\_width?

> **`optional`** **browser\_screen\_width**: `number`

width of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_width)

#### Source

main.ts:23963

***

### task\_id?

> **`optional`** **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`task_id`](../interfaces/ISerpScreenshotRequestInfo.md#task_id)

#### Source

main.ts:23953

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:23984

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:24005

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Source

main.ts:23998
