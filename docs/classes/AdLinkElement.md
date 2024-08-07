**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AdLinkElement

# Class: AdLinkElement

## Implements

- [`IAdLinkElement`](../interfaces/IAdLinkElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AdLinkElement(data)

> **new AdLinkElement**(`data`?): [`AdLinkElement`](AdLinkElement.md)

#### Parameters

• **data?**: [`IAdLinkElement`](../interfaces/IAdLinkElement.md)

#### Returns

[`AdLinkElement`](AdLinkElement.md)

#### Source

main.ts:29273

## Properties

### ad\_aclk?

> **`optional`** **ad\_aclk**: `string`

the identifier of the ad

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`ad_aclk`](../interfaces/IAdLinkElement.md#ad_aclk)

#### Source

main.ts:29269

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`description`](../interfaces/IAdLinkElement.md#description)

#### Source

main.ts:29263

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`domain`](../interfaces/IAdLinkElement.md#domain)

#### Source

main.ts:29267

***

### title?

> **`optional`** **title**: `string`

title of the element

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`title`](../interfaces/IAdLinkElement.md#title)

#### Source

main.ts:29261

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`type`](../interfaces/IAdLinkElement.md#type)

#### Source

main.ts:29259

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`url`](../interfaces/IAdLinkElement.md#url)

#### Source

main.ts:29265

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:29282

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:29304

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AdLinkElement`](AdLinkElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AdLinkElement`](AdLinkElement.md)

#### Source

main.ts:29297
