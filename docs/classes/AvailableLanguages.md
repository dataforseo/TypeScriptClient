**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AvailableLanguages

# Class: AvailableLanguages

## Implements

- [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvailableLanguages(data)

> **new AvailableLanguages**(`data`?): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

• **data?**: [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Source

main.ts:81321

## Properties

### available\_sources?

> **`optional`** **available\_sources**: `string`[]

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`available_sources`](../interfaces/IAvailableLanguages.md#available_sources)

#### Source

main.ts:81309

***

### keywords?

> **`optional`** **keywords**: `number`

the number of keywords available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`keywords`](../interfaces/IAvailableLanguages.md#keywords)

#### Source

main.ts:81315

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code according to ISO 639-1

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_code`](../interfaces/IAvailableLanguages.md#language_code)

#### Source

main.ts:81313

***

### language\_name?

> **`optional`** **language\_name**: `string`

language name

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_name`](../interfaces/IAvailableLanguages.md#language_name)

#### Source

main.ts:81311

***

### serps?

> **`optional`** **serps**: `number`

the number of SERP pages available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`serps`](../interfaces/IAvailableLanguages.md#serps)

#### Source

main.ts:81317

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:81330

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:81355

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Source

main.ts:81348
