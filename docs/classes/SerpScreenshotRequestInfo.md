[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpScreenshotRequestInfo

# Class: SerpScreenshotRequestInfo

Defined in: main.ts:26105

## Implements

- [`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpScreenshotRequestInfo()

> **new SerpScreenshotRequestInfo**(`data`?): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

Defined in: main.ts:26132

#### Parameters

##### data?

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md)

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

## Properties

### browser\_preset?

> `optional` **browser\_preset**: `string`

Defined in: main.ts:26116

browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
note: by default, browser preset corresponds to the device type specified in the POST request

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_preset`](../interfaces/ISerpScreenshotRequestInfo.md#browser_preset)

***

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:26124

height of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_height)

***

### browser\_screen\_scale\_factor?

> `optional` **browser\_screen\_scale\_factor**: `number`

Defined in: main.ts:26128

browser scale factor
optional field
can be specified in the following range: 0.5-3

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_scale_factor`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_scale_factor)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:26120

width of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_width)

***

### task\_id?

> `optional` **task\_id**: `string`

Defined in: main.ts:26110

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Implementation of

[`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md).[`task_id`](../interfaces/ISerpScreenshotRequestInfo.md#task_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26141

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26162

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

Defined in: main.ts:26155

#### Parameters

##### data

`any`

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)
