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

main.ts:28437

## Properties

### ad\_aclk?

> **`optional`** **ad\_aclk**: `string`

the identifier of the ad

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`ad_aclk`](../interfaces/IAdLinkElement.md#ad_aclk)

#### Source

main.ts:28433

***

### description?

> **`optional`** **description**: `string`

description of the results element in SERP

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`description`](../interfaces/IAdLinkElement.md#description)

#### Source

main.ts:28427

***

### domain?

> **`optional`** **domain**: `string`

domain where a link points

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`domain`](../interfaces/IAdLinkElement.md#domain)

#### Source

main.ts:28431

***

### title?

> **`optional`** **title**: `string`

title of the element

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`title`](../interfaces/IAdLinkElement.md#title)

#### Source

main.ts:28425

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`type`](../interfaces/IAdLinkElement.md#type)

#### Source

main.ts:28423

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IAdLinkElement`](../interfaces/IAdLinkElement.md).[`url`](../interfaces/IAdLinkElement.md#url)

#### Source

main.ts:28429

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:28446

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:28468

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AdLinkElement`](AdLinkElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AdLinkElement`](AdLinkElement.md)

#### Source

main.ts:28461
