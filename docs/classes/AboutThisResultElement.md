**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AboutThisResultElement

# Class: AboutThisResultElement

## Implements

- [`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AboutThisResultElement(data)

> **new AboutThisResultElement**(`data`?): [`AboutThisResultElement`](AboutThisResultElement.md)

#### Parameters

• **data?**: [`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md)

#### Returns

[`AboutThisResultElement`](AboutThisResultElement.md)

#### Source

main.ts:21550

## Properties

### language?

> **`optional`** **language**: `string`

the language of the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`language`](../interfaces/IAboutThisResultElement.md#language)

#### Source

main.ts:21540

***

### location?

> **`optional`** **location**: `string`

location for which the result is relevant

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`location`](../interfaces/IAboutThisResultElement.md#location)

#### Source

main.ts:21542

***

### related\_terms?

> **`optional`** **related\_terms**: `string`[]

related search terms that appear in the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`related_terms`](../interfaces/IAboutThisResultElement.md#related_terms)

#### Source

main.ts:21546

***

### search\_terms?

> **`optional`** **search\_terms**: `string`[]

matching search terms that appear in the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`search_terms`](../interfaces/IAboutThisResultElement.md#search_terms)

#### Source

main.ts:21544

***

### source?

> **`optional`** **source**: `string`

source of additional information about the result

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source`](../interfaces/IAboutThisResultElement.md#source)

#### Source

main.ts:21533

***

### source\_info?

> **`optional`** **source\_info**: `string`

additional information about the result
description of the website from Wikipedia or another additional context

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source_info`](../interfaces/IAboutThisResultElement.md#source_info)

#### Source

main.ts:21536

***

### source\_url?

> **`optional`** **source\_url**: `string`

URL to full information from the 'source'

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`source_url`](../interfaces/IAboutThisResultElement.md#source_url)

#### Source

main.ts:21538

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`type`](../interfaces/IAboutThisResultElement.md#type)

#### Source

main.ts:21529

***

### url?

> **`optional`** **url**: `string`

result’s URL

#### Implementation of

[`IAboutThisResultElement`](../interfaces/IAboutThisResultElement.md).[`url`](../interfaces/IAboutThisResultElement.md#url)

#### Source

main.ts:21531

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21559

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21592

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AboutThisResultElement`](AboutThisResultElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AboutThisResultElement`](AboutThisResultElement.md)

#### Source

main.ts:21585
